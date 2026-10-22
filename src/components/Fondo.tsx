import { useEffect, useState } from "react";
import { FONDO_PROJECTS, TECH_STACK } from "../data";
import { Btn, Container, SectionHead } from "./ui";

const BASE = 186750;

export default function Fondo() {
  const [total, setTotal] = useState(BASE);

  useEffect(() => {
    const t = setInterval(() => {
      setTotal((v) => v + 22.5);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const shows = Math.floor(total / 2500);
  const pairs = Math.floor(total / 22.5);

  return (
    <>
      <section id="fondo" className="relative overflow-hidden bg-black py-24 text-white md:py-32">
        <img src="/images/borgo.jpg" alt="Borgo dei Monti Sibillini" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <Container className="relative">
          <SectionHead
            inverse
            kicker="Tracciamento trasparente"
            title="Fondo Ricreatività"
            body="Registro pubblico delle devoluzioni. Ogni transazione EaaS stanzia 22,50€. Ogni 2.500€ finanzia uno spettacolo dal vivo. Niente dispersione, niente storytelling senza numeri."
          />
          <div className="mt-14 grid border border-white/30 md:grid-cols-3">
            <div className="p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Fondi raccolti</p>
              <p className="mt-2 font-display text-[40px] font-bold tabular-nums md:text-[48px]">
                {total.toLocaleString("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="border-t border-white/30 p-8 md:border-l md:border-t-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Paia tracciate</p>
              <p className="mt-2 font-display text-[40px] font-bold tabular-nums md:text-[48px]">
                {pairs.toLocaleString("it-IT")}
              </p>
            </div>
            <div className="border-t border-white/30 p-8 md:border-l md:border-t-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Spettacoli finanziati</p>
              <p className="mt-2 font-display text-[40px] font-bold tabular-nums md:text-[48px]">{shows}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {FONDO_PROJECTS.map((p) => (
              <article key={p.title} className="border border-black p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e32b2b]">{p.rule}</p>
                <h3 className="mt-4 font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[0.04em]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.55]">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-[32px] font-bold uppercase tracking-[0.04em] md:text-[40px]">
              Infrastruttura digitale
            </h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-[#767677]">
              Quattro moduli perché l'ecosistema giri senza gravare sulla struttura operativa della startup — né su Exena.
            </p>
            <div className="mt-8 grid border border-black md:grid-cols-2 lg:grid-cols-4">
              {TECH_STACK.map((t, i) => (
                <article key={t.title} className={`p-7 ${i > 0 ? "border-t border-black md:border-t-0 lg:border-l" : ""} ${i === 2 ? "md:border-t lg:border-t-0" : ""} ${i === 3 ? "md:border-t lg:border-t-0" : ""}`}>
                  <div className="font-display text-[14px] font-bold tracking-[0.16em] text-[#767677]">0{i + 1}</div>
                  <h4 className="mt-3 font-display text-[20px] font-bold uppercase leading-tight tracking-[0.04em]">
                    {t.title}
                  </h4>
                  <p className="mt-3 text-[14px] leading-[1.55]">{t.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid overflow-hidden border border-black lg:grid-cols-2">
            <img src="/images/festival.jpg" alt="Festival culturale nei borghi" className="h-72 w-full object-cover lg:h-full" />
            <div className="p-8 md:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#767677]">Perché aderire</p>
              <h3 className="mt-3 font-display text-[32px] font-bold uppercase leading-[1.05] tracking-[0.04em]">
                Exena non vende una scarpa. Vende un sistema di valore.
              </h3>
              <p className="mt-5 text-[15px] leading-[1.6]">
                I clienti — grandi imprese, rivenditori, lavoratori — percepiscono vantaggi distinti e misurabili.
                Compliance, sell-out, welfare, reputazione. La calzatura è il vettore. L'impatto è il prodotto.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="aderisci" className="bg-black py-24 text-white md:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">Prossimo passo</p>
              <h2 className="mt-4 font-display text-[48px] font-bold uppercase leading-[0.92] tracking-[0.04em] md:text-[64px]">
                Aderisci a Sibillini Impact
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[1.55] text-white/80">
                Richiedi il dossier riservato. Screening ESG, campionati della linea ecologica, simulazione
                personalizzata sul tuo organico.
              </p>
            </div>
            <form
              className="border border-white/30 p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                alert(`Richiesta inviata per ${fd.get("azienda")}. Il team vi contatterà.`);
                e.currentTarget.reset();
              }}
            >
              {[
                ["azienda", "Ragione sociale", "text"],
                ["ruolo", "Ruolo (CEO / RA / RSPP / Sustainability)", "text"],
                ["email", "Email istituzionale", "email"],
                ["addetti", "Numero addetti", "number"],
              ].map(([name, label, type]) => (
                <label key={name} className="mb-5 block">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">{label}</span>
                  <input
                    name={name}
                    type={type}
                    required
                    className="mt-2 h-12 w-full border border-white bg-transparent px-4 text-[14px] outline-none focus:shadow-[inset_0_0_0_1px_#fff]"
                  />
                </label>
              ))}
              <Btn variant="inverse" type="submit" className="mt-2 w-full">
                Richiedi il dossier
              </Btn>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
