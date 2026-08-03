import React from "react";
import Logo from "@/public/images/logo.webp";
import Image from "next/image";
import CustomerReview from "@/public/images/customer-review.webp";

export default function Footer() {
  return (
    <footer className="text-slate-200 relative">
      <div className="absolute inset-0 bg-[url('/images/footer-bg.webp')] bg-cover bg-center opacity-60" />
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-10 text-center relative z-[1]">
        <Image
          src={Logo}
          alt="Logo"
          className="mx-auto h-16 md:h-24 w-auto filter brightness-0 invert"
        />

        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200">
          We help independent authors publish and market their books with honest
          guidance and real support, every step of the way.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="flex items-center justify-center">
            <Image
              src={CustomerReview}
              alt="Customer review"
              className="object-contain w-full h-10 md:h-12"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-sm">
          <p>All Rights Reserved 2026</p>
        </div>

        <div className="mt-5 text-center text-xs text-slate-200">
          <strong>Disclaimer:</strong> Nexell Book Writing is an independent
          publishing platform, committed to assisting self-reliant authors with
          ethical book publishing and marketing solutions. We operate in
          accordance with US Federal and State laws and are not affiliated with
          Amazon.com.
        </div>
      </div>
    </footer>
  );
}
