import { Routes, Route } from "react-router-dom";
import { AuthCard } from "./pages/AuthCard";
import SignupPage from "./pages/SignupPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import OtpVerificationPage from "./pages/OTPVerification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthCard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/otp-verification" element={<OtpVerificationPage />} />
      </Routes>
    </>
  );
}

export default App;
