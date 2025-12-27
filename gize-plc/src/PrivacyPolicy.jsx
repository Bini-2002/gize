export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-fade-in-delayed text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="text-fade-in mt-4 text-sm text-slate-600">
          This page describes how we collect, use, and protect your information.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-7 text-slate-600">
          <div>
            <h2 className="text-base font-bold text-slate-900">Information We Collect</h2>
            <p className="mt-2">
              We may collect information you provide through forms (such as name, email, and message) and basic usage data needed to operate the
              website.
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">How We Use Information</h2>
            <p className="mt-2">
              We use information to respond to inquiries, provide requested services, improve the website, and maintain security.
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Contact</h2>
            <p className="mt-2">
              For privacy questions, contact us via the details on the Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
