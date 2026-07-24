"use client";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import ReviewImage from "@/public/images/review-img.webp";

const testimonials = [
  {
    quote:
      "My unique book aimed for a movie adaptation. Initially self-written, I felt something lacked. A friend recommended Nexell Book Writing. Peter Brown and team provided a perfect project plan, and I signed immediately. The process has been smooth, no regrets. Excited for the release.",
    author: "Michael",
  },
  {
    quote:
      "They crafted a well-produced audiobook based on my requests. Easy to follow and organized, it felt like reading from a book. The comforting tone and overall quality were admirable. Their work ethics and professionalism were top-notch.",
    author: "Amanda",
  },
  {
    quote:
      "Kevin Miles and the team did an excellent job editing, formatting, and publishing my book. Their patience and tenacity were exceptional. Great job, everyone—really appreciate your work. Keep it up!",
    author: "Scott",
  },
   {
    quote:
      "My unique book aimed for a movie adaptation. Initially self-written, I felt something lacked. A friend recommended Nexell Book Writing. Peter Brown and team provided a perfect project plan, and I signed immediately. The process has been smooth, no regrets. Excited for the release.",
    author: "Miller",
  },
];

export function ClientTestimonials() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold text-slate-900">Client <span className="text-[var(--theme-primary-color)]">Testimonials</span></h2>
        <p className="text-base text-slate-600">Our clients trust us with their dreams and we turn them into a solid reality. Hear it from our clients:</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Image src={ReviewImage} alt="Reviews" className="h-10 object-contain" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="py-8" key={index}>
              <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-lg ring-1 ring-slate-200 max-h-[360px] overflow-auto">
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-center text-base leading-8 text-slate-700">{item.quote}</p>
                <p className="mt-6 text-center text-lg font-semibold text-[var(--theme-primary-color)]">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
