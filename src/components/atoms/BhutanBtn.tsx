import { useState } from "react"
import bhutan_logo from "@/assets/butan_logo.png"
import { Button } from "../ui/button"

const BhutanBtn = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Button
      variant="default"
      loading={loading}         
      onClick={handleClick}     
      className="flex items-center gap-2 bg-[#124143] w-full justify-center"
    >
      <img src={bhutan_logo} alt="Bhutan NDI" className="w-5 h-5" />
      <span>Login with Bhutan NDI</span>
    </Button>
  )
}

export default BhutanBtn