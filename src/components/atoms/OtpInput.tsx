import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type OtpInputProps = {
  value?: string;
  onChange: (val: string) => void;
  length?: number;
  autoFocus?: boolean;
  hasError?: boolean;
};

export function OtpInput({
  value = "",
  onChange,
  length = 6,
  autoFocus = false,
  hasError = false,
}: OtpInputProps) {
  const [digits, setDigits] = useState<string[]>(
    Array.from({ length }, () => "")
  );
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const raw = (value ?? "").replace(/\D/g, "").slice(0, length);
    const arr = Array.from({ length }, (_, i) => raw[i] ?? "");
    setDigits(arr);
  }, [value, length]);

  useEffect(() => {
    if (autoFocus) {
      inputsRef.current[0]?.focus();
      inputsRef.current[0]?.select?.();
    }
  }, [autoFocus]);

  const updateDigits = (next: string[]) => {
    setDigits(next);
    onChange(next.join(""));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) {
      const next = [...digits];
      next[idx] = "";
      updateDigits(next);
      return;
    }
    const char = raw.slice(-1);
    const next = [...digits];
    next[idx] = char;
    updateDigits(next);
    if (idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
      inputsRef.current[idx + 1]?.select?.();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (digits[idx]) {
        const next = [...digits];
        next[idx] = "";
        updateDigits(next);
      } else if (idx > 0) {
        inputsRef.current[idx - 1]?.focus();
        const next = [...digits];
        next[idx - 1] = "";
        updateDigits(next);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    const arr = Array.from({ length }, (_, i) => pasted[i] ?? "");
    updateDigits(arr);
    const focusIndex = Math.min(pasted.length, length - 1);
    inputsRef.current[focusIndex]?.focus();
  };

  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "flex rounded-md overflow-hidden border divide-x",
          hasError
            ? "border-red-500 divide-red-500"
            : "border-gray-300 divide-gray-300"
        )}
      >
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={digits[i] ?? ""}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            ref={(el) => (inputsRef.current[i] = el)}
            className="w-10 h-10 md:w-10 md:h-10 text-center text-lg font-medium outline-none focus:ring-0"
          />
        ))}
      </div>
    </div>
  );
}

export default OtpInput;
