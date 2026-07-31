import React from "react";
import {
  FiBookOpen,
  FiGlobe,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    title: "Book Publishing, Done Right",
    icon: FiBookOpen,
    desc:
      "Whether this is your first manuscript or your fifth, getting a book into readers' hands takes more than hitting upload on a platform. We manage the details that make a book look and read like it came from a real publisher, because that's exactly what readers (and Amazon's algorithm) respond to.",
  },
  {
    title: "Self Book Publishing, Without the Guesswork",
    icon: FiGlobe,
    desc:
      "Self publishing gives you control over your work and a bigger share of your royalties, but it also means juggling editing, design, formatting and distribution on your own. We built our process specifically for independent authors who want that control without the overwhelm.",
  },
  {
    title: "Ebook Publishing That Reaches Readers Fast",
    icon: FiPackage,
    desc:
      "Ebooks are often the quickest way to get your book in front of readers, and they open the door to a global audience. We format and publish your ebook across major platforms so it looks clean on every device, from Kindle to tablets to phones.",
  },
  {
    title: "Children's Book Publishing, Built for Little Readers and Their Grown Ups",
    icon: FiTrendingUp,
    desc:
      "Children's books live and die by their illustrations and layout. We work with illustrators and designers who understand pacing, page turns and the little details that make a picture book actually work for the age group it's written for.",
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
                className="flex flex-col rounded-lg bg-white p-4 shadow-md ring-1 ring-slate-100 md:h-80"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 p-2 text-[var(--theme-primary-color)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xs font-semibold text-slate-900 text-left sm:text-sm">{s.title}</h3>
                </div>

                <div className="mt-3 flex-1 overflow-y-auto pr-2 text-xs leading-6 text-slate-700">
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
