import Image from "next/image";
import RightImage from "@/public/images/wri-edi-simg.webp";

interface PublishSectionProps {
  onPublishClick: () => void;
}

export default function PublishSection({ onPublishClick }: PublishSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white md:pt-12 pt-8 pb-10">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-[60%_40%]">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              We Treat Your Book Like It's the
              <span className="text-[var(--theme-primary-color)]">
                {" "}
                Only One We're Working On
              </span>
            </h2>

            <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-200">
              Big publishing houses aren't built for first time or independent
              authors. We are. Every manuscript gets a dedicated point of
              contact, not a rotating cast of people who've never read your
              work.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onPublishClick}
                className="inline-flex items-center justify-center rounded-full bg-[var(--theme-primary-color)] animate-theme-bounce animation-delay-150 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1"
              >
                Publish My Book
              </button>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-white/5"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            {/* Placeholder for the illustration — replace with Image when available */}
            <Image src={RightImage} alt="Illustration" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
