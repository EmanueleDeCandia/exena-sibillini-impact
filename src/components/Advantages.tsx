import { Container, SectionHead } from "./ui";

const ROWS = [
  {
    who: "Grande impresa / GC",
    channel: "Core Value",
    pains: "CSRD, Scope 3, bandi, rating ESG",
    gains: "Dossier co-firmato, CAM, Tavolo CSR, welfare board e organico",
  },
  {
    who: "Rivenditore fisico",
    channel: "Trade",
    pains: "Prezzo Amazon, listing fee, scaffale chiuso",
    gains: "Listino protetto, zero costi, sell-out premiato, relazione rafforzata",
  },
  {
    who: "Responsabile Acquisti",
    channel: "Trade / EaaS B2B",
    pains: "DPI come costo, nessuna prova d'impatto",
    gains: "Kit ESG, geofencing, VIP pass, biglietti 1/10 addetti",
  },
  {
    who: "Lavoratore / artigiano",
    channel: "EaaS D2C",
    pains: "Scarpa commodity, nessuna storia",
    gains: "Linea eco, 22,50€ visibili, invito al borgo sostenuto",
  },
];

export default function Advantages() {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <div className="border border-black">
          <div className="border-b border-black p-8 md:p-12">
            <SectionHead
              kicker="Sintesi per Exena"
              title="Vantaggi visti dai clienti"
              body="Quattro acquirenti, quattro dolori, quattro guadagni. La strategia d'impatto economico e sociale si misura da qui."
            />
          </div>
          <div className="hidden grid-cols-12 border-b border-black bg-black text-white md:grid">
            {["Cliente", "Canale", "Il dolore che lascia", "Il valore che ottiene"].map((h) => (
              <div key={h} className="col-span-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em]">
                {h}
              </div>
            ))}
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.who}
              className={`grid gap-2 px-6 py-6 md:grid-cols-12 md:items-center ${i < ROWS.length - 1 ? "border-b border-black" : ""}`}
            >
              <div className="md:col-span-3">
                <p className="font-display text-[22px] font-bold uppercase leading-tight tracking-[0.04em]">{r.who}</p>
              </div>
              <div className="md:col-span-3">
                <span className="inline-block border border-black px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">
                  {r.channel}
                </span>
              </div>
              <div className="text-[14px] leading-[1.45] text-[#767677] md:col-span-3">{r.pains}</div>
              <div className="text-[14px] leading-[1.45] md:col-span-3">{r.gains}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
