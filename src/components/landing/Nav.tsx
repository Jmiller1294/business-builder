import { Zap } from "lucide-react";
import { Btn } from "./ui";
import LoginButton from "./LoginButton";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-brand to-violet">
            <Zap size={16} color="#fff" />
          </div>
          <span className="text-[17px] font-extrabold tracking-[-0.4px] text-chalk">OpBase</span>
        </div>
        <div className="flex items-center gap-[18px]">
          <a href="#how" className="text-[13.5px] text-mist no-underline">How it works</a>
          <a href="#pricing" className="text-[13.5px] text-mist no-underline">Pricing</a>
          <LoginButton />
          <Btn primary>Build my board</Btn>
        </div>
      </div>
    </nav>
  );
}
