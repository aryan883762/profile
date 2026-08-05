import Image from "next/image";

import Container from "@/components/ui/Container";
import SocialLinks from "./SocialLinks";
import { headerSocialLinks, navigationLinks } from "@/constants/navigation";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur">
    <Container className="flex items-center justify-between px-6 py-4 md:px-20">
      <a
        href="#home"
        className="flex items-center gap-3 transition hover:opacity-90"
      >
        <Image
          src="/logos/aryan-logo-1.png"
          alt="Kumar Aryan"
          width={80}
          height={80}
          className="h-10 w-10"
          priority
        />
        <span className="hidden bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-xl text-transparent sm:block">
          Kumar Aryan
        </span>
      </a>

      <nav
        aria-label="Primary navigation"
        className="hidden gap-8 text-sm text-gray-600 md:flex"
      >
        {navigationLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="transition hover:text-pink-500"
          >
            {label}
          </a>
        ))}
      </nav>

      <SocialLinks
        className="flex items-center gap-4 text-lg text-gray-600"
        links={headerSocialLinks}
      />
    </Container>
  </header>
);

export default Header;
