import React from "react";
import {
  FiMessageSquare,
  FiFileText,
  FiEdit3,
  FiSend,
} from "react-icons/fi";

const steps = [
  {
    title: "Contact Us",
    desc: "In the first step of the book publishing process, you'll contact our book publishing company to discuss your publishing goals and learn more about your book.",
    icon: FiMessageSquare,
  },
  {
    title: "Submit Your Manuscript",
    desc: "Send us your completed manuscript. Our expert writers and editors will review and provide feedback to prepare it for publishing.",
    icon: FiFileText,
  },
  {
    title: "Bring Your Book To Life",
    desc: "We finalize edits and design elements to turn your manuscript into a published work of art.",
    icon: FiEdit3,
  },
  {
    title: "Share Your Story",
    desc: "We'll handle printing, distribution, and marketing support so you can share your story with the world.",
    icon: FiSend,
  },
];

export default function OurSteps() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">MAKE YOUR PUBLISHING DREAMS A REALITY WITH</h2>
        <p className="mt-2 text-lg font-extrabold text-[var(--theme-primary-color)]">OUR 4-STEP PUBLISHING PROCESS</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;

            return (
              <div key={i} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm md:h-80">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 p-4 shadow text-[var(--theme-primary-color)]">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-md font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
