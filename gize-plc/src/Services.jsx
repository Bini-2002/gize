import { useMemo } from "react";
import "./Services.css";

function SectionTitle({ title, subtitle, underline = true }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 md:text-3xl">
        {title}
      </h2>
      {underline && <div className="mx-auto mt-2 h-1 w-16 bg-red-600" />}
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">{subtitle}</p>}
    </div>
  );
}

export default function Services() {

  const serviceImages = useMemo(() => {
    const modules = import.meta.glob("./images/what-we-provide/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });

    const byName = Object.fromEntries(
      Object.entries(modules).map(([path, url]) => {
        const normalized = path.replace(/\\/g, "/");
        const filename = normalized.split("/").pop() || path;
        return [filename, url];
      }),
    );

    return {
      shipping: byName["Shipping_2.jpeg"],
      freight: byName["Freight_Forwarding.jpeg"],
      port: byName["Port_handling.jpeg"],
      warehouse: byName["Warehouse copy.jpeg"],
      transport: byName["Transportation2.jpeg"],
      customs: byName["Custom_clearance.jpg"],
    };
  }, []);

  const services = [
    {
      id: "shipping",
      title: "SHIPPING",
      desc: "solutions tailored to your business needs ensuring your cargo reaches its shipping seamless.",
      img: serviceImages.shipping,
    },
    {
      id: "freight",
      title: "FREIGHT FORWARDING",
      desc: "freight forwarding, from documentation to customs clearance, making international destination safely and on time.",
      img: serviceImages.freight,
    },
    {
      id: "port",
      title: "PORT HANDLING",
      desc: "We offer efficient port handling services to ensure smooth loading and unloading your cargo at ports worldwide.",
      img: serviceImages.port,
    },
    {
      id: "warehouse",
      title: "WAREHOUSING",
      desc: "Our secure warehousing facilities provide safe storage for your goods with inventory management and distribution services.",
      img: serviceImages.warehouse,
    },
    {
      id: "transport",
      title: "TRANSPORTATION",
      desc: "We provide reliable transportation for local and international cargo movement with real-time tracking.",
      img: serviceImages.transport,
    },
    {
      id: "customs",
      title: "CUSTOMS CLEARANCE",
      desc: "Our customs clearance services ensure your shipments comply with all regulations and pass through customs without delays.",
      img: serviceImages.customs,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* HERO */}
      <section className="relative h-[300px] w-full overflow-hidden bg-slate-900 md:h-[340px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-fade-in-delayed text-2xl font-extrabold tracking-wide text-white md:text-3xl">Service</h1>
          <div className="text-fade-in mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> service
          </div>
        </div>
      </section>

      {/* OUR SERVICE */}
      <section className="py-14 md:py-20" id="services">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="OUR SERVICE"
            subtitle="Comprehensive logistics solutions tailored to meet your specific needs"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-10">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`group ${idx % 2 === 0 ? "reveal-left" : "reveal-right"} card-lift relative rounded-xl bg-white p-4 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-100/50 sm:p-6`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-all duration-700 group-hover:from-red-50/20 group-hover:via-white/0 group-hover:to-blue-50/20" />
                <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-red-200/30" />

                <div className="relative z-10">
                  <div className="mx-auto h-28 w-full overflow-hidden rounded-lg bg-slate-100 transition-all duration-500 group-hover:scale-105 sm:h-40">
                    {service.img ? (
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300" />
                    )}
                  </div>

                  <h3 className="mt-6 text-xs font-extrabold uppercase tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-red-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[10px] leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700 sm:mt-3 sm:text-[11px]">
                    {service.desc}
                  </p>

                  <a
                    href={`#${service.id}-service`}
                    className="tap-feedback hover-scale mt-6 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-red-600 transition-all duration-300 group-hover:gap-2 group-hover:text-red-700"
                  >
                    Learn More 
                    <span 
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="bg-slate-50 pt-14 pb-32 md:pt-20 md:pb-52" id="contact">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900">CONTACT US</h2>
          </div>

          <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-red-50/40 p-8 shadow-sm transition-all duration-500 hover:shadow-lg">
            <form className="space-y-4">
              <input className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200" placeholder="Name" />
              <input className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200" placeholder="Email" />
              <input className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200" placeholder="Phone No" />
              <select className="w-full rounded bg-white px-4 py-2 text-xs text-slate-500 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200">
                <option>Select Freight</option>
                <option>Shipping</option>
                <option>Freight Forwarding</option>
                <option>Port Handling</option>
                <option>Warehousing</option>
                <option>Transportation</option>
                <option>Customs clearance</option>
              </select>
              <textarea rows={5} className="w-full resize-none rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200" placeholder="Message" />
              <button type="button" className="mx-auto mt-2 block w-40 rounded-full bg-red-600 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
