import React from "react";

interface CTAThreeProps {
  onPublishClick: () => void;
}

export default function CTAThree({ onPublishClick }: CTAThreeProps) {
  return (
    <section className="ctathree relative overflow-hidden bg-[var(--theme-primary-color)] py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Your Book Has Been Waiting Long Enough
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-7 sm:text-lg">
            You did the hard part already. You wrote it. Let us handle the
            rest, from editing to your first sale.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onPublishClick}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-slate-800"
            >
              Publish My Book
            </button>
            <a
              href="tel:+13466132030"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
            >
              Call Now
            </a>
            <a
              href="javascript:;"
              title="Live Chat"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
