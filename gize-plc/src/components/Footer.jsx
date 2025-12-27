import logo from "../images/gize_logo.png";

import { Icon } from "@iconify/react";

import facebookIcon from "../Socials/facebook.png";
import instagramIcon from "../Socials/instagram.png";
import linkedinIcon from "../Socials/linkedin.png";
import twitterIcon from "../Socials/twitter.png";

const services = [
  { label: "Shipping", href: "#services" },
  { label: "Freight Forwarding", href: "#services" },
  { label: "Port Handling", href: "#services" },
  { label: "Warehousing", href: "#services" },
  { label: "Transportation", href: "#services" },
  { label: "Customs clearance", href: "#services" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Our Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "CEO", href: "#about" },
  { label: "Contact us", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

function Chevron() {
  return (
    <svg className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M14 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D4250] text-sm text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Company */}
          <div>
            <img src={logo} alt="Gize PLC" className="mb-6 h-10 w-auto" />
            <p className="max-w-sm text-sm leading-7 text-slate-200/80">
              Gize Logistics and Transport is a freight forwarding company managed by a team of professionals who are dedicated to responding
              promptly to customer demands.
            </p>

            <div className="mt-8 flex items-center gap-6">
              {[{ name: "Facebook", icon: facebookIcon }, { name: "Instagram", icon: instagramIcon }, { name: "LinkedIn", icon: linkedinIcon }, { name: "X", icon: twitterIcon }].map(
                (s) => (
                  <a key={s.name} href="#" aria-label={s.name} className="hover:opacity-90">
                    <img src={s.icon} alt="" className="h-9 w-9 md:h-10 md:w-10" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-extrabold text-white md:text-xl">Our Services</h3>
            <div className="mt-2 h-1 w-12 bg-red-600" />
            <ul className="mt-6 space-y-3 md:space-y-4">
              {services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center gap-2 text-sm text-slate-200/90 hover:text-white md:text-base">
                    <Chevron />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-extrabold text-white md:text-xl">Contact us</h3>
            <div className="mt-2 h-1 w-12 bg-red-600" />
            <ul className="mt-6 space-y-4 text-sm md:space-y-5 md:text-base">
              <li className="flex items-center gap-4">
                <Icon icon="mdi:map-marker" className="h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="text-slate-200/90">Bole Rwanda Embassy road</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:phone" className="h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="text-slate-200/90">Tel:+251115 528080</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:cellphone" className="h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="text-slate-200/90">Mob: +251911 516478</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:email-outline" className="h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="text-slate-200/90">Email: gize@gizeplc.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:clock-outline" className="h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="text-slate-200/90">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-sm text-slate-200/80 md:flex-row md:items-center md:px-8">
          <span>All Rights Reserved by Gize PLC</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
