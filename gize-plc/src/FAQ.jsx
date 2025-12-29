import { useState, useEffect } from "react";
import "./FAQ.css";

// Note: This page previously imported `react-icons`, but that dependency isn't declared
// in `gize-plc/package.json`. Keeping this page dependency-free prevents blank screens
// in fresh installs / deployments.

function AccordionRow({ question, answer, isOpen, onClick }) {
  return (
    <div className="reveal rounded-2xl bg-red-50/40 px-6 py-5">
      <button
        type="button"
        onClick={onClick}
        className="tap-feedback flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="text-[12px] font-semibold text-slate-700">{question}</span>
        <span className="mt-0.5 text-slate-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[11px] leading-relaxed text-slate-500">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "How can I track a shipment?", a: "Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself as a reputed leader in the transportation and logistics sector in the country and region at large." },
    { q: "How can I track a shipment?", a: "You can track your shipment using our online tracking tool with your tracking number." },
    { q: "What logistics services does Gize offer?", a: "We offer shipping, freight forwarding, port handling, warehousing, transportation, and customs clearance." },
    { q: "What areas do you serve?", a: "We support local and international cargo movements, tailored to customer requirements and routes." },
    { q: "How are shipping costs calculated?", a: "Costs are typically calculated based on cargo weight/volume, destination, service type, and any special handling requirements." },
    { q: "How do you handle customs clearance?", a: "Our team manages documentation, compliance checks, and coordination with authorities to reduce delays." },
  ];

  useEffect(() => {
    // reserved for future scroll-based UI tweaks
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[340px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-fade-in-delayed text-2xl md:text-3xl font-extrabold tracking-wide text-white">FAQ</h1>
          <div className="text-fade-in mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> FAQS
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-50 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="pt-6 md:pt-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Frequently asked</h2>
              <div className="mt-1 text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-red-600">
                QUESTIONS
              </div>
            </div>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <AccordionRow
                  key={`${item.q}-${idx}`}
                  question={item.q}
                  answer={item.a}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
