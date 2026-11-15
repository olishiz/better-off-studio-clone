import { WHATSAPP } from "./data";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Shiz on WhatsApp"
      className="fixed right-20 bottom-20 s:right-30 s:bottom-30 z-[998] flex items-center justify-center w-[5.6rem] h-[5.6rem] s:w-[6rem] s:h-[6rem] rounded-full bg-black text-white ring-1 ring-white/25 shadow-[0_.6rem_2rem_rgba(38,37,31,.25)] transition-transform ease-expo hover:scale-110 animate-in fade-in zoom-in-75 duration-700 delay-[2200ms] fill-mode-both"
    >
      <WhatsAppIcon className="w-[45%] h-[45%]" />
    </a>
  );
}
