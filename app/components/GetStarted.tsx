"use client";

import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function GetStarted() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-white p-6 shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold">Ready to Get Started?</h2>

              <p className="mt-4 max-w-xl text-slate-700">
                Let's get started on your book today! Simply reach out to us through our website or give us a
                call to schedule a consultation and discuss your project in more detail. We look forward to helping
                you turn your book writing dreams into a reality.
              </p>

              <ul className="mt-6 space-y-3 text-slate-900">
                <li className="flex items-center gap-3">
                  <FiMapPin className="h-5 w-5 text-[var(--theme-primary-color)]" aria-hidden />
                  <span>20333 State Highway 249, Houston, TX 77070</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="h-5 w-5 text-[var(--theme-primary-color)]" aria-hidden />
                  <span>info@westwoodauthors.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-5 w-5 text-[var(--theme-primary-color)]" aria-hidden />
                  <span>+1 (346) 613-2030</span>
                </li>
              </ul>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="sr-only">Name</label>
                <input
                  placeholder="Name"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  placeholder="Email address"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label className="sr-only">Phone</label>
                <input
                  placeholder="Phone"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label className="sr-only">Message</label>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div className="flex justify-start md:justify-start">
                <button className="rounded-full bg-[var(--theme-primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-lg">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
