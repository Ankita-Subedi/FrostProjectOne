import { Routes, Route } from "react-router-dom"
import {AuthCard} from "./pages/AuthCard"
import SignupPage from "./pages/SignupPage"

function App() {

  return (
    <>
    <SignupPage/>
      <Routes>
        <Route path="/login" element={<AuthCard />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
