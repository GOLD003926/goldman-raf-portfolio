import { socialLinks } from "../data/links";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-900 mb-2">Goldman R.</h3>
            <p className="text-primary-600">Etudiant en informatique et developpeur</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-900 transition-colors"
                aria-label={link.name}
              >
                <SocialIcon name={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-200 text-center">
          <p className="text-primary-500 text-sm">© {currentYear} Goldman R. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
