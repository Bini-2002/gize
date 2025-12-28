import { useEffect, useState } from "react";
import logo from "../images/gize_logo.png";
import { Icon } from "@iconify/react";

import facebookIcon from "../Socials/facebook.png";
import instagramIcon from "../Socials/instagram.png";
import linkedinIcon from "../Socials/linkedin.png";
import twitterIcon from "../Socials/twitter.png";

const primaryLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const NAV_HEIGHT = 80;
  const TOP_BAR_HEIGHT = 48;

  /* Hide ONLY top info bar on scroll */
  useEffect(() => {
    const onScroll = () => {
      setHideTopBar(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* ESC key closes mobile menu */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* FIXED HEADER */}
      <div className="fixed left-0 right-0 top-0 z-50">

        {/* TOP INFO BAR (HIDES ON SCROLL) */}
        <div
          className={`bg-[#0D4250] text-white text-xs md:text-sm border-b border-white/10 transition-all duration-300 ${
            hideTopBar ? "max-h-0 py-0 opacity-0 overflow-hidden" : "max-h-24 py-3 opacity-100"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:map-marker" className="h-4 w-4" />
                <span>Bole Rwanda Embassy road</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:email-outline" className="h-4 w-4" />
                <span>gize@gizeplc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:phone" className="h-4 w-4 pulse-soft" />
                <span>+251115 528080</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <img src={facebookIcon} alt="Facebook" className="h-4 w-4 cursor-pointer" />
              <img src={twitterIcon} alt="X" className="h-4 w-4 cursor-pointer" />
              <img src={instagramIcon} alt="Instagram" className="h-4 w-4 cursor-pointer" />
              <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* MAIN NAV (ALWAYS VISIBLE) */}
        <header className="bg-white shadow-lg border-b border-red-500">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between h-20">

              {/* Logo */}
              <a href="#" className="bg-white p-2 rounded shadow-sm">
                <img src={logo} alt="Gize PLC" className="h-10 w-auto" />
              </a>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-8">
                {primaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-bold uppercase tracking-wide text-sm hover:text-red-500 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Contact Button */}
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="rounded bg-red-500 px-6 py-2 text-xs font-bold uppercase text-white hover:bg-red-600 transition"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

            </div>
          </div>
        </header>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 md:hidden">
          <div className="absolute left-0 top-0 h-full w-[86%] max-w-xs bg-white shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-extrabold uppercase">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>✕</button>
            </div>

            <div className="p-4 space-y-2">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-3 font-bold uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div
        aria-hidden
        style={{
          height: hideTopBar ? NAV_HEIGHT : NAV_HEIGHT + TOP_BAR_HEIGHT,
        }}
      />
    </div>
  );
}
