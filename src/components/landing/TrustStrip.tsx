export function TrustStrip() {
  return (
    <div className="border-y border-line bg-white/[0.015]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-[30px] px-6 py-[22px]">
        <span className="text-[12.5px] font-semibold text-dim">Works with the tools you already use</span>
        {["QuickBooks", "Stripe", "Google Calendar", "Twilio", "Gmail"].map((n) => (
          <span key={n} className="text-[14.5px] font-bold text-mist opacity-80">{n}</span>
        ))}
      </div>
    </div>
  );
}
