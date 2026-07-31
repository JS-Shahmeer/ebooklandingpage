import { FaCheck } from "react-icons/fa6";

interface HeroProps {
  onPublishClick: () => void;
}

export function Hero({ onPublishClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white md:pt-28 pt-24 pb-10">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-60" />
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="max-w-2xl">
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Your Book Deserves to Be Read. We&apos;ll Help You Publish It.
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-200">
              From your first draft to a finished book on Amazon, we handle editing, design, formatting and distribution so you don&apos;t have to figure it out alone.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-200">
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1 h-4 w-4 shrink-0 text-orange-400" />
                End-to-end publishing support from concept to launch
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1 h-4 w-4 shrink-0 text-orange-400" />
                Professional editing, design, layout, and distribution
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1 h-4 w-4 shrink-0 text-orange-400" />
                Guidance tailored for first-time and experienced authors
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onPublishClick}
                className="inline-flex items-center justify-center rounded-full bg-[var(--theme-primary-color)] animate-theme-bounce animation-delay-100 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:opacity-95"
              >
                Get My Free Publishing Consultation
              </button>
              <a
                href="tel:+13466132030"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Trusted by first time authors and seasoned writers alike. Real books. Real launches. Real support.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 text-slate-900 bg-white/95 p-6 shadow-2xl sm:p-8">
            <div className="mb-4">
              
              <h2 className="text-2xl font-semibold text-slate-950">
                Publish Your Book On Amazon
              </h2>
            </div>

            <div className="space-y-3">
              <select
                defaultValue=""
                aria-label="Do you have a manuscript ready?"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
              >
                <option value="" disabled>
                  Do you have a manuscript ready?
                </option>
                <option value="ready">Yes, I'm ready to publish today</option>
                <option value="1-3">Yes, I'll be ready to publish in 1 to 3 months</option>
                <option value="3-6">Yes, I'll be ready to publish in 3 to 6 months</option>
                <option value="no">No, I do not have a book or manuscript ready</option>
              </select>

              <select
                defaultValue=""
                aria-label="Have you published before?"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
              >
                <option value="" disabled>
                  Have you published before?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <select
                defaultValue=""
                aria-label="What type of book do you plan on publishing?"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
              >
                <option value="" disabled>
                  What type of book do you plan on publishing?
                </option>
                <option value="business">Business</option>
                <option value="biography">Biography</option>
                <option value="inspirational">Inspirational</option>
                <option value="nonfiction">Non-Fiction</option>
                <option value="fiction">Fiction</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-3 text-xs font-medium text-slate-900">What services are you looking for?</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Self Publishing",
                  "Editing",
                  "Cover Design",
                  "Audio book publishing",
                  "Illustration",
                  "Purchase ISBN",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-[var(--theme-primary-color)]"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-[var(--theme-primary-color)] focus:ring-[var(--theme-primary-color)]"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                aria-label="Your Name"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
                placeholder="Your Name*"
              />
              <input
                aria-label="Phone Number"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
                placeholder="Phone No.*"
              />
            </div>

            <input
              aria-label="Email Address"
              className="mt-4 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
              placeholder="Email Address*"
            />

            <button className="mt-6 w-full rounded-full bg-[var(--theme-primary-color)] animate-theme-bounce animation-delay-300 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:opacity-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
