import Container from "@/components/ui/Container";
import SocialLinks from "./SocialLinks";
import { footerSocialLinks } from "@/constants/navigation";

const Footer = () => (
  <footer className="border-b-[10px] border-solid border-pink-400 bg-white text-gray">
    <Container className="px-6 py-16 md:px-20">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Kumar Aryan
        </div>
        <SocialLinks
          className="flex gap-4 text-xl"
          links={footerSocialLinks}
        />
      </div>
    </Container>
  </footer>
);

export default Footer;
