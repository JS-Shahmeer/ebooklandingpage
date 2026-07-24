import Image from "next/image";

export default function PublishSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white md:pt-24 pt-20 pb-16">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              REACH READERS EVERYWHERE WITH 
              <span className="text-[var(--theme-primary-color)]"> OUR AMAZON BOOK PUBLISHING</span>
            </h2>

            <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-200">
              Have you written a book and dream of sharing it with the world? We're a reliable and
              affordable publishing company with a vast network to get your book into readers' hands
              everywhere. We offer various Book Publishing Services, including Self-Publishing on
              Amazon, Children's Book Publishing, and navigating traditional publishing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[var(--theme-primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1"
              >
                Publish My Book
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-white/5"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              aria-hidden
              className="hidden md:block relative w-[380px] max-w-[45vw] rounded-3xl bg-gradient-to-br from-slate-700 to-slate-600 p-6 shadow-2xl"
            >
              {/* Placeholder for the illustration — replace with Image when available */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-600 to-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
