import { socialLinks } from "../data/links";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center lg:text-left text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.95] mb-10 lg:mb-16">
          <span className="text-outline">GOLDMAN</span> <span className="text-primary-900">R.</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left lg:pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-3">Developpeur Software</h2>
            <p className="text-primary-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8">
              Etudiant en informatique passionne par le developpement logiciel, la creation d'applications et de projets web concrets.
            </p>
            <button
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-primary-900 text-white rounded-full text-sm sm:text-base font-medium hover:bg-primary-800 transition-all hover:scale-105"
            >
              Let's collaborate
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] animate-slide-up">
              <img src="/moi.png" alt="Portrait" className="w-full h-full object-cover grayscale" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-300/30 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-primary-50 hover:bg-primary-100 rounded-full text-sm font-medium text-primary-700 transition-all hover:scale-105 shadow-sm"
          >
            <SocialIcon name={social.icon} className="w-4 h-4" />
            {social.name}
          </a>
        ))}
      </div>

      <div className="xl:hidden flex justify-center gap-3 mt-10 px-4 flex-wrap">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex items-center gap-2 px-4 py-2 bg-primary-50 hover:bg-primary-100 rounded-full text-xs font-medium text-primary-700 transition-all"
          >
            <SocialIcon name={social.icon} className="w-4 h-4" />
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
