import type { ContactFormPayload } from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s.-]{7,30}$/;

type ContactValidationResult =
  | { data: ContactFormPayload; success: true }
  | { error: string; success: false };

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const getString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export const getContactFieldErrors = (
  data: ContactFormPayload,
): ContactFieldErrors => {
  const errors: ContactFieldErrors = {};

  if (data.name.trim().length < 2 || data.name.trim().length > 80) {
    errors.name = "Enter a name between 2 and 80 characters.";
  }

  const normalizedEmail = data.email.trim().toLowerCase();
  if (normalizedEmail.length > 254 || !EMAIL_PATTERN.test(normalizedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  if (!PHONE_PATTERN.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  const messageLength = data.message.trim().length;
  if (messageLength < 10 || messageLength > 2000) {
    errors.message = "Enter a message between 10 and 2,000 characters.";
  }

  return errors;
};

export const validateContactPayload = (
  value: unknown,
): ContactValidationResult => {
  if (!isRecord(value)) {
    return { error: "Invalid contact request.", success: false };
  }

  const data: ContactFormPayload = {
    name: getString(value.name).replace(/\s+/g, " "),
    email: getString(value.email).toLowerCase(),
    phone: getString(value.phone).replace(/\s+/g, " "),
    message: getString(value.message),
    website: getString(value.website),
  };

  const fieldErrors = getContactFieldErrors(data);
  const firstError =
    fieldErrors.name ??
    fieldErrors.email ??
    fieldErrors.phone ??
    fieldErrors.message;

  if (firstError) {
    return { error: firstError, success: false };
  }

  return { data, success: true };
};
