import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data";
import { Btn, Logo } from "./ui";
import { cn } from "../utils/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = NAV.map((n) => n.id);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 md:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Progetto per Exena · Calzature antinfortunistiche
          </p>
          <p className="hidden text-[11px] font-bold uppercase tracking-[0.18em] md:block">
            Impatto economico e sociale certificato
          </p>
        </div>
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 h-14 border-b border-black bg-white",
          scrolled && "shadow-[0_1px_0_#000]",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principale">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative text-[11px] font-bold uppercase tracking-[0.16em] text-black",
                  "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-200",
                  "hover:after:scale-x-100",
                  active === item.id && "after:scale-x-100",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#aderisci" className="hidden md:block">
              <Btn className="h-10 px-5 text-[11px]">Aderisci</Btn>
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center border border-black lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-[92px] lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-black px-6 py-5 font-display text-[28px] font-bold uppercase tracking-[0.06em]"
              >
                {item.label}
              </a>
            ))}
            <a href="#aderisci" onClick={() => setOpen(false)} className="p-6">
              <Btn className="w-full">Aderisci al progetto</Btn>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
