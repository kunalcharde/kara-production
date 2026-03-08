"use client";

import { useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

declare global {
  interface Window {
    Razorpay: new (options: { key: string }) => {
      open: (options: {
        order_id: string;
        amount: number;
        currency: string;
        name: string;
        email: string;
        contact?: string;
        handler: (response: unknown) => void;
        prefill?: { name: string; email: string; contact: string };
      }) => void;
    };
  }
}

const MARITAL_OPTIONS = ["Single", "Married", "Divorced", "Widowed", "Prefer not to say"];

export function ApplyForm() {
  const searchParams = useSearchParams();
  const pageantParam = searchParams.get("pageant") || "";

  const [form, setForm] = useState({
    fullName: "",
    age: "",
    city: "",
    maritalStatus: "",
    height: "",
    contact: "",
    email: "",
    instagram: "",
    facebook: "",
    pageant: pageantParam,
  });
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "payment" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    if (!form.fullName.trim()) {
      setError("Full name is required.");
      return false;
    }
    if (!form.email.trim()) {
      setError("Email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (!form.contact.trim() || form.contact.replace(/\D/g, "").length < 10) {
      setError("Valid contact number (at least 10 digits) is required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          age: form.age,
          city: form.city,
          maritalStatus: form.maritalStatus,
          height: form.height,
          contact: form.contact,
          email: form.email,
          instagram: form.instagram || undefined,
          facebook: form.facebook || undefined,
          pageant: form.pageant || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Submission failed. Please try again.");
        setStatus("idle");
        return;
      }

      const applicationId = data.applicationId as string;
      setStatus("payment");

      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ receipt: applicationId, currency: "INR" }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok || !orderData.orderId) {
        setError(orderData.error || "Payment setup failed. Please try again.");
        setStatus("idle");
        return;
      }

      const key = orderData.key as string;
      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp = new window.Razorpay({ key });
        rzp.open({
          order_id: orderData.orderId,
          amount: orderData.amount,
          currency: orderData.currency || "INR",
          name: "KARA PRODUCTION",
          email: form.email,
          contact: form.contact,
          prefill: { name: form.fullName, email: form.email, contact: form.contact },
          handler: () => {
            setStatus("success");
          },
        });
      } else {
        setError("Payment script not loaded. Please refresh and try again.");
        setStatus("idle");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Application &amp; Payment Received
            </h2>
            <p className="text-muted font-sans max-w-xl mx-auto">
              Thank you for applying. We have received your application and payment. Our team will get in touch with you shortly.
            </p>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <Script
        id="razorpay-checkout"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <section className="py-16 sm:py-24 relative overflow-hidden" id="apply-form">
        <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeading title="Apply Now" subtitle="Pageant application" />
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
            >
              {error && (
                <p className="text-red-600 dark:text-red-400 font-sans text-sm" role="alert">
                  {error}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">Age</span>
                  <input
                    type="text"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Age"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">City</span>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="City"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Marital Status
                  </span>
                  <select
                    name="maritalStatus"
                    value={form.maritalStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select</option>
                    {MARITAL_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-foreground font-sans mb-1.5">Height</span>
                <input
                  type="text"
                  name="height"
                  value={form.height}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="e.g. 5 ft 6 in"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Contact <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="tel"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Phone number"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                  Upload Photos
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setPhotos(e.target.files)}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-accent/20 file:text-accent"
                />
                {photos?.length ? (
                  <span className="block mt-1 text-xs text-muted font-sans">
                    {photos.length} file(s) selected
                  </span>
                ) : null}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Instagram
                  </span>
                  <input
                    type="url"
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Profile URL"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Facebook
                  </span>
                  <input
                    type="url"
                    name="facebook"
                    value={form.facebook}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Profile URL"
                  />
                </label>
              </div>

              {pageantParam && (
                <input type="hidden" name="pageant" value={form.pageant} />
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={status === "submitting" || status === "payment"}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {status === "submitting"
                    ? "Submitting..."
                    : status === "payment"
                      ? "Opening payment..."
                      : "Submit & Pay"}
                </Button>
              </div>
            </form>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
