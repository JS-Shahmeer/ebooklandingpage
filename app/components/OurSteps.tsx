import React from "react";
import {
  FiMessageSquare,
  FiFileText,
  FiEdit3,
  FiSend,
} from "react-icons/fi";

const steps = [
  {
    title: "We Talk About Your Book",
    desc: "A short conversation to understand your goals, your genre and where your manuscript currently stands.",
    icon: FiMessageSquare,
  },
  {
    title: "You Send Us Your Manuscript",
    desc: "Our editors read it, mark it up and send back honest, practical feedback.",
    icon: FiFileText,
  },
  {
    title: "We Bring It to Life",
    desc: "Editing, cover design and formatting come together into a finished, publish ready book.",
    icon: FiEdit3,
  },
  {
    title: "Your Book Goes Live",
    desc: "We handle the upload, distribution and printing, and you get to hold your own book in your hands.",
    icon: FiSend,
  },
];

interface OurStepsProps {
  onOpenModal?: () => void;
}

export default function OurSteps({ onOpenModal }: OurStepsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Our Process</h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">How We Take Your Manuscript From Draft to Published Book</p>

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

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onOpenModal}
            className="rounded-full bg-[var(--theme-primary-color)] px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:opacity-95"
          >
            Start My Publishing Journey
          </button>
        </div>
      </div>
    </section>
  );
}
