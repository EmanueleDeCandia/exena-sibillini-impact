import Header from "./components/Header";
import Hero from "./components/Hero";
import Paradox from "./components/Paradox";
import Model from "./components/Model";
import Perspectives from "./components/Perspectives";
import CoreValue from "./components/CoreValue";
import TradeJourney from "./components/TradeJourney";
import EaasJourney from "./components/EaasJourney";
import Thresholds from "./components/Thresholds";
import Advantages from "./components/Advantages";
import Simulator from "./components/Simulator";
import Fondo from "./components/Fondo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Paradox />
        <Model />
        <Perspectives />
        <CoreValue />
        <TradeJourney />
        <EaasJourney />
        <Thresholds />
        <Advantages />
        <Simulator />
        <Fondo />
      </main>
      <Footer />
    </div>
  );
}
