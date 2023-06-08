"use client";

import MyButton from "@/components/Utils/MyButton";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <MyButton className="mt-5" btntype="lite" onClick={() => reset()}>
        Try again
      </MyButton>
    </div>
  );
}
