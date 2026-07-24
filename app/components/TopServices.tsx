import React from "react";

const services = [
  {
    title: "Manuscript Assessment",
    desc:
      "In order to assist authors in determining if their work is ready for publication and to provide expert criticism for enhancement, we provide manuscript evaluation services.",
  },
  {
    title: "Translation",
    desc:
      "Translating written material from one language into another enables authors to reach a wider readership and sell more copies of their publications.",
  },
  {
    title: "Distribution",
    desc:
      "We are among the top self-publishing businesses because of our extensive distribution network. We also take care of the authors' printing and distribution, which makes it simpler for them to self-publish on multiple platforms and reach global readers.",
  },
  {
    title: "Promotion",
    desc:
      "Our team of professionals offers marketing assistance, such as press releases and social media promotion, to authors so they may contact their audience and market their work.",
  },
];

export default function TopServices() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl sm:text-5xl mb-2 font-bold">
          Top-Notch <span className="text-[var(--theme-primary-color)]">Book Publishing Services</span> For Authors
        </h2>
        <p className="mx-auto max-w-3xl text-slate-600">We are an amazon book publishing firm that offers authors a full range of publishing options including children book publishing.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="flex flex-col rounded-lg bg-white p-6 shadow-md ring-1 ring-slate-100 md:h-96"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-50">
                  {/* simple svg icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v20" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 7h14" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>

              <div className="mt-4 flex-1 overflow-y-auto pr-2 text-sm leading-7 text-slate-700">
                {s.desc}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
