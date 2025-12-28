import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Homepage from "./Homepage.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import FAQ from "./FAQ.jsx";
import Contact from "./Contact.jsx";
import ContactSection from "./ContactSection.jsx";
import FooterCTA from "./FooterCTA.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsAndConditions from "./TermsAndConditions.jsx";
import Shipping from "./Shipping.jsx";
import FreightForwarding from "./FreightForwarding.jsx";
import PortHandling from "./PortHandling.jsx";
import Warehousing from "./Warehousing.jsx";
import Transportation from "./Transportation.jsx";
import CustomsClearance from "./CustomsClearance.jsx";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal, .reveal-left, .reveal-right"));
    if (!elements.length) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          const isSideReveal = el.classList.contains("reveal-left") || el.classList.contains("reveal-right");

          if (entry.isIntersecting) {
            el.classList.add("is-revealed");

            // Keep observing left/right reveals on mobile so they can animate again
            // when the user scrolls back up.
            if (!(isMobile && isSideReveal)) {
              observer.unobserve(el);
            }
          } else if (isMobile && isSideReveal) {
            // Reset when out of view so the animation can replay.
            el.classList.remove("is-revealed");
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [hash]);

  const Page =
    hash === "#shipping-service"
      ? Shipping
      : hash === "#freight-service"
        ? FreightForwarding
        : hash === "#port-service"
          ? PortHandling
          : hash === "#warehouse-service"
            ? Warehousing
            : hash === "#transport-service"
              ? Transportation
              : hash === "#customs-service"
                ? CustomsClearance
                : hash === "#contact"
                  ? Contact
                  : hash === "#faq"
                    ? FAQ
                    : hash === "#services"
                      ? Services
                      : hash === "#about"
                        ? About
                        : hash === "#privacy"
                          ? PrivacyPolicy
                          : hash === "#terms"
                            ? TermsAndConditions
                            : Homepage;

  const isHomepage = hash === "" || hash === "#" || hash === undefined;
  const isContactPage = hash === "#contact";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div key={hash || "#home"} className="page-fade-in">
          <Page />
        </div>
        {!isHomepage && !isContactPage && <ContactSection />}
      </main>
      <div className="bg-[#0D4250] pt-12 md:pt-14">
        <FooterCTA />
        <Footer />
        <ScrollToTopButton />
        
      </div>
    </div>
  );
}
