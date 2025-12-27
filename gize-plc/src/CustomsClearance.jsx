import ServiceDetailTemplate from "./ServiceDetailTemplate";

import mainImage from "./service pages assets/Packing_and_moving.jpeg";
import insetImage from "./service pages assets/i5.jpg";

export default function CustomsClearance() {
  const bullets = [
    "Tariff classification and duty optimization guidance",
    "Pre-alerts and coordinated inspections to avoid holds",
    "Compliant filings with audit-ready document packs",
    "Import/export guidance tailored to each commodity",
    "Bond management and special permits where required",
    "Issue resolution with authorities to keep cargo moving",
  ];

  return (
    <ServiceDetailTemplate
      title="Customs Clearance"
      subtitle="Customs Clearance"
      mainImage={mainImage}
      insetImage={insetImage}
      bullets={bullets}
      gradient="from-slate-700/80 via-slate-900/70 to-slate-900/40"
      accent="from-slate-500/10 to-slate-500/0"
    />
  );
}
