import React from "react";

interface CTATwoProps {
  onPublishClick: () => void;
}

export default function CTATwo({ onPublishClick }: CTATwoProps) {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0 bg-[url('/images/hhm-banner2.webp')] bg-cover bg-bottom opacity-60" />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-left">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Looking to publish your book? 
              Nexell Book Writing is here to help
            </h2>

            <p className="mt-4 max-w-xl text-sm text-slate-200">
              At our Nexell Book Writing company, we offer editing, design, marketing, and distribution to create a
              high-quality book. We're an excellent choice for children's book publishing, with a wide distribution
              network and marketing support to reach your audience.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <span className="text-[var(--theme-primary-color)]">✓</span>
                Share Your Story
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--theme-primary-color)]">✓</span>
                Achieve Your Goals
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--theme-primary-color)]">✓</span>
                Establish Credibility
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--theme-primary-color)]">✓</span>
                Reach A Wider Audience
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--theme-primary-color)]">✓</span>
                Self-Publishing on Amazon
              </li>
            </ul>

            <button
              type="button"
              onClick={onPublishClick}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--theme-primary-color)] animate-theme-bounce animation-delay-200 px-6 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Publish My Book
            </button>
          </div>

          <div className="hidden md:block">
            <div className="h-96 w-full overflow-hidden rounded-lg">
              {/* Replace with your image when ready:
                  import RightImage from '@/public/images/cta-right.jpg'
                  <Image src={RightImage} alt="" className="h-full w-full object-cover" />
              */}
              <div className="h-full w-full bg-[url('/images/cta-right-placeholder.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
