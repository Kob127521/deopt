import Link from "next/link";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "À propos", href: "/about" },
  { label: "Prestations", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-lg tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Aurélien Photographe
            </Link>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation de pied de page">
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`${link.label} (ouvre dans un nouvel onglet)`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Aurélien Photographe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
