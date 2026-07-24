"use client";

import React, { useState } from "react";

const categories = [
  "Biography",
  "Fiction",
  "Horror",
  "Mystery",
  "Action",
  "Autobiography",
  "Children",
  "Biblical",
  "Self Help",
];

const categoryImages: Record<string, string[]> = {
  Biography: [
    "https://westwoodauthors.com/audiobook-narration/images/bio-1.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bio-2.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bio-3.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bio-4.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bio-5.webp",
  ],
  Fiction: [
    "https://westwoodauthors.com/audiobook-narration/images/fic_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/fic_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/fic_3.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/fic_4.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/fic_5.jpg",
  ],
  Horror: [
    "https://westwoodauthors.com/audiobook-narration/images/hor_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/hor_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/hor_3.webp",
    "https://westwoodauthors.com/audiobook-narration/images/hor_4.webp",
    "https://westwoodauthors.com/audiobook-narration/images/hor_5.webp",
  ],
  Mystery: [
    "https://westwoodauthors.com/audiobook-narration/images/my_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/my_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/my_3.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/my_4.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/my_5.jpg",
  ],
  Action: [
    "https://westwoodauthors.com/audiobook-narration/images/act_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/act_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/act_3.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/act_4.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/act_5.jpg",
  ],
  Autobiography: [
    "https://westwoodauthors.com/audiobook-narration/images/aut_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/aut_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/aut_3.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/aut_4.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/aut_5.jpg",
  ],
  Children: [
    "https://westwoodauthors.com/audiobook-narration/images/child_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/child_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/child_3.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/child_4.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/child_5.jpg",
  ],
  Biblical: [
    "https://westwoodauthors.com/audiobook-narration/images/bil_1.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bil_2.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bil_3.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bil_4.webp",
    "https://westwoodauthors.com/audiobook-narration/images/bil_5.webp",
  ],
  "Self Help": [
    "https://westwoodauthors.com/audiobook-narration/images/self_1.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/self_2.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/self_3.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/self_4.jpg",
    "https://westwoodauthors.com/audiobook-narration/images/self_5.jpg",
  ],
};

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeCategory = categories[active];
  const visible = categoryImages[activeCategory] || [];

  const handleTabClick = (idx: number) => {
    if (idx === selected) return;
    setSelected(idx);
    setIsTransitioning(true);
    window.setTimeout(() => {
      setActive(idx);
      setIsTransitioning(false);
    }, 180);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
        Featured <span className="text-[var(--theme-primary-color)]">Projects</span>
      </h2>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {categories.map((c, idx) => (
          <button
            key={c}
            onClick={() => handleTabClick(idx)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-transform duration-200 ${
              idx === active
                ? "bg-[var(--theme-primary-color)] text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:-translate-y-0.5"
            } focus:outline-none`}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        className={`mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-40" : "opacity-100"
        }`}
      >
        {visible.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200">
            <img
              src={src}
              alt={`${activeCategory} cover ${idx + 1}`}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
