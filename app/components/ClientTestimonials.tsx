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
      "I'd been putting off publishing for almost two years because the process felt overwhelming. They made everything simple, handled every technical step, and kept me informed throughout. Now my book is finally live on Amazon, and the entire experience was far easier than I expected.",
    author: "Emily Carter",
  },
  {
    quote:
      "I thought my manuscript was ready until Amazon rejected it multiple times. They fixed the formatting, corrected the upload issues, and explained what went wrong. Within days my book was published successfully, and the final result looked polished and completely professional.",
    author: "Jason Mitchell",
  },
  {
    quote:
      "Writing my book was only half the journey. They handled Kindle formatting, paperback setup, cover design, and every publishing detail with great care. The communication was excellent throughout, and I finally have a book I'm genuinely proud to share with readers.",
    author: "Sophia Reynolds",
  },
  {
    quote:
      "After a disappointing experience with another publisher, I was ready to give up. They redesigned my cover, reformatted the manuscript, corrected every issue, and republished everything properly. The finished book looks exactly as I imagined, and I couldn't be happier with the outcome.",
    author: "David Bennett",
  },
  {
    quote:
      "I had no idea how ISBNs, Amazon KDP, or the publishing process actually worked. Every guide I found seemed confusing. They handled everything from start to finish, answered every question clearly, and made publishing my book completely stress-free and straightforward.",
    author: "Megan Foster",
  },
  {
    quote:
      "Holding my printed book for the first time was an unforgettable experience. They managed every step that had been holding me back, from formatting to publishing, and made the entire process smooth, professional, and surprisingly enjoyable from beginning to end.",
    author: "Chris Alvarez",
  },
  {
    quote:
      "As a first-time author, I quickly realized publishing involved much more than uploading a file. They guided me through formatting, cover requirements, metadata, and every technical detail. Their expertise saved me countless hours and delivered a result beyond my expectations.",
    author: "Rachel Thompson",
  },
  {
    quote:
      "Professional, responsive, and incredibly easy to work with from start to finish. Every question was answered quickly, deadlines were met, and the entire publishing process felt effortless. My finished book looks fantastic, and I wouldn't hesitate to recommend their services to others.",
    author: "Brandon Lewis",
  },
  {
    quote:
      "I almost gave up on self-publishing because it seemed far too complicated. They handled everything from cover design to the final Amazon upload with professionalism and care. The finished book exceeded my expectations, and I'm so glad I trusted them with the process.",
    author: "Natalie Brooks",
  },
  {
    quote:
      "I spent months trying to do everything myself before realizing how much time I was wasting. They corrected mistakes, managed the publishing process, and helped launch both my ebook and paperback successfully. It was easily the best investment I made for my book.",
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
              <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-lg ring-1 ring-slate-200 md:min-h-[470px] min-h-[430px] flex flex-col justify-evenly">
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-center md:text-base text-sm md:leading-8 leading-7 text-slate-700">{item.quote}</p>
                <p className="mt-6 text-center text-lg font-semibold text-[var(--theme-primary-color)]">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
