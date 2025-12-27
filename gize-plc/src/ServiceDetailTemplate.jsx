import "./Services.css";

export default function ServiceDetailTemplate({
  title,
  subtitle,
  mainImage,
  insetImage,
  bullets,
  gradient = "from-red-600/80 via-slate-900/60 to-slate-900/40",
  accent = "from-red-500/10 to-red-500/0",
}) {
  const leftBullets = bullets.slice(0, 3);
  const rightBullets = bullets.slice(3, 6);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      {/* HERO */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[340px]">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-fade-in-delayed text-2xl font-extrabold tracking-wide text-white md:text-3xl">{title}</h1>
          <div className="text-fade-in mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> Services <span className="px-2">/</span> {title}
          </div>
        </div>
      </section>

      {/* DETAIL CONTENT */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${accent}`} aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
                {mainImage ? (
                  <img src={mainImage} alt={title} className="h-full w-full object-cover" />
                ) : (
                  <div className="service-image-loading h-72 w-full" />
                )}
                {insetImage && (
                  <div className="absolute -bottom-6 -right-6 hidden h-32 w-40 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white md:block">
                    <img src={insetImage} alt={`${title} inset`} className="h-full w-full object-cover" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600">{subtitle}</p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                We deliver this service with disciplined planning, proactive communication, and the flexibility to adapt when routes, regulations, or timelines change.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <ul className="space-y-3 text-sm">
                  {leftBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600 ring-1 ring-red-100">
                        •
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-sm">
                  {rightBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600 ring-1 ring-red-100">
                        •
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1">On-time plans</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Regulatory support</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Global network</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="hover-lift inline-flex items-center rounded-full bg-red-600 px-6 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-md transition-all duration-300"
                >
                  Talk To Us
                </a>
                <a
                  href="#services"
                  className="hover-lift inline-flex items-center rounded-full border border-slate-200 px-6 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 transition-all duration-300 hover:border-red-200 hover:text-red-600"
                >
                  Back To Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
