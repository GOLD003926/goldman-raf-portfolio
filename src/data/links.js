// Liens de navigation affiches dans la Navbar
// "count" = petit chiffre entre crochets a cote du nom (mettez null pour ne rien afficher)
export const navLinks = [
  { name: "Work", count: "3", href: "#projects" }, // nombre reel de projets
  { name: "Service", count: "3", href: "#services" }, // nombre reel de services
  { name: "Experience", count: "L3", href: "#experience" }, // votre niveau / annees d'experience
  { name: "Contact", count: null, href: "#contact" },
];

// Reseaux sociaux : reutilises dans le Hero (colonne flottante) ET dans le Footer
// "icon" doit correspondre a une cle definie dans SocialIcon.jsx
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/VOTRE-PSEUDO", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/VOTRE-PROFIL", icon: "linkedin" },
  { name: "Email", href: "mailto:votre@email.com", icon: "email" },
];
