import { motion } from "framer-motion";
import { Btn, Stripes } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      <img
        src="/images/hero-sibillini.jpg"
        alt="Monti Sibillini all'alba"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-end px-4 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="mb-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/80"
          >
            <Stripes className="w-10" size="sm" color="#fff" />
            Exena × Startup innovativa
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="font-display text-[56px] font-bold uppercase leading-[0.88] tracking-[0.04em] sm:text-[80px] md:text-[104px] lg:text-[120px]"
          >
            Sibillini
            <br />
            Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-8 max-w-xl text-[18px] leading-[1.45] text-white/90"
          >
            La calzatura di sicurezza smette di essere un obbligo normativo. Diventa vettore di
            rigenerazione ambientale e sociale per i borghi dei Monti Sibillini.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#prospettive">
              <Btn variant="inverse">Le tre prospettive →</Btn>
            </a>
            <a href="#simulatore">
              <Btn variant="outline-inv">Simula l'impatto</Btn>
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-px bg-white/20 md:grid-cols-4">
          {[
            ["30%", "Del valore EaaS al Fondo"],
            ["22,50€", "Devoluzione fissa a paio"],
            ["75€", "Prezzo fisso linea ecologica"],
            ["4 soglie", "Motore di rewarding A–D"],
          ].map(([k, v]) => (
            <div key={k} className="bg-black/50 px-5 py-5 backdrop-blur-sm">
              <div className="font-display text-[32px] font-bold uppercase tracking-[0.04em]">{k}</div>
              <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-white/70">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
