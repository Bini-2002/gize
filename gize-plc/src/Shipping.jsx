import ServiceDetailTemplate from "./ServiceDetailTemplate";

import mainImage from "./service pages assets/Shipping 2.jpeg";
import insetImage from "./service pages assets/Ship.jpeg";

export default function Shipping() {
  const bullets = [
    "Ocean, air, and inland options aligned to your transit goals",
    "Proactive tracking with milestone alerts and exception flags",
    "Carrier vetting to balance speed, cost, and reliability",
    "Cargo protection plans tailored to commodity sensitivity",
    "Cutoff management to keep bookings confirmed and on time",
    "Door-to-door coordination including last-mile handoffs",
  ];

  return (
    <ServiceDetailTemplate
      title="Shipping"
      subtitle="Premium Shipping"
      mainImage={mainImage}
      insetImage={insetImage}
      bullets={bullets}
      gradient="from-red-700/80 via-slate-900/70 to-slate-900/40"
      accent="from-red-500/10 to-red-500/0"
    />
  );
}
