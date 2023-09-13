"use client"; // Error components must be Client Components

import Button from "@/components/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className=" text-2xl font-bold">Something went wrong!</h2>
      <p>May be due to poor internet connection</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </Button>
    </div>
  );
}
