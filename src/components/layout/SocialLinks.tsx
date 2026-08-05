import clsx from "clsx";

import type { SocialLink } from "@/types/navigation";

interface SocialLinksProps {
  className?: string;
  links: readonly SocialLink[];
}

const SocialLinks = ({ className, links }: SocialLinksProps) => (
  <div className={clsx(className)}>
    {links.map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition hover:text-pink-500"
      >
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialLinks;
