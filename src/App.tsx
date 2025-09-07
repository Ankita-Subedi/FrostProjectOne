import { Routes, Route } from "react-router-dom"
import {AuthCard} from "./pages/AuthCard"
import SignupPage from "./pages/SignupPage"
// import MainPage from "./pages/MainPage"
import TestMain from "./pages/TestMain"

function App() {

  return (
    <>
    <TestMain/>
      <Routes>
        <Route path="/login" element={<AuthCard />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
