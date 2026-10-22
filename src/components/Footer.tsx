import { Logo, Stripes } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm text-[14px] leading-[1.55] text-[#767677]">
            Progetto della Startup innovativa in partnership con Exena. Calzature antinfortunistiche
            come vettore di rigenerazione per i borghi dei Monti Sibillini.
          </p>
          <div className="mt-6">
            <Stripes className="w-16" color="#000" />
          </div>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Prospettive</p>
          <ul className="mt-4 space-y-2 text-[14px]">
            <li><a className="link-underline" href="#core-value">Core Value</a></li>
            <li><a className="link-underline" href="#trade">Trade Marketing</a></li>
            <li><a className="link-underline" href="#eaas">Ecommerce as a Service</a></li>
            <li><a className="link-underline" href="#simulatore">Simulatore</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Canali</p>
          <ul className="mt-4 space-y-2 text-[14px]">
            <li>B2B istituzionale</li>
            <li>Rete fisica B2B2B</li>
            <li>EaaS D2C + B2B</li>
            <li>Fondo Ricreatività</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#767677] md:flex-row md:justify-between md:px-8">
          <span>© {new Date().getFullYear()} Sibillini Impact</span>
          <span>Exena · Calzature antinfortunistiche · Impatto certificato</span>
        </div>
      </div>
    </footer>
  );
}
