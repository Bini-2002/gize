import "./Contact.css";

import { Icon } from "@iconify/react";

export default function ContactSection() {
  return (
    <>
      {/* CONTACT FORM SECTION */}
      <section id="contact" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal rounded-3xl bg-white p-6 shadow-md md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* LEFT COPY */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  We&apos;re here to help you
                </p>
                <h2 className="text-fade-in-delayed mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                  Discuss Your
                  <span className="block font-light">Solution Needs</span>
                </h2>
                <p className="mt-4 max-w-md text-sm text-slate-500">
                  Tell us what you&apos;re trying to achieve and we&apos;ll get back with the
                  right next steps.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                      <Icon icon="mdi:email-outline" className="h-5 w-5 text-red-600" aria-hidden="true" />
                    </span>
                    <div className="text-sm">
                      <p className="text-slate-400">E-mail</p>
                      <p className="font-semibold text-slate-700">gize@gizeplc.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                      <Icon icon="mdi:phone" className="h-5 w-5 text-red-600" aria-hidden="true" />
                    </span>
                    <div className="text-sm">
                      <p className="text-slate-400">Phone number</p>
                      <p className="font-semibold text-slate-700">+251 911 516478</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM CARD */}
              <div className="reveal rounded-2xl bg-white p-6 shadow-md md:p-8">
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div>
                    <label className="sr-only" htmlFor="contact-name-inline">
                      Name
                    </label>
                    <input
                      id="contact-name-inline"
                      name="name"
                      placeholder="Name"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="contact-email-inline">
                      Email
                    </label>
                    <input
                      id="contact-email-inline"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="contact-industry-inline">
                      Industry
                    </label>
                    <select
                      id="contact-industry-inline"
                      name="industry"
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-100"
                    >
                      <option value="" disabled>
                        Industry
                      </option>
                      <option value="logistics">Logistics</option>
                      <option value="transport">Transport</option>
                      <option value="warehousing">Warehousing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="contact-message-inline">
                      Message
                    </label>
                    <textarea
                      id="contact-message-inline"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="tap-feedback hover-scale inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h12" />
                        <path d="M13 6l6 6-6 6" />
                      </svg>
                    </span>
                    Get a Solution
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
