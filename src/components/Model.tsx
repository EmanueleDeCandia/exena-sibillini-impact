import { MODEL_PILLARS } from "../data";
import { Btn, Container, SectionHead, Stripes } from "./ui";

export default function Model() {
  return (
    <section id="modello" className="bg-black py-24 text-white md:py-32">
      <Container>
        <SectionHead
          inverse
          kicker="La soluzione"
          title="Sibillini Impact"
          body="Una strategia omnicanale disintermediata. Non si compete sul prezzo: si compete sul valore. Ogni transazione finanzia in modo matematico e certificato lo sviluppo locale tramite il Fondo Ricreatività Aree Interne."
        />

        <div className="mt-16 overflow-x-auto no-scrollbar">
          <div className="min-w-[720px] border border-white/30">
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/30 bg-white text-black">
              <div className="p-5 text-[11px] font-bold uppercase tracking-[0.18em]">Contesto di mercato</div>
              <div className="border-l border-black p-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Guerra dei prezzi online
              </div>
              <div className="border-l border-black p-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Alti costi d'ingresso GDS
              </div>
            </div>
            <div className="flex items-center justify-center border-b border-white/30 px-6 py-8 text-center">
              <div>
                <div className="mb-3 flex justify-center">
                  <Stripes className="w-12" size="sm" color="#fff" />
                </div>
                <div className="font-display text-[28px] font-bold uppercase tracking-[0.08em] md:text-[36px]">
                  La calzatura che finanzia i borghi
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              {MODEL_PILLARS.map((p, i) => (
                <div key={p.id} className={i > 0 ? "border-l border-white/30 p-6 md:p-8" : "p-6 md:p-8"}>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{p.n}</div>
                  <h3 className="mt-3 font-display text-[28px] font-bold uppercase leading-none tracking-[0.04em]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/60">{p.subtitle}</p>
                  <ul className="mt-6 space-y-3 text-[13px] leading-[1.5] text-white/85">
                    <li>
                      <span className="text-white/50">Target · </span>
                      {p.target}
                    </li>
                    <li>
                      <span className="text-white/50">Prodotto · </span>
                      {p.product}
                    </li>
                    <li>{p.logic}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-white/30 px-6 py-6 text-center">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/70">
                Se supera le soglie volumetriche → Motore di validazione automatico A · B · C · D
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href="#core-value">
            <Btn variant="inverse">Core Value</Btn>
          </a>
          <a href="#trade">
            <Btn variant="outline-inv">Trade Marketing</Btn>
          </a>
          <a href="#eaas">
            <Btn variant="outline-inv">Ecommerce as a Service</Btn>
          </a>
        </div>
      </Container>
    </section>
  );
}
