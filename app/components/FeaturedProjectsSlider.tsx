"use client";

const bookImages = [
  "001.webp",
  "002.webp",
  "003.webp",
  "004.webp",
  "005.webp",
  "006.webp",
  "007.webp",
  "008.webp",
  "009.webp",
  "010.webp",
  "011.webp",
  "012.webp",
  "013.webp",
  "014.webp",
  "016.webp",
];

const marqueeBooks = [...bookImages, ...bookImages];

export default function FeaturedProjectsSlider() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          Featured <span className="text-[var(--theme-primary-color)]">Projects</span>
        </h2>
      </div>

      <div className="mt-10 overflow-hidden px-2 sm:px-0">
        <div className="marquee-track flex w-max items-center gap-3 pl-3 sm:gap-4 sm:pl-4 lg:gap-5 lg:pl-5">
          {marqueeBooks.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="shrink-0"
              style={{ width: "min(32vw, 180px)" }}
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 sm:rounded-3xl">
                <img
                  src={`/images/books/${image}`}
                  alt={`Featured book ${index + 1}`}
                  className="h-[180px] w-full object-cover transition duration-300 hover:scale-105 sm:h-[220px] lg:h-[260px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
