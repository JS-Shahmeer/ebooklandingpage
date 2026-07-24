import React from "react";
import Logo from "@/public/images/logo.webp";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <Image src={Logo} alt="Logo" className="mx-auto h-16 md:h-24 w-auto filter brightness-0 invert" />

        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300">
          Calling all independent authors! Nexell Book Writing empowers you to self-publish and market your book on
          Amazon. We're committed to ethical practices and provide well-researched information. Let's turn your writing
          dream into a reality—contact us today!
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="h-12 w-24 rounded bg-white/5" />
          <div className="h-12 w-24 rounded bg-white/5" />
          <div className="h-12 w-24 rounded bg-white/5" />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-sm">
          <div className="flex gap-6">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms & Conditions
            </a>
          </div>

          <p>All Rights Reserved 2026</p>
        </div>

        <div className="mt-5 text-center text-xs text-slate-400">
          <strong>Disclaimer:</strong> Nexell Book Writing is an independent publishing platform, committed to assisting
          self-reliant authors with ethical book publishing and marketing solutions. We operate in accordance with US
          Federal and State laws and are not affiliated with Amazon.com.
        </div>
      </div>
    </footer>
  );
}
