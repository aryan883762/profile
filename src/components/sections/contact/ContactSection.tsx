import { FaCheck, FaEnvelopeOpenText, FaShieldAlt } from "react-icons/fa";

import Container from "@/components/ui/Container";
import ContactForm from "./ContactForm";
import performanceStyles from "@/styles/performance.module.css";

const collaborationPoints = [
  "Client and company enquiries",
  "Developer collaboration",
  "Freelance and contract opportunities",
  "Technical conversations and partnerships",
] as const;

const ContactSection = () => (
  <section
    id="contact"
    className={`${performanceStyles.deferredSection} relative scroll-mt-[72px] overflow-hidden bg-gradient-to-br from-white via-purple-50/70 to-cyan-50`}
  >
    <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
    <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

    <Container className="relative z-10 px-6 py-20 md:px-12 lg:px-20 lg:py-24">
      <header className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md">
          <FaEnvelopeOpenText />
          Contact
        </div>
        <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          Let&apos;s start a{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            conversation
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Clients, developers, companies, agencies, and product teams can
          prepare a ready-to-send message in their preferred mail client.
        </p>
      </header>

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <aside
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 p-7 text-white shadow-2xl shadow-purple-500/20 sm:p-8"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative flex h-full flex-col">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-xl backdrop-blur-md">
              <FaEnvelopeOpenText />
            </span>
            <h3 className="mt-7 text-2xl font-extrabold leading-tight sm:text-3xl">
              An easy way to reach me directly.
            </h3>
            <p className="mt-4 text-sm leading-6 text-purple-100">
              Fill in the form to open an email draft for collaboration,
              opportunities, technical discussions, or professional enquiries.
            </p>

            <ul className="mt-7 space-y-3">
              {collaborationPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-[8px]">
                    <FaCheck />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-2 pt-8 text-xs font-medium text-purple-100">
              <FaShieldAlt />
              Your contact details are used only to respond to this enquiry.
            </div>
          </div>
        </aside>

        <div data-aos="fade-left" data-aos-duration="900">
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
);

export default ContactSection;
