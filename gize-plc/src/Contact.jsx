import "./Contact.css";
import ContactSection from "./ContactSection.jsx";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* HERO */}
      <section className="relative h-[320px] bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
          <h1 className="text-fade-in-delayed text-3xl font-extrabold text-white">Contact Us</h1>
          <p className="text-fade-in mt-2 text-xs uppercase text-white/80">Home / Contact Us</p>
        </div>
      </section>
      <ContactSection />

      {/* STAY UPDATED (Contact page only) */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="">
            {/* Left: Stay Updated */}
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-b from-red-500/70 to-red-200/70 p-8 shadow-lg md:p-10">
              <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white md:text-4xl">STAY UPDATED</h2>
              <div className="mt-3 h-1 w-44 bg-white/80" />

              <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-800">
                <div className="flex gap-4">
                  <span className="mt-1 h-10 w-1 bg-white/80" aria-hidden="true" />
                  <p>
                    Stay updated with the latest news, service improvements, and important announcements from our logistics and shipping operations.
                    We share timely insights on route changes, new solutions, and industry developments that matter to you.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 h-10 w-1 bg-white/80" aria-hidden="true" />
                  <p>
                    By staying connected, you can plan shipments more efficiently and avoid unnecessary delays. Our updates help you make informed
                    decisions and stay ahead in a fast-moving supply chain.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Get in Touch */}
            <div className="mt-12 w-full rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 p-8 shadow-xl md:ml-auto md:mt-24 md:w-[560px] md:p-10 lg:mr-6">
              <h3 className="text-center text-2xl font-extrabold uppercase tracking-wide text-slate-700">GET IN TOUCH</h3>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Icon icon="mdi:facebook" className="block h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-700">GIZE PLC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="fa6-brands:x-twitter" className="block h-6 w-6 shrink-0 text-slate-900" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-700">@LogisticsPlc</span>
                  </div>
                </div>

                <div className="space-y-5 md:justify-self-end">
                  <div className="flex items-center gap-3">
                    <Icon icon="mdi:instagram" className="block h-6 w-6 shrink-0 text-pink-600" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-700">@gize_plc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="mdi:linkedin" className="block h-6 w-6 shrink-0 text-sky-700" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-700">GIZE PLC</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid-cols-3">
                <div>
                  <div className="mb-2">CALL</div>
                  <div className="text-sm font-extrabold normal-case tracking-normal text-slate-800">+251115 528080</div>
                </div>
                <div>
                  <div className="mb-2">EMAIL</div>
                  <div className="text-sm font-extrabold normal-case tracking-normal text-slate-800">gize@gizeplc.com</div>
                </div>
                <div>
                  <div className="mb-2">MOBILE</div>
                  <div className="text-sm font-extrabold normal-case tracking-normal text-slate-800">+251 911 516478</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
