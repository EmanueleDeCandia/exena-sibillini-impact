import { useState } from "react";
import { CORE_DOCS, CORE_STEPS } from "../data";
import { Container, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function CoreValue() {
  const [step, setStep] = useState(0);
  const s = CORE_STEPS[step];

  return (
    <section id="core-value" className="bg-[#f5f5f5] py-24 md:py-32">
      <Container>
        <SectionHead
          kicker="Prospettiva 01 · Canale B2B diretto istituzionale"
          title="Core Value"
          body="Go-to-market per grandi imprese e General Contractor. Guidato dalla Startup in qualità di soggetto terzo e indipendente: garante etico, credibilità scientifica, il produttore Exena sollevato dal ruolo di mero venditore."
        />

        <div className="mt-16 grid gap-0 border border-black bg-white lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <img
              src="/images/cantiere.jpg"
              alt="Cantiere e calzature di sicurezza"
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black p-6 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Target pilota</p>
              <p className="mt-2 font-display text-[40px] font-bold uppercase leading-none">100 imprese</p>
              <p className="mt-2 text-[13px] text-white/80">su 3.000 cantieri attivi · Regione Marche · post-sisma</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-4 border-b border-black">
              {CORE_STEPS.map((st, i) => (
                <button
                  key={st.n}
                  onClick={() => setStep(i)}
                  className={cn(
                    "border-l border-black first:border-l-0 px-2 py-4 text-left transition-colors md:px-4",
                    step === i ? "bg-black text-white" : "bg-white hover:bg-[#f5f5f5]",
                  )}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] opacity-60">{st.n}</div>
                  <div className="mt-1 font-display text-[13px] font-bold uppercase leading-tight tracking-[0.04em] md:text-[16px]">
                    {st.title}
                  </div>
                </button>
              ))}
            </div>
            <div className="p-8 md:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#767677]">{s.who}</p>
              <h3 className="mt-3 font-display text-[32px] font-bold uppercase leading-[1.05] tracking-[0.04em] md:text-[40px]">
                {s.title}
              </h3>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.6]">{s.body}</p>
              <div className="mt-8 h-1 w-full bg-[#ececec]">
                <div className="h-full bg-black transition-all duration-300" style={{ width: `${((step + 1) / 4) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid border border-black bg-white md:grid-cols-2 lg:grid-cols-4">
          {CORE_DOCS.map((d, i) => (
            <article key={d.title} className={`p-7 ${i > 0 ? "border-t border-black md:border-t-0 md:border-l lg:border-t-0" : ""} ${i === 2 ? "md:border-t lg:border-t-0" : ""} ${i === 3 ? "md:border-t lg:border-t-0" : ""}`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e32b2b]">{d.std}</p>
              <h4 className="mt-3 font-display text-[22px] font-bold uppercase leading-tight tracking-[0.04em]">
                {d.title}
              </h4>
              <p className="mt-4 text-[14px] leading-[1.55] text-[#1d1d1d]">{d.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-0 border border-black bg-white lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#767677]">
              Dal punto di vista del cliente Core Value
            </p>
            <h3 className="mt-3 font-display text-[32px] font-bold uppercase leading-[1.05] tracking-[0.04em]">
              Cosa guadagna la grande impresa
            </h3>
            <ul className="mt-8 space-y-5">
              {[
                ["Compliance CSRD a costo di fornitura", "Ogni paio alimenta Scope 3, ESRS E1 e ESRS S3 senza progetti paralleli di CSR."],
                ["Premialità nei bandi pubblici", "CAM e criteri sociali documentati. Vantaggio competitivo immediato sulle gare."],
                ["Rating ESG e accesso al credito", "Case study bancabili. Capitale sociale e naturale rendicontati in <IR>."],
                ["Welfare esperienziale di board e organico", "VIP pass, summit istituzionale, pernottamenti spesati, biglietti proporzionali."],
              ].map(([t, b]) => (
                <li key={t} className="border-t border-black pt-5">
                  <div className="font-bold">{t}</div>
                  <div className="mt-1 text-[14px] leading-[1.5] text-[#767677]">{b}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[320px] border-t border-black lg:border-l lg:border-t-0">
            <img src="/images/csr-summit.jpg" alt="Summit CSR nei Sibillini" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">Soglia D · &gt; 100 paia</p>
              <p className="mt-2 font-display text-[28px] font-bold uppercase leading-tight">
                Il Tavolo CSR con Enti, Università e Autorità Regionali
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
