"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/public/images/logo.webp";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Nexell Book Writing"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 transition hover:bg-white/70 hover:text-slate-900 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-4 border-t border-slate-200 bg-[#f8f2eb] px-4 py-4 shadow-sm md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-[var(--theme-primary-color)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--theme-primary-color)] transition-transform duration-200 hover:-translate-y-1 hover:bg-[var(--theme-primary-color)] hover:text-white"
          >
            Get a Quote
          </a>
          <a
            href="tel:+13466132030"
            className="inline-flex items-center justify-center rounded-full border border-[var(--theme-primary-color)] px-6 py-3 text-sm font-semibold text-[var(--theme-primary-color)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--theme-primary-color)] hover:text-white"
          >
            Toll Free: +1 (346) 613-2030
          </a>
        </div>
      </div>
    </header>
  );
}
