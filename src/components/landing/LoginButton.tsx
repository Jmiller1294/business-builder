"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard")}
      className="text-[13.5px] text-mist no-underline"
    >
      Login
    </button>
  );
}