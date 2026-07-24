import React from "react";

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
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 md:grid-cols-4">
          <div className="col-span-1">
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-black/5" />
            </div>

            <div className="md:hidden mb-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/5" />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Why Choose Us As Your Book Publisher?</h2>

            <div className="mt-6 space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="overflow-hidden rounded border-t border-slate-200 py-3">
                  <summary className="cursor-pointer list-none text-lg font-medium">{f.q}</summary>
                  <div className="mt-3 text-sm text-slate-700">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
