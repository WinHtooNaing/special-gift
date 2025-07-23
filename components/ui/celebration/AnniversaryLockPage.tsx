"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import styles from "./AnniversaryCelebration.module.css";

export default function AnniversaryLockPage() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleCheck = () => {
    if (otp === "1322024") {
      setMessage("✅ Correct OTP!");
      setError(false);
    } else {
      setMessage("❌ Invalid OTP");
      setError(true);
    }
  };

  return (
    <div className={styles.lockBg}>
      <span className={styles.heartAccent}>💖</span>
      <Card
        className={`w-full max-w-md shadow-2xl border-2 border-pink-200 bg-white/80 backdrop-blur-lg ${styles.cardPadding}`}
      >
        <CardHeader>
          <CardTitle className="text-center text-pink-500 text-2xl font-bold drop-shadow-lg">
            Anniversary's Lock
          </CardTitle>
          <CardDescription className="text-center text-md text-pink-400 italic">
            shune lae seesir
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4">
          <InputOTP maxLength={7} value={otp} onChange={(val) => setOtp(val)}>
            <InputOTPGroup className="flex justify-center gap-2">
              {[...Array(7)].map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {message && (
            <p
              className={`text-md font-semibold ${
                error ? "text-red-500" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button
            onClick={handleCheck}
            className="w-full bg-[#fb6f92] hover:bg-pink-400 text-white font-bold text-lg shadow-lg transition"
          >
            Unlock My Heart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
