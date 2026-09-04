"use client";

import { useRef, useState, type FormEvent, type MouseEvent } from "react";
import {
  FaCopy,
  FaEnvelopeOpenText,
  FaGoogle,
  FaMicrosoft,
  FaTimes,
} from "react-icons/fa";

import ContactFormFields from "./ContactFormFields";
import { profileLinks } from "@/constants/navigation";
import { getContactFieldErrors } from "@/lib/contact-validation";
import type { ContactFormPayload } from "@/types/contact";

type EmailDraft = {
  body: string;
  gmailUrl: string;
  mailtoUrl: string;
  outlookUrl: string;
  subject: string;
  to: string;
};

const getFormPayload = (form: HTMLFormElement): ContactFormPayload => {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };
};

const getEmailDraft = (payload?: ContactFormPayload): EmailDraft => {
  const recipient = profileLinks.email.replace(/^mailto:/i, "");
  const name = payload?.name.trim() ?? "";
  const subject = name ? `Portfolio enquiry from ${name}` : "Portfolio enquiry";
  const body = [
    "Hello Kumar,",
    "",
    payload?.message.trim() ?? "",
    "",
    "Contact details",
    `Name: ${name}`,
    `Email: ${payload?.email.trim() ?? ""}`,
    `Phone: ${payload?.phone.trim() ?? ""}`,
  ].join("\n");

  const encodedRecipient = encodeURIComponent(recipient);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return {
    body,
    gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedRecipient}&su=${encodedSubject}&body=${encodedBody}`,
    mailtoUrl: `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`,
    outlookUrl: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedRecipient}&subject=${encodedSubject}&body=${encodedBody}`,
    subject,
    to: recipient,
  };
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const [emailDraft, setEmailDraft] = useState(() => getEmailDraft());
  const [copyStatus, setCopyStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showFallbackOptions, setShowFallbackOptions] = useState(false);

  const handleFormInput = (event: FormEvent<HTMLFormElement>) => {
    const payload = getFormPayload(event.currentTarget);
    setEmailDraft(getEmailDraft(payload));
    setIsFormValid(Object.keys(getContactFieldErrors(payload)).length === 0);
    setShowFallbackOptions(false);
    setCopyStatus("");
  };

  const handleReset = () => {
    formRef.current?.reset();
    setEmailDraft(getEmailDraft());
    setIsFormValid(false);
    setShowFallbackOptions(false);
    setCopyStatus("");
  };

  const launchEmailClient = () => {
    if (!isFormValid) {
      return;
    }

    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
    }

    let didOpenClient = false;

    const stopFallback = () => {
      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
      if (typeof window !== "undefined") {
        window.removeEventListener("focus", handleFocusShift);
        window.removeEventListener("blur", handleFocusShift);
      }
    };

    const handleFocusShift = () => {
      didOpenClient = true;
      setShowFallbackOptions(false);
      stopFallback();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("blur", handleFocusShift);
      window.addEventListener("focus", handleFocusShift);
    }

    fallbackTimerRef.current = window.setTimeout(() => {
      if (!didOpenClient) {
        setShowFallbackOptions(true);
      }
      stopFallback();
    }, 900);

    window.location.href = emailDraft.mailtoUrl;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;
    launchEmailClient();
  };

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isFormValid) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    launchEmailClient();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailDraft.to);
      setCopyStatus("Email address copied");
    } catch {
      setCopyStatus("Could not copy automatically. Please select and copy manually.");
    }

    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    fallbackTimerRef.current = window.setTimeout(() => {
      setCopyStatus("");
    }, 2200);
  };

  const closeFallbackDialog = () => {
    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    setShowFallbackOptions(false);
    setCopyStatus("");
  };

  return (
    <form
      ref={formRef}
      noValidate
      onInput={handleFormInput}
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-purple-400/15 backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <ContactFormFields />

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <a
          href={isFormValid ? emailDraft.mailtoUrl : undefined}
          onClick={handleLinkClick}
          aria-disabled={!isFormValid}
          tabIndex={isFormValid ? 0 : -1}
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition duration-300 ${
            isFormValid
              ? "hover:-translate-y-0.5 hover:shadow-xl"
              : "cursor-not-allowed opacity-50"
          }`}
        >
          Send Email
          <FaEnvelopeOpenText className="text-sm" />
        </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-purple-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>

        {showFallbackOptions && (
          <>
            <div
              className="fixed inset-0 z-40 bg-slate-950/65 backdrop-blur-sm rounded-[1.25rem]"
              role="presentation"
              onMouseDown={closeFallbackDialog}
            />
            <div className="fixed left-1/2 top-1/2 z-50 w-[min(84vw,28rem)] max-h-[82vh] overflow-y-auto rounded-[1.5rem] border border-white/30 bg-gradient-to-br from-white via-purple-50 to-cyan-50 p-5 shadow-2xl shadow-purple-500/30 -translate-x-1/2 -translate-y-1/2 sm:w-[min(92vw,30rem)] sm:rounded-3xl">
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-purple-700">
                    Email app not opening?
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    No problem—choose a safe browser email option below.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close email options"
                  onClick={closeFallbackDialog}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-slate-700 transition hover:bg-white"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href={emailDraft.gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Send with Gmail in a new tab"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#fef2f2] text-[#ea4335]">
                      <FaGoogle />
                    </span>
                    Send with Gmail
                  </span>
                  <FaEnvelopeOpenText className="text-xs text-slate-500" />
                </a>
                <a
                  href={emailDraft.outlookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Send with Outlook in a new tab"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#e6f2fb] text-[#0078d4]">
                      <FaMicrosoft />
                    </span>
                    Send with Outlook
                  </span>
                  <FaEnvelopeOpenText className="text-xs text-slate-500" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-100 text-purple-700">
                      <FaCopy />
                    </span>
                    Copy email address
                  </span>
                  <FaEnvelopeOpenText className="text-xs text-slate-500" />
                </button>
              </div>
              {copyStatus && (
                <p className="mt-3 rounded-xl bg-white/80 px-3 py-2 text-xs font-medium text-purple-700" role="status">
                  {copyStatus}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
