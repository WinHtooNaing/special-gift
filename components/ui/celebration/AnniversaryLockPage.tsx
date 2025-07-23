'use client'

import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AnniversaryLockPage() {
  const [otp, setOtp] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  const handleCheck = () => {
    if (otp === "1322024") {
      setMessage("✅ Correct OTP!")
      setError(false)
    } else {
      setMessage("❌ Invalid OTP")
      setError(true)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Anniversary's Lock</CardTitle>
          <CardDescription className="text-center text-sm text-gray-500">shune lae seesir </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4 ">
          <InputOTP maxLength={7} value={otp} onChange={(val) => setOtp(val)}>
            <InputOTPGroup className="flex justify-center gap-2">
              {[...Array(7)].map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {message && (
            <p className={`text-sm ${error ? "text-red-600" : "text-green-600"}`}>
              {message}
            </p>
          )}
        </CardContent>

        <CardFooter className="flex justify-center ">
           <Button onClick={handleCheck} className="w-full bg-[#fb6f92]" >Unlock My Heart</Button>
         
        </CardFooter>
      </Card>
    </div>
  )
}
