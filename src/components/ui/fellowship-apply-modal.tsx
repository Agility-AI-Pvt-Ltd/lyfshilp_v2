"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type FellowshipApplyModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  class: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  schoolName: "",
  class: "",
};

export function FellowshipApplyModal({
  open,
  onClose,
}: FellowshipApplyModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(initialFormState);
      setError(null);
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [open]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError(null);
  };

  const handlePhoneChange = (value: string) => {
    updateField("phone", value.replace(/\D/g, "").slice(0, 10));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/fellowship-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setIsSuccess(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close application form"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="fellowship-apply-title"
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[28px] border border-[#e6e8ef] bg-[#fffaf4] shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="border-b border-[#efe7da] px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#10b981]">
                    FutureX Fellowship
                  </p>
                  <h2
                    id="fellowship-apply-title"
                    className="mt-2 text-[28px] font-black tracking-tight text-[#272835]"
                  >
                    Apply for Fellowship
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#747b8f]">
                    Share your details and our team will reach out shortly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-2 text-[#747b8f] transition-colors hover:bg-black/5 hover:text-[#272835]"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {isSuccess ? (
              <div className="px-6 py-10 text-center sm:px-8">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#10b981]/12 text-[#10b981]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-5 text-[24px] font-black text-[#272835]">
                  We&apos;ll get back to you
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#747b8f]">
                  Thanks for applying to the FutureX Fellowship. Our team will
                  contact you soon.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#10b981] px-8 text-[14px] font-black text-white transition-colors hover:bg-[#0e9f6e]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8">
                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold text-[#272835]">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="h-12 w-full rounded-2xl border border-[#e6e8ef] bg-white px-4 text-[15px] text-[#272835] outline-none transition-colors focus:border-[#10b981]"
                    placeholder="Student name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold text-[#272835]">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="h-12 w-full rounded-2xl border border-[#e6e8ef] bg-white px-4 text-[15px] text-[#272835] outline-none transition-colors focus:border-[#10b981]"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold text-[#272835]">
                    Phone number
                  </span>
                  <div className="flex h-12 overflow-hidden rounded-2xl border border-[#e6e8ef] bg-white focus-within:border-[#10b981]">
                    <span className="flex items-center border-r border-[#e6e8ef] bg-[#f8fafb] px-4 text-[15px] font-semibold text-[#272835]">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      required
                      value={form.phone}
                      onChange={(event) => handlePhoneChange(event.target.value)}
                      className="min-w-0 flex-1 bg-transparent px-4 text-[15px] text-[#272835] outline-none"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold text-[#272835]">
                    School name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.schoolName}
                    onChange={(event) =>
                      updateField("schoolName", event.target.value)
                    }
                    className="h-12 w-full rounded-2xl border border-[#e6e8ef] bg-white px-4 text-[15px] text-[#272835] outline-none transition-colors focus:border-[#10b981]"
                    placeholder="Your school"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold text-[#272835]">
                    Class
                  </span>
                  <select
                    required
                    value={form.class}
                    onChange={(event) => updateField("class", event.target.value)}
                    className="h-12 w-full rounded-2xl border border-[#e6e8ef] bg-white px-4 text-[15px] text-[#272835] outline-none transition-colors focus:border-[#10b981]"
                  >
                    <option value="" disabled>
                      Select class
                    </option>
                    {["6", "7", "8", "9", "10", "11", "12"].map((grade) => (
                      <option key={grade} value={grade}>
                        Grade {grade}
                      </option>
                    ))}
                  </select>
                </label>

                {error && (
                  <p className="rounded-2xl border border-[#ff492c]/20 bg-[#ff492c]/8 px-4 py-3 text-[14px] font-medium text-[#c53b22]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#10b981] text-[15px] font-black text-white transition-all hover:bg-[#0e9f6e] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
