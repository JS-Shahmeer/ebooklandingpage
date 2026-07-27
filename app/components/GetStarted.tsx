"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import LeadForm from "./LeadForm";

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
                <li className="flex md:items-center md:justify-start justify-center gap-3">
                  <FiMapPin className="h-5 w-5 text-[var(--theme-primary-color)]" aria-hidden />
                  <span className="text-sm">20333 State Highway 249, Houston, TX 77070</span>
                </li>
                <li className="flex md:items-center md:justify-start justify-center gap-3">
                  <FiMail className="h-5 w-5 text-[var(--theme-primary-color)]" aria-hidden />
                  <span className="text-sm">info@westwoodauthors.com</span>
                </li>
                <li className="flex md:items-center md:justify-start justify-center gap-3">
                  <FiPhone className="h-5 w-5 text-[var(--theme-primary-color)]" aria-hidden />
                  <span className="text-sm">+1 (346) 613-2030</span>
                </li>
              </ul>
            </div>

            <LeadForm onSubmit={(e) => e.preventDefault()} submitLabel="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}
