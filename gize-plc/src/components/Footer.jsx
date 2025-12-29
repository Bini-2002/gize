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
  { label: "Customs Clearance", href: "#services" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "CEO", href: "#about" },
  { label: "Contact Us", href: "#contact" },
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
    <footer
      id="contact"
      className="relative mt-25 md:mt-35 pb-0 pt-0 text-sm text-slate-300"
    >
      {/* Top Banner */}
      <div className="relative z-30">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
          <div className="bg-red-600 py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center border border-white/15">
            <div className="flex-1">
              <h2 className="text-white text-xl md:text-2xl font-bold text-center md:text-left">
                <span className="block">Looking for The Best</span>
                <span className="block">Logistics Transport Services?</span>
              </h2>
            </div>

            {/* Contact Us Button */}
            <button
              onClick={() => (window.location.hash = "#contact")}
              className="bg-white text-slate-900 px-8 py-3 font-bold hover:scale-105 transition-all mt-4 md:mt-0"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div
        className="relative pt-40 pb-6 px-4 md:px-12"
        style={{
          backgroundColor: "#0D4250",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Gize PLC" className="mb-4 h-8" />
            <p className="text-xs text-slate-300">
              Gize Logistics and Transport is a freight forwarding company managed by a team of professionals dedicated to prompt customer service.
            </p>

            <div className="mt-6 flex gap-4">
              {[facebookIcon, instagramIcon, linkedinIcon, twitterIcon].map(
                (icon, i) => (
                  <img key={i} src={icon} className="h-9 w-9" alt="" />
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center gap-2 hover:text-white">
                    <Chevron />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center gap-2 hover:text-white">
                    <Chevron />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-4">
                <Icon icon="mdi:map-marker" className="text-red-600 h-6 w-6" />
                Bole Rwanda Embassy road
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:phone" className="text-red-600 h-6 w-6" />
                +251115 528080
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:cellphone" className="text-red-600 h-6 w-6" />
                +251911 516478
              </li>
              <li className="flex items-center gap-4">
                <Icon icon="mdi:email-outline" className="text-red-600 h-6 w-6" />
                gize@gizeplc.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0D4250] py-3 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex justify-between px-4">
          <span>All Rights Reserved by Gize PLC</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-red-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-red-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

  
