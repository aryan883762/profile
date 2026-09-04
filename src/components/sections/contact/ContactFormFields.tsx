const fieldClassName =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100";
const labelClassName = "text-xs font-bold text-slate-700";

const ContactFormFields = () => (
  <>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className={labelClassName}>
        Your name
        <input
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={80}
          required
          placeholder="Enter your name"
          className={fieldClassName}
        />
      </label>

      <label className={labelClassName}>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder="you@example.com"
          className={fieldClassName}
        />
      </label>
    </div>

    <label className="mt-5 block text-xs font-bold text-slate-700">
      Phone number
      <input
        name="phone"
        type="tel"
        autoComplete="tel"
        minLength={7}
        maxLength={30}
        required
        placeholder="Enter your contact number"
        className={fieldClassName}
      />
    </label>

    <label className="mt-5 block text-xs font-bold text-slate-700">
      Message
      <textarea
        name="message"
        rows={6}
        minLength={10}
        maxLength={2000}
        required
        placeholder="Write your message here."
        className={`${fieldClassName} resize-y`}
      />
    </label>

    <p className="mt-3 text-xs font-medium text-slate-500">
      <span className="text-purple-600" aria-hidden="true">
        *
      </span>{" "}
      All fields are required.
    </p>

    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label>
        Website
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  </>
);

export default ContactFormFields;
