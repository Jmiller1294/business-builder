import Link from "next/link";

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-semibold tracking-widest uppercase text-ghost mb-6">
        OpBase
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-chalk max-w-2xl leading-tight">
        An operations dashboard built for{" "}
        <em className="text-brand2 not-italic">your</em> business.
      </h1>
      <p className="text-ghost mt-4 max-w-md">
        Answer five questions. We build the dashboard — your stages, your
        checklists, your team — ready on day one.
      </p>
      <div className="flex gap-3 mt-8">
        <Link
          href="/signup"
          className="px-6 py-3 rounded-lg bg-brand text-white font-semibold"
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 rounded-lg border border-line text-chalk font-semibold"
        >
          Log in
        </Link>
      </div>
    </main>
  );
}
