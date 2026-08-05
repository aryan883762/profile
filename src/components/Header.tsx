import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto py-4 px-6 md:px-20 flex items-center justify-between">
        {/* Logo */}
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

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-600 text-sm">
          <a href="#home" className="hover:text-pink-500 transition">Home</a>
          <a href="#experience" className="hover:text-pink-500 transition">Experience</a>
          <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
          <a href="#skills" className="hover:text-pink-500 transition">Skills</a>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-gray-600 text-lg">
          {/* TODO: replace with your real LinkedIn URL */}
          <a
            href="https://www.linkedin.com/in/kumar-aryan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaLinkedin />
          </a>
          {/* TODO: replace with your real GitHub username */}
          <a
            href="https://github.com/kumararyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~015ed81f3311203b69"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <SiUpwork />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
