import ServiceDetailTemplate from "./ServiceDetailTemplate";

import mainImage from "./service pages assets/Port_handling_1.jpeg";
import insetImage from "./service pages assets/Port_handling_2.jpeg";

export default function PortHandling() {
  const bullets = [
    "Stevedoring, lashing, and yard moves aligned to berth windows",
    "Pre-clearance coordination to reduce dwell and demurrage",
    "Real-time sync with terminal operators and depot teams",
    "Condition checks with photo documentation on every lift",
    "Heavy-lift and out-of-gauge handling with safety controls",
    "Transparent cost capture for terminal and storage fees",
  ];

  return (
    <ServiceDetailTemplate
      title="Port Handling"
      subtitle="Port Handling"
      mainImage={mainImage}
      insetImage={insetImage}
      bullets={bullets}
      gradient="from-amber-600/80 via-slate-900/70 to-slate-900/40"
      accent="from-amber-500/10 to-amber-500/0"
    />
  );
}
