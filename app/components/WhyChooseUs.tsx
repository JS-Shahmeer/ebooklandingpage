"use client";

import React, { useState } from "react";
import Image from "next/image";
import WhyImage from "@/public/images/why.webp";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "Personalized Support",
    a: "Our team of publishing professionals will work closely with each author to ensure their specific needs and goals are met. This means authors can expect a customized, one-on-one experience with our team.",
  },
  {
    q: "Comprehensive Services",
    a: "We provide editing, cover design, formatting, and distribution support so authors can publish with confidence.",
  },
  {
    q: "Wide Distribution",
    a: "We distribute to major retailers and aggregators to help your book reach more readers worldwide.",
  },
  {
    q: "Strong Sales Record",
    a: "Our marketing and launch support help authors maximize visibility and sales potential.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-8 md:grid-cols-4">
          <div className="col-span-1">
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image src={WhyImage} alt="Why choose us" fill className="object-cover" />
              </div>
            </div>

            <div className="md:hidden mb-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image src={WhyImage} alt="Why choose us" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Why Choose Us As Your Book Publisher?</h2>

            <div className="mt-6 space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  open={activeIndex === i}
                  className="overflow-hidden rounded border-t border-slate-200"
                >
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex((prev) => (prev === i ? -1 : i));
                    }}
                    className={`cursor-pointer list-none text-lg font-medium px-4 py-3 flex items-center justify-between ${
                      activeIndex === i ? "bg-[var(--theme-primary-color)] text-white" : ""
                    }`}
                  >
                    <span>{f.q}</span>
                    <FiChevronDown
                      className={`ml-4 h-5 w-5 transition-transform duration-200 ${
                        activeIndex === i ? "text-white rotate-180" : "text-black"
                      }`}
                      aria-hidden
                    />
                  </summary>
                  <div className="mt-3 px-4 text-sm text-slate-700">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
