"use client";
import Image from "next/image";
import CenteredImage from "@/public/images/abt-img.webp";

export default function AmazonPublishingServices() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl sm:text-5xl mb-1 font-extrabold text-[var(--theme-primary-color)]">
          Amazon Publishing Services
        </h2>
        <div className="flex justify-center">
          <div className="relative w-full sm:w-4/5">
            <div className="aspect-[10/6]">
              <Image
                src={CenteredImage}
                alt="Amazon publishing services book showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-semibold text-slate-900 mt-1">
          We offer two publishing plans to meet your needs: Standard and
          Exclusive.
        </h3>
        <div className="mt-8 text-slate-700">
          <p className="mt-2 text-sm">
            <strong>Standard Plan: </strong>
            This plan includes professional editing, cover design, formatting,
            ISBN allocation, and distribution to a major online retailer.
          </p>
          <p className="mt-2 text-sm">
            <strong>Exclusive Plan: </strong>
            Upgrade for additional services like advanced editing, premium cover
            design, marketing strategies, book launch support, and author
            branding. This plan is ideal for a variety of publishing goals,
            including Amazon book publishing, children book publishing, and
            self-publishing on Amazon.
          </p>
        </div>
      </div>
    </section>
  );
}
