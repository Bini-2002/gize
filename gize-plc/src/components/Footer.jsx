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
    <svg
      className="h-4 w-4 text-red-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path d="M14 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-10 md:mt-16 pb-0 pt-0 text-sm text-slate-300"
    >
      {/* Top Banner */}
      <div className="relative z-30">
        <div className="w-full max-w-5xl px-4 mx-auto">
          <div className="bg-red-600 py-8 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border border-white/15">
            <div className="flex-1">
              <h2 className="text-white text-lg md:text-2xl font-bold text-center md:text-left">
                <span className="block text-base md:text-lg">Looking for The Best</span>
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
        <div className="mx-auto grid max-w-6xl gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <img src={logo} alt="Gize PLC" className="mb-4 h-8 mx-auto sm:mx-0" />
            <p className="text-xs text-slate-300">
              Gize Logistics and Transport is a freight forwarding company managed by a team of professionals dedicated to prompt customer service.
            </p>

            <div className="mt-6 flex justify-center sm:justify-start gap-4">
              {[facebookIcon, instagramIcon, linkedinIcon, twitterIcon].map((icon, i) => (
                <img key={i} src={icon} className="h-8 w-8 sm:h-9 sm:w-9" alt="" />
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center justify-center sm:justify-start gap-2 hover:text-white">
                    <Chevron />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center justify-center sm:justify-start gap-2 hover:text-white">
                    <Chevron />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start gap-4">
                <Icon icon="mdi:map-marker" className="text-red-600 h-6 w-6" />
                Bole Rwanda Embassy road
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4">
                <Icon icon="mdi:phone" className="text-red-600 h-6 w-6" />
                +251115 528080
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4">
                <Icon icon="mdi:cellphone" className="text-red-600 h-6 w-6" />
                +251911 516478
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4">
                <Icon icon="mdi:email-outline" className="text-red-600 h-6 w-6" />
                gize@gizeplc.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0D4250] py-3 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between px-4 text-center sm:text-left gap-2 sm:gap-0">
          <span>All Rights Reserved by Gize PLC</span>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="#privacy" className="hover:text-red-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-red-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
