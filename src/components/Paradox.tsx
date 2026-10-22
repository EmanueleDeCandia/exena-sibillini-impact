import { PARADOX } from "../data";
import { Container, SectionHead } from "./ui";

export default function Paradox() {
  return (
    <section id="paradosso" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHead
          kicker="Il mercato dei DPI"
          title="Il paradosso"
          body="Il mercato delle calzature antinfortunistiche è intrappolato in un binario rigido. Tre forze opposte comprimono margini, identità e trasparenza — e nessuna delle tre premia chi produce valore reale."
        />
        <div className="mt-16 grid border border-black md:grid-cols-3">
          {PARADOX.map((p, i) => (
            <article
              key={p.n}
              className={`flex flex-col p-8 md:p-10 ${i > 0 ? "border-t border-black md:border-t-0 md:border-l" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[14px] font-bold tracking-[0.2em] text-[#767677]">{p.n}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677]">{p.kicker}</span>
              </div>
              <h3 className="mt-8 font-display text-[32px] font-bold uppercase leading-[1.05] tracking-[0.04em]">
                {p.title}
              </h3>
              <p className="mt-5 flex-1 text-[15px] leading-[1.55] text-[#1d1d1d]">{p.body}</p>
              <div className="mt-10 border-t border-black pt-5">
                <div className="font-display text-[36px] font-bold uppercase tracking-[0.04em]">{p.stat}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677]">{p.statLabel}</div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-[15px] leading-[1.6] text-[#767677]">
          Dal lato della domanda, le imprese sopra i 100 addetti (indirettamente) e sopra i 1.000
          (direttamente, CSRD) sono affamate di fornitori capaci di documentare l'impatto. L'offerta
          attuale è frammentata e priva di reale trasparenza.
        </p>
      </Container>
    </section>
  );
}
