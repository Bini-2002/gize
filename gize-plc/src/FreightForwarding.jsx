import ServiceDetailTemplate from "./ServiceDetailTemplate";

import mainImage from "./service pages assets/Freight_Forwarding.jpeg";
import insetImage from "./service pages assets/i4.jpeg";

export default function FreightForwarding() {
  const bullets = [
    "Documentation, HS codes, and letters of credit handled correctly",
    "Door-to-port and port-to-door options with single visibility",
    "Pre-alerts shared with customs and terminal stakeholders",
    "Vendor coordination across airlines, ports, and trucking",
    "Rate and schedule options to fit cost and speed targets",
    "Clean POD capture and file closure with audit-ready records",
  ];

  return (
    <ServiceDetailTemplate
      title="Freight Forwarding"
      subtitle="Global Freight Forwarding"
      mainImage={mainImage}
      insetImage={insetImage}
      bullets={bullets}
      gradient="from-blue-700/80 via-slate-900/70 to-slate-900/40"
      accent="from-blue-500/10 to-blue-500/0"
    />
  );
}
