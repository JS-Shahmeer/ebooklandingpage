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
      "I'd been putting off publishing for almost two years because the process seemed too complicated. They made it incredibly easy, and now my book is finally available on Amazon.",
    author: "Emily Carter",
  },
  {
    quote:
      "I thought my manuscript was ready until Amazon kept rejecting it. They fixed the formatting, uploaded everything correctly, and had my book live in no time.",
    author: "Jason Mitchell",
  },
  {
    quote:
      "Writing my book was the easy part. Figuring out Kindle formatting, paperback setup, and cover design was a completely different story. They handled every detail and kept me updated throughout the process. I finally have a book I'm genuinely proud to share.",
    author: "Sophia Reynolds",
  },
  {
    quote:
      "I had already hired someone else to publish my ebook, but the final product looked amateur and had formatting issues on multiple devices. I was frustrated and honestly ready to give up. They redesigned the cover, reformatted the manuscript, explained everything in plain English, and republished it properly. The finished book looks exactly how I imagined it, and I couldn't be happier with the result.",
    author: "David Bennett",
  },
  {
    quote:
      "I had no idea what an ISBN was or how Amazon KDP actually worked. Every guide I found online just made things more confusing. Having someone manage the entire publishing process saved me weeks of trial and error. My book was published without the stress I expected.",
    author: "Megan Foster",
  },
  {
    quote:
      "Seeing my book arrive in print for the first time was an unforgettable moment. They took care of everything that was stopping me from getting there.",
    author: "Chris Alvarez",
  },
  {
    quote:
      "As a first-time author, I assumed publishing would be as simple as uploading a file. Instead, I found myself dealing with formatting errors, cover specifications, metadata, keywords, and endless technical requirements. They guided me through every step, answered every question, and delivered a professional result that exceeded my expectations. I only wish I'd found them sooner.",
    author: "Rachel Thompson",
  },
  {
    quote:
      "Professional, responsive, and made publishing feel effortless.",
    author: "Brandon Lewis",
  },
  {
    quote:
      "I almost convinced myself that self-publishing wasn't worth the hassle. They proved me wrong. From the cover design to the final upload, everything was handled professionally, and the finished book looks incredible.",
    author: "Natalie Brooks",
  },
  {
    quote:
      "I spent months trying to learn everything myself because I wanted to save money. Looking back, I wasted far more time than I needed to. They took over the entire publishing process, corrected mistakes I didn't even know I'd made, and helped me launch both my ebook and paperback successfully. It was easily the best investment I made in my book.",
    author: "Connor Hughes",
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
