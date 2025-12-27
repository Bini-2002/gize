import { useEffect, useState } from "react";
import "./About.css";

import aboutCardImg from "./images/i5.jpg";
import ceoCutout from "./pages/ceo-image.png";
import ceoAlt from "./images/ceo_3.jpg";

export default function About() {
  const [animatePage, setAnimatePage] = useState(false);

  const team = [
    { id: 1, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
    { id: 2, name: "John Smith", role: "Logistics Coordinator", img: ceoAlt },
    { id: 3, name: "Sarah Lee", role: "Operations Manager", img: ceoAlt },
  ];

  useEffect(() => {
    setAnimatePage(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-600 ${animatePage ? "fade-in" : ""}`}>
      {/* HERO */}
      <section className="relative h-[300px] w-full overflow-hidden bg-slate-900 md:h-[340px] slide-in-left">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-fade-in-delayed text-2xl font-extrabold tracking-wide text-white md:text-3xl">About Us</h1>
          <div className="text-fade-in mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> About Us
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#ffecec] py-14 md:py-20 slide-in-right">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 rounded-3xl bg-white/70 px-6 py-10 md:grid-cols-2 md:items-center md:px-12 md:py-12 shadow-sm ring-1 ring-red-100">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                We are a trusted <br className="hidden md:block" />
                logistics company since 2015
              </h2>

              <div className="mt-5 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  With over a decade in logistics, we have grown from a nimble local operator into a trusted regional partner. Our teams manage freight forwarding, port handling, warehousing, and last-mile coordination with disciplined planning, transparent communication, and hands-on execution.
                </p>
                <p>
                  We invest in process rigor—customs clearance expertise, real-time visibility, and contingency playbooks—so your cargo moves on schedule. Whether you need dedicated capacity or on-demand solutions, we tailor the engagement to your routes, cargo profile, and service-level needs.
                </p>
                <p>
                  Our promise is simple: dependable timelines, proactive updates, and people who stay accountable until delivery is done. That reliability is why shippers across industries continue to choose Gize PLC.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-red-100">
              <img
                src={aboutCardImg}
                alt="About Gize PLC"
                className="h-[260px] w-full object-cover md:h-[340px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BULLETS */}
      <section className="bg-[#fff4f4] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center slide-in-left">
            <h3 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 md:text-2xl">What Our Clients Value</h3>
            <p className="mt-2 text-sm text-slate-600">Six reasons shippers trust Gize PLC with critical cargo.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ul className="space-y-3 text-sm text-slate-700 slide-in-left">
              {[
                "Clear communication from booking through delivery",
                "Compliance-first approach to ports and customs",
                "Reliable schedules supported by contingency plans",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600 ring-1 ring-red-100">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3 text-sm text-slate-700 slide-in-right">
              {[
                "Seasoned teams for multimodal coordination",
                "Transparent pricing and documented milestones",
                "Flexible solutions that scale with your demand",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600 ring-1 ring-red-100">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">Gizeshwork Tessema</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-red-600">Cheir Executive Officer</p>
              <div className="mt-5 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  At Gize PLC we believe excellence is a habit, not an event. Our teams are empowered to own outcomes, communicate openly, and solve problems before they become delays. That mindset keeps your cargo moving and your commitments intact.
                </p>
                <p>
                  We will continue to invest in people, training, and technology that improve reliability—so every shipment is planned, monitored, and delivered with care. Thank you for trusting us to be your logistics partner of choice.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <img src={ceoCutout} alt="CEO" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 slide-in-left">
              Our Expert Team <br /> Members
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="text-center hover:scale-105 hover:shadow-lg transition-transform duration-500 slide-in-bottom"
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-slate-100">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>

                <div className="mx-auto mt-4 w-[230px] rounded-2xl bg-white px-6 py-4 shadow-sm">
                  <div className="text-xs font-bold text-slate-900">{member.name}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
