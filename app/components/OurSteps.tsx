import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "Contact Us",
    desc: "In the first step of the book publishing process, you'll contact our book publishing company to discuss your publishing goals and learn more about your book.",
    img: "/images/steps-icons/placement.webp",
  },
  {
    title: "Submit Your Manuscript",
    desc: "Send us your completed manuscript. Our expert writers and editors will review and provide feedback to prepare it for publishing.",
    img: "/images/steps-icons/feedback.webp",
  },
  {
    title: "Bring Your Book To Life",
    desc: "We finalize edits and design elements to turn your manuscript into a published work of art.",
    img: "/images/steps-icons/revision.webp",
  },
  {
    title: "Share Your Story",
    desc: "We'll handle printing, distribution, and marketing support so you can share your story with the world.",
    img: "/images/steps-icons/publishing.webp",
  },
];

export default function OurSteps() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">MAKE YOUR PUBLISHING DREAMS A REALITY WITH</h2>
        <p className="mt-2 text-lg font-extrabold text-[var(--theme-primary-color)]">OUR 4-STEP PUBLISHING PROCESS</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm md:h-80">
                <div className="mb-4 h-20 w-20 rounded-full bg-white p-4 shadow flex items-center justify-center">
                <Image src={s.img} alt={s.title} width={48} height={48} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="mb-3 text-md font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
