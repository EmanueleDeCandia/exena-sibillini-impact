import { Container, SectionHead } from "./ui";

const CARDS = [
  {
    href: "#core-value",
    n: "01",
    title: "Core Value",
    who: "Punto di vista della grande impresa",
    img: "/images/csr-summit.jpg",
    alt: "Tavolo istituzionale CSR",
    body: "CEO, CFO, RSPP e Sustainability Manager non comprano un DPI. Comprano compliance CSRD, premialità nei bandi e un asset reputazionale co-firmato da un soggetto terzo.",
    channel: "B2B diretto istituzionale",
  },
  {
    href: "#trade",
    n: "02",
    title: "Trade",
    who: "Punto di vista del rivenditore e del suo cliente",
    img: "/images/ferramenta.jpg",
    alt: "Punto vendita specializzato",
    body: "Il negozio fisico smette di subire Amazon. Vendendo a listino, consegna al Responsabile Acquisti un catalogo di premi, ESG kit e welfare territoriale.",
    channel: "B2B2B rete fisica",
  },
  {
    href: "#eaas",
    n: "03",
    title: "EaaS",
    who: "Punto di vista del lavoratore e del RA digitale",
    img: "/images/eco-boot.jpg",
    alt: "Calzatura ecologica sperimentale",
    body: "Due funnel, una piattaforma. L'artigiano vede i 22,50€ devoluti in tempo reale. L'impresa che ordina lotti ottiene certificazione ESG più tutti i benefit del Trade.",
    channel: "D2C + B2B diretto",
  },
];

export default function Perspectives() {
  return (
    <section id="prospettive" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHead
          kicker="Per Exena"
          title="Tre prospettive"
          body="Per comprendere i vantaggi della nuova strategia d'impresa ad impatto, il progetto si legge dai tre sguardi di chi acquista. Non dal listino. Dalle Customer Journey."
        />
        <div className="mt-16 grid gap-0 border border-black lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <a
              key={c.n}
              href={c.href}
              className={`group block ${i > 0 ? "border-t border-black lg:border-t-0 lg:border-l" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-0 top-0 bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                  {c.n}
                </div>
              </div>
              <div className="p-8">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#767677]">{c.channel}</div>
                <h3 className="mt-3 font-display text-[36px] font-bold uppercase leading-none tracking-[0.04em]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.12em]">{c.who}</p>
                <p className="mt-5 text-[15px] leading-[1.55] text-[#1d1d1d]">{c.body}</p>
                <span className="mt-6 inline-block text-[13px] font-bold uppercase tracking-[0.16em] after:ml-1 after:content-['→']">
                  Apri il percorso
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
