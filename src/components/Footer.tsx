import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="text-gray footer-section">
            <div className="w-full max-w-screen-xl mx-auto py-16 px-6 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left - Name or Logo */}
                    <div className="text-lg font-semibold">
                        © {new Date().getFullYear()} Kumar Aryan
                    </div>

                    {/* Right - Social Icons */}
                    <div className="flex gap-4 text-xl">
                        {/* TODO: replace with your real GitHub username */}
                        <a
                            href="https://github.com/kumararyan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition"
                        >
                            <FaGithub />
                        </a>
                        {/* TODO: replace with your real LinkedIn URL */}
                        <a
                            href="https://www.linkedin.com/in/kumar-aryan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500  transition"
                        >
                            <FaLinkedin />
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
            </div>
        </footer>
    );
};

export default Footer;
