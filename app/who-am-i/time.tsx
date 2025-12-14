"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Australia/Sydney",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          timeZone: "Australia/Sydney",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return currentTime;
}