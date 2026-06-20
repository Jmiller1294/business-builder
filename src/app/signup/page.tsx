"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSignup() {
    // const supabase = createClient();
    // const { error } = await supabase.auth.signUp({ email, password });
    // if (error) return setError(error.message);
    router.push("/onboarding"); // new users go straight to building their board
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-panel border border-line rounded-2xl p-7">
        <h1 className="text-xl font-bold text-chalk mb-5">
          Create your account
        </h1>
        <input
          className="w-full mb-3 px-3 py-2 rounded-lg bg-ink border border-line text-chalk"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-4 px-3 py-2 rounded-lg bg-ink border border-line text-chalk"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button
          onClick={handleSignup}
          className="w-full py-2.5 rounded-lg bg-brand text-white font-semibold"
        >
          Sign up
        </button>
        <p className="text-ghost text-sm mt-4 text-center">
          Have an account?{" "}
          <Link href="/login" className="text-brand2">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
