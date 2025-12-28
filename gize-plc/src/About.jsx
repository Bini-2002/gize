import { useEffect, useState } from "react";
import "./About.css";

// IMPORT ICONIFY
import { Icon } from "@iconify/react";

import aboutCardImg from "./images/i5.jpg";
import ceoCutout from "./pages/ceo-image.png";
import ceoAlt from "./images/ceo_3.jpg";
// 1. IMPORT THE LOCAL IMAGE
import teamBgImage from "./images/i3.jpeg";

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
      {/* HERO - NO CHANGE */}
      <section className="relative h-75 w-full overflow-hidden bg-slate-900 md:h-85 slide-in-left">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-fade-in-delayed text-2xl font-extrabold tracking-wide text-white md:text-3xl">About Us</h1>
          <div className="text-fade-in mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> About Us
          </div>
        </div>
      </section>

      {/* ABOUT - ANIMATION ADDED */}
      <section className="bg-[#ffecec] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 rounded-3xl bg-white/70 px-6 py-10 md:grid-cols-2 md:items-center md:px-12 md:py-12 shadow-xl ring-1 ring-red-100">
            {/* TEXT: SLIDE IN FROM LEFT */}
            <div className="slide-in-left"> 
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
                
              </div>
            </div>

            {/* IMAGE: SLIDE IN FROM RIGHT */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-red-100 slide-in-right">
              <img
                src={aboutCardImg}
                alt="About Gize PLC"
                className="h-65 w-full object-cover md:h-85"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* CEO - BACKGROUND REMOVED */}
      <section className="py-14 md:py-20 relative overflow-hidden"> 
        {/* Removed Animated Background */}

        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          {/* CEO TEXT */}
          <div className="relative z-10 slide-in-left">
            <div className="text-xs font-extrabold uppercase tracking-widest text-red-600">
              Chief Executive Officer
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              GIZESHWORK <br />
              TESSEMA
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-500 bounce-text">
              <p>
                Gizeshwork Tessema, the Chief Executive Officer, 
                leads the firm with a compelling vision that seamlessly combines
                 technological innovation and unwavering dedication. This commitment 
                 ensures the successful delivery of complex logistics solutions for a diverse clientele, 
                 ranging from multinational corporations to vital smaller enterprises operating across dynamic 
                 international markets. 
              </p>
              <p>
                Her profound passion for transforming strategic ideas into impactful, 
                executable products and services has been the driving force propelling the company
                 to its status as a leading logistics provider in the competitive East African region. 
          
                This proactive approach has resulted in a significant expansion of the company’s 
                regional footprint and a reputation for tackling the most challenging cross-border logistical hurdles.
              </p>
              
            </div>

            {/* SOCIAL MEDIA ICONS - GREY ICONS, RED HOVER, AND STAGGERED ANIMATION APPLIED */}
            <div 
              className="mt-6 flex gap-4 ml-9 bounce-icon" 
            >
                 {/* Instagram */}
                 <a
                   href="#"
                   aria-label="Instagram"
                   // Reverted to gray/grey colors, added red hover and staggered animation
                   className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-600 hover:bg-red-600 hover:text-white transition shadow-md slide-in-top-stagger"
                   style={{ animationDelay: '500ms' }} // Staggered delay
                 >
                   <Icon icon="mdi:instagram" className="h-4 w-4" aria-hidden="true" />
                 </a>
                 {/* Twitter / X */}
                 <a
                   href="#"
                   aria-label="Twitter"
                   // Reverted to gray/grey colors, added red hover and staggered animation
                   className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-600 hover:bg-red-600 hover:text-white transition shadow-md slide-in-top-stagger"
                   style={{ animationDelay: '600ms' }} // Staggered delay
                 >
                   <Icon icon="mdi:twitter" className="h-4 w-4" aria-hidden="true" />
                 </a>
                 {/* LinkedIn */}
                 <a
                   href="#"
                   aria-label="LinkedIn"
                   // Reverted to gray/grey colors, added red hover and staggered animation
                   className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-600 hover:bg-red-600 hover:text-white transition shadow-md slide-in-top-stagger"
                   style={{ animationDelay: '700ms' }} // Staggered delay
                 >
                   <Icon icon="mdi:linkedin" className="h-4 w-4" aria-hidden="true" />
                 </a>
                 {/* Facebook */}
                 <a
                   href="#"
                   aria-label="Facebook"
                   // Reverted to gray/grey colors, added red hover and staggered animation
                   className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-600 hover:bg-red-600 hover:text-white transition shadow-md slide-in-top-stagger"
                   style={{ animationDelay: '800ms' }} // Staggered delay
                 >
                   <Icon icon="mdi:facebook" className="h-4 w-4" aria-hidden="true" />
                 </a>
            </div>
          </div>

          {/* CEO IMAGE */}
          <div className="md:justify-self-end relative z-10 slide-in-right bounce">
            <div className="relative mx-auto h-[320px] w-[280px] md:h-[360px] md:w-[340px]">
              <img
                src={ceoCutout}
                alt="CEO"
                className="absolute inset-x-0 bottom-0 mx-auto h-[320px] w-auto object-contain md:h-[360px] shadow-red-500/40"
              />
            </div>
          </div>
        </div>
      </section>
  

      {/* TEAM - ANIMATION CLASS CONFIRMED FOR STAGGERED EFFECT */}
      <section className="relative py-14 md:py-20 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Image - USING IMPORTED VARIABLE */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${teamBgImage})` }} 
          />
          {/* Color Overlay: Dark slate with a subtle red tint for atmosphere */}
          <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-tr from-red-900/10" />
        </div>

        {/* Content (relative z-10 to ensure it is above the background) */}
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white slide-in-top">
              Our Expert Team <br /> Members
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={member.id}
                // The 'slide-in-top-stagger' class combined with 'animationDelay' achieves the one-by-one effect.
                className={`text-center hover:scale-105 hover:shadow-2xl transition-transform duration-500 slide-in-top-stagger`} 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-slate-100">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>

                {/* Card adjusted to be white for better contrast against dark background */}
                <div className="mx-auto mt-4 w-57.5 rounded-2xl bg-white px-6 py-4 shadow-xl">
                  <div className="text-xs font-bold text-slate-900">{member.name}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-red-600">
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