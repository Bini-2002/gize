import { useEffect, useRef, useState } from "react";
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
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setHideTopBar(y > 10);

      // Smooth navbar hide/show: hide when scrolling down, show when scrolling up.
      const scrollingDown = y > lastScrollYRef.current;
      const beyondThreshold = y > 140;
      setHideNav(scrollingDown && beyondThreshold);
      lastScrollYRef.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Prevent background scroll when the mobile drawer is open.
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const NAV_HEIGHT = 80;
  const TOP_BAR_HEIGHT = 48;

  return (
    <div className="w-full font-sans">
      {/* Fixed header wrapper (guaranteed to stay visible on scroll) */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <div className={`transition-transform duration-300 ${hideNav && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"}`}>
        {/* Top Bar - hidden after scroll */}
        <div className={`bg-[#0D4250] text-white text-xs md:text-sm py-3 border-b border-white/10 transition-all duration-300 ${hideTopBar ? "max-h-0 overflow-hidden py-0 opacity-0" : "max-h-24 opacity-100"}`}>
          <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:map-marker" className="h-4 w-4 text-white" aria-hidden="true" />
                <span>Bole Rwanda Embassy road</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:email-outline" className="h-4 w-4 text-white" aria-hidden="true" />
                <span>gize@gizeplc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:phone" className="pulse-soft h-4 w-4 text-white" aria-hidden="true" />
                <span>+251115 528080</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="tap-feedback hover-scale hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="tap-feedback hover-scale hover:opacity-80 transition-opacity">
                <img src={twitterIcon} alt="X" className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="tap-feedback hover-scale hover:opacity-80 transition-opacity">
                <img src={instagramIcon} alt="Instagram" className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="tap-feedback hover-scale hover:opacity-80 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <header className="bg-white shadow-lg border-b border-[#ff0000]">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 bg-white p-2 rounded shadow-sm">
              <a href="#">
                <img src={logo} alt="Gize PLC" className="h-10 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="tap-feedback text-black font-bold uppercase tracking-wide hover:text-[#ff0000] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side: Search */}
            <div className="hidden md:flex items-center gap-6">
              <button className="tap-feedback hover-scale text-black hover:text-[#ff0000]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsMobileMenuOpen((prev) => {
                    const next = !prev;
                    if (next) setHideNav(false);
                    return next;
                  });
                }}
                className="tap-feedback text-black p-2 hover:bg-black/5 rounded"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        </header>
        </div>
      </div>

      {/* Mobile Drawer (slide-in / slide-out) */}
      <div className={`md:hidden drawer-overlay fixed inset-0 z-[60] ${isMobileMenuOpen ? "is-open" : ""}`}>
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`drawer-panel absolute left-0 top-0 h-full w-[86%] max-w-xs bg-white shadow-2xl ${isMobileMenuOpen ? "is-open" : ""}`}>
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
            <span className="text-sm font-extrabold uppercase tracking-wide text-slate-900">Menu</span>
            <button
              type="button"
              className="tap-feedback rounded p-2 text-black hover:bg-black/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="max-h-[calc(100vh-64px)] overflow-y-auto px-4 py-3 pb-10">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="tap-feedback block rounded-md px-3 py-3 text-sm font-extrabold uppercase tracking-wide text-slate-900 hover:bg-black/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer so page content isn't hidden behind fixed header */}
      <div aria-hidden="true" style={{ height: hideTopBar ? NAV_HEIGHT : NAV_HEIGHT + TOP_BAR_HEIGHT }} />
    </div>
  );
}
