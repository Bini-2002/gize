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
  <div className="mx-auto max-w-6xl px-4 relative md:flex md:items-center md:justify-center md:gap-6">

    {/* Left card: STAY UPDATED */}
    <div className="rounded-2xl bg-gradient-to-b from-red-500/70 to-red-200/70 p-8 shadow-lg md:p-10 md:p-10 md:w-1/2 z-20 relative -mr-16">
      <h2 className="text-3xl font-extrabold uppercase tracking-wide text-gray-900 md:text-4xl">
        STAY UPDATED
      </h2>
      <div className="mt-3 h-1 w-24 bg-red-600" />

      <div className="mt-6 space-y-4 text-sm text-gray-700">
        <p>
          Follow us on our social media channels and stay updated on our logistics developments! We share stories about our logistics challenges, smart solutions, and working at the logistics chain.
        </p>
        <p>
          Stay connected to plan shipments efficiently, avoid delays, and get insights into the latest logistics trends.
        </p>
      </div>
    </div>

    {/* Right card: LET'S CONNECT */}
   {/* Right card: LET'S CONNECT */}
<div className="rounded-2xl bg-gray-100 p-8 shadow-lg md:p-10 md:w-1/2 z-10 relative">
  <h3 className="text-2xl font-extrabold uppercase tracking-wide text-black text-center">
    LET'S CONNECT
  </h3>

  <div className="mt-6 grid grid-cols-2 gap-4">
    <div className="flex items-center gap-2">
      <Icon icon="mdi:facebook" className="h-5 w-5 text-black" />
      <span className="text-sm font-semibold text-black">Facebook</span>
    </div>

    <div className="flex items-center gap-2">
      <Icon icon="mdi:twitter" className="h-5 w-5 text-black" />
      <span className="text-sm font-semibold text-black">X</span>
    </div>

    <div className="flex items-center gap-2">
      <Icon icon="mdi:youtube" className="h-5 w-5 text-black" />
      <span className="text-sm font-semibold text-black">YouTube</span>
    </div>

    <div className="flex items-center gap-2">
      <Icon icon="mdi:instagram" className="h-5 w-5 text-black" />
      <span className="text-sm font-semibold text-black">Instagram</span>
    </div>

    <div className="flex items-center gap-2">
      <Icon icon="mdi:linkedin" className="h-5 w-5 text-black" />
      <span className="text-sm font-semibold text-black">LinkedIn</span>
    </div>

    <div className="flex items-center gap-2">
      <Icon icon="mdi:spotify" className="h-5 w-5 text-black" />
      <span className="text-sm font-semibold text-black">Spotify</span>
    </div>
  </div>
</div>

    </div>

  
</section>


    </div>
  );
}
