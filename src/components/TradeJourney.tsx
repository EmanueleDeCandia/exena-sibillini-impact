import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TRADE_JOURNEY } from "../data";
import { Container, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function TradeJourney() {
  const [i, setI] = useState(0);
  const step = TRADE_JOURNEY[i];

  return (
    <section id="trade" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHead
          kicker="Prospettiva 02 · Customer Journey B2B2B"
          title="Trade Marketing"
          body="Ferramente autonome e franchisee della GDS. Obiettivo: sbloccare il sell-out e trasformare i distributori in partner attivi del territorio — senza far loro subire il prezzo online."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <ol>
              {TRADE_JOURNEY.map((s, idx) => (
                <li key={s.n}>
                  <button
                    onClick={() => setI(idx)}
                    className={cn(
                      "flex w-full items-start gap-4 border-b border-black px-4 py-5 text-left transition-colors",
                      i === idx ? "bg-black text-white" : "hover:bg-[#f5f5f5]",
                    )}
                  >
                    <span className="font-display text-[22px] font-bold tracking-[0.08em]">{s.n}</span>
                    <span>
                      <span className={cn("block text-[11px] font-bold uppercase tracking-[0.16em]", i === idx ? "text-white/60" : "text-[#767677]")}>
                        {s.actor}
                      </span>
                      <span className="mt-1 block font-display text-[18px] font-bold uppercase leading-tight tracking-[0.04em]">
                        {s.title}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <div className="border border-black lg:col-span-8">
            <div className="relative h-64 overflow-hidden md:h-80">
              <img
                src={i < 2 ? "/images/ferramenta.jpg" : i === 4 ? "/images/borgo.jpg" : "/images/cantiere.jpg"}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 bg-black px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Attore · {step.actor}
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-black p-8 md:border-b-0 md:border-r">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#767677]">Come funziona</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.n}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="mt-3 font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[0.04em]">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-[1.6]">{step.body}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="bg-black p-8 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Dal punto di vista del cliente
                </p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={step.n + "-v"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 text-[18px] leading-[1.5]"
                  >
                    {step.view}
                  </motion.p>
                </AnimatePresence>
                <div className="mt-8 flex gap-2">
                  {TRADE_JOURNEY.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Passo ${idx + 1}`}
                      onClick={() => setI(idx)}
                      className={cn("h-1 flex-1", idx === i ? "bg-white" : "bg-white/30")}
                    />
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    className="h-12 flex-1 border border-white text-[12px] font-bold uppercase tracking-[0.16em] disabled:opacity-30"
                    disabled={i === 0}
                    onClick={() => setI((v) => Math.max(0, v - 1))}
                  >
                    Indietro
                  </button>
                  <button
                    className="h-12 flex-1 bg-white text-[12px] font-bold uppercase tracking-[0.16em] text-black disabled:opacity-30"
                    disabled={i === TRADE_JOURNEY.length - 1}
                    onClick={() => setI((v) => Math.min(TRADE_JOURNEY.length - 1, v + 1))}
                  >
                    Avanti
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid border border-black md:grid-cols-3">
          {[
            ["Zero costi di attivazione", "Nessuna listing fee, nessun co-marketing asfissiante, nessun vincolo pluriennale."],
            ["Listino protetto", "Le linee standard restano sul fisico. L'EaaS vende solo le sperimentali. No cannibalizzazione."],
            ["Sell-out premiato", "I benefit non restano al rivenditore: li gira al RA cliente, rafforzando la relazione."],
          ].map(([t, b], idx) => (
            <div key={t} className={`p-8 ${idx > 0 ? "border-t border-black md:border-t-0 md:border-l" : ""}`}>
              <h4 className="font-display text-[22px] font-bold uppercase tracking-[0.04em]">{t}</h4>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#767677]">{b}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
