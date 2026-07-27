import type { FormEvent } from "react";
import LeadForm from "./LeadForm";
import { CgClose } from "react-icons/cg";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ContactModal({ isOpen, onClose, onSubmit }: ContactModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 sm:px-6">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white px-6 shadow-2xl sm:px-8 py-4 md:py-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--theme-primary-color)]/80 hover:bg-[var(--theme-primary-color)] cursor-pointer text-white shadow-lg transition"
          aria-label="Close modal"
        >
          <CgClose />
        </button>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--theme-primary-color)]">
            Special Offer
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Avail Up to 50% Discount on Book Publishing Service
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Complete the form below and our team will contact you to discuss your project and claim your discount.
          </p>
        </div>

        <div className="mt-8">
          <LeadForm idPrefix="modal" onSubmit={onSubmit} submitLabel="Submit" />
        </div>
      </div>
    </div>
  );
}
