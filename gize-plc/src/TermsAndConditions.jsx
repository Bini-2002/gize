export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-fade-in-delayed text-3xl font-extrabold text-slate-900">Terms &amp; Conditions</h1>
        <p className="text-fade-in mt-4 text-sm text-slate-600">
          These terms govern your use of this website.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-7 text-slate-600">
          <div>
            <h2 className="text-base font-bold text-slate-900">Use of Website</h2>
            <p className="mt-2">
              Use this website lawfully and do not attempt to disrupt or misuse any part of the service.
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Content</h2>
            <p className="mt-2">
              Content is provided for general information and may change without notice.
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact us via the details on the Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
