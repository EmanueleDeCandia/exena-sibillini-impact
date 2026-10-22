import { useMemo, useState, type ReactNode } from "react";
import { THRESHOLDS } from "../data";
import { Container, SectionHead } from "./ui";
import { cn } from "../utils/cn";

function euro(n: number, digits = 0) {
  return n.toLocaleString("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: digits, minimumFractionDigits: digits });
}

export default function Simulator() {
  const [staff, setStaff] = useState(80);
  const [pairs, setPairs] = useState(80);
  const [price, setPrice] = useState(75);
  const [pct, setPct] = useState(30);

  const calc = useMemo(() => {
    const donationPair = price * (pct / 100);
    const investment = pairs * price;
    const fund = pairs * donationPair;
    const shows = Math.floor(fund / 2500);
    const remainder = fund - shows * 2500;
    const progress = (fund % 2500) / 2500;
    const vipWorkforce = pairs >= 100 ? Math.floor(staff / 10) : 0;

    const unlocked = THRESHOLDS.filter((t) => pairs >= t.pairs);
    const shared = unlocked.reduce((acc, t) => acc + t.value, 0);
    const vipExtra = vipWorkforce * 80;
    const totalShared = shared + vipExtra;
    const last = unlocked[unlocked.length - 1];

    return { donationPair, investment, fund, shows, remainder, progress, vipWorkforce, unlocked, shared, totalShared, last };
  }, [staff, pairs, price, pct]);

  return (
    <section id="simulatore" className="bg-[#f5f5f5] py-24 md:py-32">
      <Container>
        <SectionHead
          kicker="Simulatore dinamico"
          title="Misura il shared value"
          body="Grandi imprese e Responsabili Acquisti simulano addetti, aliquota di devoluzione, prezzo di vendita, destinazione del Fondo e il valore degli incentivi ricevuti in cambio."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="border border-black bg-white p-6 md:p-10 lg:col-span-5">
            <Field label="Numero di addetti" value={staff} suffix={`${staff} persone`}>
              <input type="range" min={1} max={500} value={staff} onChange={(e) => setStaff(Number(e.target.value))} />
            </Field>
            <Field label="Paia acquistate" value={pairs} suffix={`${pairs} paia`}>
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => setPairs(staff)}
                  className="text-[11px] font-bold uppercase tracking-[0.14em] underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  Allinea all'organico ({staff})
                </button>
              </div>
              <input type="range" min={1} max={500} value={pairs} onChange={(e) => setPairs(Number(e.target.value))} />
              <div className="mt-3 flex gap-2">
                {[10, 25, 50, 100, 200].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPairs(n)}
                    className={cn(
                      "h-9 flex-1 border border-black text-[11px] font-bold uppercase tracking-[0.1em]",
                      pairs === n ? "bg-black text-white" : "bg-white hover:bg-[#f5f5f5]",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Prezzo di vendita a paio" value={price} suffix={euro(price)}>
              <input type="range" min={50} max={120} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </Field>
            <Field label="Aliquota devoluzione al Fondo" value={pct} suffix={`${pct}%`}>
              <input type="range" min={10} max={50} step={5} value={pct} onChange={(e) => setPct(Number(e.target.value))} />
              <p className="mt-2 text-[12px] text-[#767677]">
                Default di progetto 30% · {euro(calc.donationPair, 2)} a paio
              </p>
            </Field>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 border border-black bg-black text-white">
              <Stat k="Investimento" v={euro(calc.investment)} />
              <Stat k="Fondo Ricreatività" v={euro(calc.fund)} accent />
              <Stat k="Spettacoli dal vivo" v={`${calc.shows}`} note="ogni 2.500€ = 1 spettacolo" />
              <Stat k="Shared value impresa" v={euro(calc.totalShared)} note="incentivi + welfare" />
            </div>

            <div className="mt-0 border border-t-0 border-black bg-white p-6 md:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677]">
                    Destinazione Fondo · spettacoli dal vivo
                  </p>
                  <p className="mt-2 font-display text-[28px] font-bold uppercase tracking-[0.04em]">
                    {calc.shows} {calc.shows === 1 ? "spettacolo finanziato" : "spettacoli finanziati"}
                  </p>
                </div>
                <p className="text-[13px] text-[#767677]">{euro(calc.remainder, 0)} al prossimo</p>
              </div>
              <div className="mt-5 h-3 bg-[#ececec]">
                <div className="h-full bg-black transition-all duration-300" style={{ width: `${Math.min(100, calc.progress * 100)}%` }} />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {Array.from({ length: Math.max(calc.shows, 1) }).slice(0, 12).map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center border border-black text-[11px] font-bold",
                      i < calc.shows ? "bg-black text-white" : "bg-white text-[#ccc]",
                    )}
                  >
                    {i + 1}
                  </span>
                ))}
                {calc.shows > 12 && (
                  <span className="flex h-10 items-center px-3 text-[12px] font-bold uppercase tracking-[0.12em]">
                    +{calc.shows - 12}
                  </span>
                )}
              </div>
            </div>

            <div className="border border-t-0 border-black bg-white p-6 md:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677]">
                Incentivi sbloccati · Soglia {calc.last ? calc.last.id : "nessuna"}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {THRESHOLDS.map((t) => {
                  const on = pairs >= t.pairs;
                  return (
                    <div
                      key={t.id}
                      className={cn("border p-4", on ? "border-black bg-black text-white" : "border-[#ccc] text-[#a8a8a8]")}
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="font-display text-[20px] font-bold uppercase">Soglia {t.id}</span>
                        <span className="text-[12px] font-bold">{euro(t.value)}</span>
                      </div>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.1em]">{t.name}</p>
                    </div>
                  );
                })}
              </div>
              {pairs >= 100 && (
                <p className="mt-5 border-t border-black pt-5 text-[14px] leading-[1.5]">
                  Welfare di massa: <span className="font-bold">{calc.vipWorkforce} biglietti VIP</span> per l'organico
                  (1 ogni 10 addetti su {staff} persone).
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  value,
  suffix,
  children,
}: {
  label: string;
  value: number;
  suffix: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-3 flex items-baseline justify-between">
        <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677]">{label}</label>
        <span className="font-display text-[22px] font-bold uppercase tracking-[0.04em]">{suffix}</span>
      </div>
      {children}
      <span className="sr-only">{value}</span>
    </div>
  );
}

function Stat({ k, v, note, accent }: { k: string; v: string; note?: string; accent?: boolean }) {
  return (
    <div className={cn("p-6 md:p-8", accent && "bg-[#1d1d1d]")}>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">{k}</p>
      <p className={cn("mt-2 font-display text-[32px] font-bold uppercase leading-none md:text-[40px]", accent && "text-white")}>
        {v}
      </p>
      {note && <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-white/50">{note}</p>}
    </div>
  );
}
