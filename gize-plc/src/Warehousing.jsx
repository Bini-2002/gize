import ServiceDetailTemplate from "./ServiceDetailTemplate";

import mainImage from "./service pages assets/Warehouse.jpeg";
import insetImage from "./service pages assets/i2.jpeg";

export default function Warehousing() {
  const bullets = [
    "Bonded and ambient storage with CCTV and controlled access",
    "WMS visibility for receipts, put-aways, and outbound orders",
    "Cycle counts, aging reports, and SKU-level accuracy checks",
    "Value-added services: kitting, relabeling, and QC",
    "Cross-dock options to speed transfers and reduce dwell",
    "Safety and compliance protocols for sensitive goods",
  ];

  return (
    <ServiceDetailTemplate
      title="Warehousing"
      subtitle="Warehousing"
      mainImage={mainImage}
      insetImage={insetImage}
      bullets={bullets}
      gradient="from-emerald-700/80 via-slate-900/70 to-slate-900/40"
      accent="from-emerald-500/10 to-emerald-500/0"
    />
  );
}
