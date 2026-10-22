import { useMemo, useState } from "react";
import { EAAS_B2B, EAAS_D2C } from "../data";
import { Btn, Container, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function EaasJourney() {
  const [path, setPath] = useState<"d2c" | "b2b">("d2c");
  const [qty, setQty] = useState(1);
  const steps = path === "d2c" ? EAAS_D2C : EAAS_B2B;
  const pairPrice = 75;
  const donation = 22.5;
  const total = qty * pairPrice;
  const fund = qty * donation;

  const unlocked = useMemo(() => {
    if (qty >= 100) return "D";
    if (qty >= 50) return "C";
    if (qty >= 25) return "B";
    if (qty >= 10) return "A";
    return "—";
  }, [qty]);

  return (
    <section id="eaas" className="bg-black py-24 text-white md:py-32">
      <Container>
        <SectionHead
          inverse
          kicker="Prospettiva 03 · Ecommerce as a Service"
          title="Due funnel. Un canale."
          body="L'interfaccia riconosce l'utente in accesso e adatta il funnel. Linee sperimentali ecologiche, prezzo fisso 75€, 30% al Fondo. Cause Related Marketing matematico — fuori dai marketplace."
        />

        <div className="mt-12 inline-flex border border-white">
          <button
            onClick={() => {
              setPath("d2c");
              setQty(1);
            }}
            className={cn(
              "h-14 px-6 text-[12px] font-bold uppercase tracking-[0.16em]",
              path === "d2c" ? "bg-white text-black" : "text-white hover:bg-white/10",
            )}
          >
            Percorso A · Lavoratore
          </button>
          <button
            onClick={() => {
              setPath("b2b");
              setQty(100);
            }}
            className={cn(
              "h-14 px-6 text-[12px] font-bold uppercase tracking-[0.16em]",
              path === "b2b" ? "bg-white text-black" : "text-white hover:bg-white/10",
            )}
          >
            Percorso B · Responsabile Acquisti
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="border border-white/30 lg:col-span-7">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[280px] bg-[#1d1d1d]">
                <img
                  src={path === "d2c" ? "/images/eco-boot.jpg" : "/images/eco-boot-detail.jpg"}
                  alt="Linea ecologica sperimentale Exena"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Linea sperimentale · PET oceanico
                </p>
                <h3 className="mt-2 font-display text-[32px] font-bold uppercase leading-none tracking-[0.04em]">
                  Sibillini Eco
                </h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-[40px] font-bold">75€</span>
                  <span className="text-[13px] text-white/50 line-through">60€ marketplace</span>
                </div>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#e32b2b]">
                  +15€ = 100% Cause Related Marketing
                </p>
                <div className="mt-6 border border-white/30 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Contatore dinamico</p>
                  <p className="mt-2 text-[15px] leading-[1.45]">
                    Con questo ordine stai devolvendo{" "}
                    <span className="font-bold text-white">{fund.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}</span>{" "}
                    al Fondo Aree Interne.
                  </p>
                </div>
                <div className="mt-6">
                  <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                    {path === "d2c" ? "Quantità" : "Lotto aziendale · paia"}
                  </label>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      className="h-12 w-12 border border-white text-xl"
                      onClick={() => setQty((q) => Math.max(1, q - (path === "b2b" ? 5 : 1)))}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={qty}
                      onChange={(e) => setQty(Math.max(1, Math.min(500, Number(e.target.value) || 1)))}
                      className="h-12 w-full border border-white bg-transparent text-center font-display text-[24px] font-bold"
                    />
                    <button
                      className="h-12 w-12 border border-white text-xl"
                      onClick={() => setQty((q) => Math.min(500, q + (path === "b2b" ? 5 : 1)))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/30 pt-5">
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em]">Totale</span>
                  <span className="font-display text-[28px] font-bold">
                    {total.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}
                  </span>
                </div>
                {path === "b2b" && (
                  <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Soglia sbloccata · {unlocked}
                  </p>
                )}
                <Btn variant="inverse" className="mt-6 w-full">
                  {path === "d2c" ? "Acquista" : "Ordina il lotto"}
                </Btn>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ol>
              {steps.map((st, idx) => (
                <li key={st.n} className={`border border-white/30 p-6 ${idx > 0 ? "-mt-px" : ""}`}>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">{st.n}</div>
                  <h4 className="mt-2 font-display text-[22px] font-bold uppercase tracking-[0.04em]">{st.title}</h4>
                  <p className="mt-3 text-[14px] leading-[1.55] text-white/80">{st.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {path === "b2b" && (
          <div className="mt-6 grid border border-white/30 md:grid-cols-3">
            <div className="p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Investimento</p>
              <p className="mt-2 font-display text-[36px] font-bold">
                {total.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}
              </p>
            </div>
            <div className="border-t border-white/30 p-8 md:border-l md:border-t-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Devoluzione certificata</p>
              <p className="mt-2 font-display text-[36px] font-bold">
                {fund.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}
              </p>
            </div>
            <div className="border-t border-white/30 p-8 md:border-l md:border-t-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Spettacoli dal vivo</p>
              <p className="mt-2 font-display text-[36px] font-bold">{Math.floor(fund / 2500)}</p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
