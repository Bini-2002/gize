import ServiceDetailTemplate from "./ServiceDetailTemplate";

import mainImage from "./service pages assets/Transportation 1.jpeg";
import insetImage from "./service pages assets/Transportation2.jpeg";

export default function Transportation() {
  const bullets = [
    "Linehaul, drayage, and last-mile coverage with live ETAs",
    "Route optimization and geofenced status pings",
    "Temperature and tilt monitoring for sensitive cargo",
    "Dedicated fleets plus vetted partner carriers",
    "Clean POD capture and delivery confirmation workflows",
    "24/7 support desk for schedule changes and recovery",
  ];

  return (
    <ServiceDetailTemplate
      title="Transportation"
      subtitle="Transportation"
      mainImage={mainImage}
      insetImage={insetImage}
      bullets={bullets}
      gradient="from-indigo-700/80 via-slate-900/70 to-slate-900/40"
      accent="from-indigo-500/10 to-indigo-500/0"
    />
  );
}
