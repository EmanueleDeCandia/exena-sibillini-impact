import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { THRESHOLDS } from "../data";
import { Container, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function Thresholds() {
  const [open, setOpen] = useState("A");
  const active = THRESHOLDS.find((t) => t.id === open)!;
  const idx = THRESHOLDS.findIndex((t) => t.id === open);

  return (
    <section id="soglie" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHead
          kicker="Motore di validazione automatico"
          title="Quattro soglie. Un rewarding."
          body="Core Value, Trade ed EaaS convergono sullo stesso set di incentivi. Omogeneità di visione: chi supera le soglie volumetriche riceve gli stessi asset, qualunque sia il canale."
        />

        <div className="mt-14">
          <div className="relative h-2 bg-[#ececec]">
            <div
              className="absolute left-0 top-0 h-full bg-black transition-all duration-300"
              style={{ width: `${((idx + 1) / 4) * 100}%` }}
            />
            {THRESHOLDS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setOpen(t.id)}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${((i + 1) / 4) * 100}%` }}
                aria-label={`Soglia ${t.id}`}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center border-2 text-[13px] font-bold",
                    i <= idx ? "border-black bg-black text-white" : "border-black bg-white text-black",
                  )}
                >
                  {t.id}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-4 gap-2 text-center">
            {THRESHOLDS.map((t) => (
              <button
                key={t.id}
                onClick={() => setOpen(t.id)}
                className={cn(
                  "px-1 py-2 text-[11px] font-bold uppercase tracking-[0.12em]",
                  open === t.id ? "text-black" : "text-[#767677]",
                )}
              >
                &gt; {t.pairs} paia
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid border border-black lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            {THRESHOLDS.map((t) => (
              <button
                key={t.id}
                onClick={() => setOpen(t.id)}
                className={cn(
                  "flex items-center justify-between border-b border-black px-6 py-5 text-left last:border-b-0",
                  open === t.id ? "bg-black text-white" : "hover:bg-[#f5f5f5]",
                )}
              >
                <span>
                  <span className="block font-display text-[28px] font-bold uppercase leading-none tracking-[0.06em]">
                    Soglia {t.id}
                  </span>
                  <span className={cn("mt-1 block text-[12px] font-bold uppercase tracking-[0.14em]", open === t.id ? "text-white/60" : "text-[#767677]")}>
                    {t.name}
                  </span>
                </span>
                <span className="font-display text-[20px] font-bold">&gt;{t.pairs}</span>
              </button>
            ))}
          </div>
          <div className="border-t border-black p-8 md:p-12 lg:col-span-8 lg:border-l lg:border-t-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.65, 0, 0.35, 1] }}
              >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#767677]">
              Destinatario · {active.dest}
            </p>
            <h3 className="mt-3 font-display text-[36px] font-bold uppercase leading-[0.95] tracking-[0.04em]">
              {active.name}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.55]">
              <span className="font-bold">Requisito di business. </span>
              {active.req}
            </p>
            <p className="mt-3 text-[15px] leading-[1.55] text-[#1d1d1d]">
              <span className="font-bold">Strumenti web. </span>
              {active.tools}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.items.map((it) => (
                <li key={it} className="border border-black px-4 py-3 text-[14px]">
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-end justify-between border-t border-black pt-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677]">{active.valueLabel}</p>
                <p className="font-display text-[40px] font-bold">
                  {active.value.toLocaleString("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}
                </p>
              </div>
              <p className="max-w-xs text-right text-[12px] uppercase tracking-[0.12em] text-[#767677]">
                Shared value stimato per l'impresa acquirente. Cumulativo con le soglie precedenti.
              </p>
            </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
