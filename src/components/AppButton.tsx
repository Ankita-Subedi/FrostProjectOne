import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import type { ButtonProps } from './ui/button';
export interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
}

export default function AppButton({
  children,
  className,
  loading = false,
  loadingText,
  fullWidth = false,
  disabled,
  variant = 'default',
  size = 'default',
  ...props
}: CustomButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <Button
      disabled={isDisabled}
      variant={variant}
      size={size}
      className={cn(
        'transition-all duration-200',
        fullWidth && 'w-full',
        loading && 'cursor-not-allowed',
        className
      )}
      {...props}
    >
      {loading && (
        <Loader2
          className={cn(
            'animate-spin',
            size === 'sm' ? 'h-3 w-3 mr-1' : 'h-4 w-4 mr-2'
          )}
          aria-hidden="true"
        />
      )}

      {loading && loadingText ? loadingText : children}
    </Button>
  );
}