// components/LoveCountdown.tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/public/memories/our7.jpg";

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// ✅ Fixed time difference calculation (real calendar-based)
const getTimeDifference = (startDate: Date): TimeLeft => {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
};

export default function LoveCountdown() {
  const [time, setTime] = useState<TimeLeft>(
    getTimeDifference(new Date("2024-02-13T00:00:00"))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeDifference(new Date("2024-02-13T00:00:00")));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 p-4 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-2">
        Our Love Journey
      </h1>
      <p className="text-pink-700 mb-6">How long have we been together?</p>

      <img
        src={Logo.src}
        alt="Us"
        className="w-40 h-40 rounded-full object-cover border-4 border-pink-400 shadow-lg mb-6"
      />

      <Card className="bg-white bg-opacity-70 backdrop-blur-md px-6 py-4 shadow-xl rounded-xl">
        <CardContent className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-pink-600 text-lg font-semibold">
          <div>
            <span>{String(time.years).padStart(2, "0")}</span>
            <div className="text-xs">Years</div>
          </div>
          <div>
            <span>{String(time.months).padStart(2, "0")}</span>
            <div className="text-xs">Months</div>
          </div>
          <div>
            <span>{String(time.days).padStart(2, "0")}</span>
            <div className="text-xs">Days</div>
          </div>
          <div>
            <span>{String(time.hours).padStart(2, "0")}</span>
            <div className="text-xs">Hours</div>
          </div>
          <div>
            <span>{String(time.minutes).padStart(2, "0")}</span>
            <div className="text-xs">Minutes</div>
          </div>
          <div>
            <span>{String(time.seconds).padStart(2, "0")}</span>
            <div className="text-xs">Seconds</div>
          </div>
        </CardContent>
      </Card>

      <p className="mt-6 text-sm text-pink-800">
        ❤️ Thank you for being my sunshine and my forever soulmate. ❤️
      </p>
    </div>
  );
}
