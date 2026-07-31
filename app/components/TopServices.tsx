import React from "react";
import {
  FiBookOpen,
  FiGlobe,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    title: "Manuscript Assessment",
    icon: FiBookOpen,
    desc:
      "In order to assist authors in determining if their work is ready for publication and to provide expert criticism for enhancement, we provide manuscript evaluation services.",
  },
  {
    title: "Translation",
    icon: FiGlobe,
    desc:
      "Translating written material from one language into another enables authors to reach a wider readership and sell more copies of their publications.",
  },
  {
    title: "Distribution",
    icon: FiPackage,
    desc:
      "We are among the top self-publishing businesses because of our extensive distribution network. We also take care of the authors' printing and distribution, which makes it simpler for them to self-publish on multiple platforms and reach global readers.",
  },
  {
    title: "Promotion",
    icon: FiTrendingUp,
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
          {services.map((s, idx) => {
            const Icon = s.icon;

            return (
              <article
                key={idx}
                className="flex flex-col rounded-lg bg-white p-6 shadow-md ring-1 ring-slate-100 md:h-96"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 p-3 text-[var(--theme-primary-color)]">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="md:text-lg text-base font-semibold text-slate-900 text-left">{s.title}</h3>
                </div>

                <div className="mt-4 flex-1 overflow-y-auto pr-2 text-sm leading-7 text-slate-700">
                  {s.desc}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
