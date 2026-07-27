import type { FormEvent } from "react";

interface LeadFormProps {
  className?: string;
  idPrefix?: string;
  submitLabel?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function LeadForm({
  className = "space-y-4",
  idPrefix = "",
  submitLabel = "Submit",
  onSubmit,
}: LeadFormProps) {
  const prefix = idPrefix ? `${idPrefix}-` : "";

  return (
    <form className={className} onSubmit={onSubmit}>
      <div>
        <label htmlFor={`${prefix}lead-name`} className="sr-only">
          Your Name
        </label>
        <input
          id={`${prefix}lead-name`}
          name="name"
          type="text"
          required
          placeholder="Your Name*"
          className="w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}lead-email`} className="sr-only">
          Email Address
        </label>
        <input
          id={`${prefix}lead-email`}
          name="email"
          type="email"
          required
          placeholder="Email Address*"
          className="w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}lead-phone`} className="sr-only">
          Phone Number
        </label>
        <input
          id={`${prefix}lead-phone`}
          name="phone"
          type="tel"
          required
          placeholder="Phone No.*"
          className="w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}lead-message`} className="sr-only">
          Your Message
        </label>
        <textarea
          id={`${prefix}lead-message`}
          name="message"
          required
          rows={4}
          placeholder="Your Message*"
          className="w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--theme-primary-color)] focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-full w-full cursor-pointer bg-[var(--theme-primary-color)] animate-theme-bounce animation-delay-400 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:opacity-95"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
