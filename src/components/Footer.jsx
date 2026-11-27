import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoLight from "../assets/images/logo-mark-light.webp";
import { contact, navLinks } from "../data/site";

const Footer = () => {
  return (
    <footer className="bg-canopy-deep text-paper/75">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img src={logoLight} alt="plantED" className="h-14 w-auto" width="480" height="299" loading="lazy" />
          <p className="mt-6 max-w-sm leading-relaxed">
            Grafted seedlings, orchard design, planting and advice for avocado growers across East Africa.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="font-sans text-sm font-medium text-flesh">Pages</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-sans text-sm font-medium text-flesh">Get in touch</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 transition-colors hover:text-paper">
                <Phone size={16} className="shrink-0 text-flesh" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                <Mail size={16} className="shrink-0 text-flesh" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-paper"
              >
                <Instagram size={16} className="shrink-0 text-flesh" /> {contact.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-flesh" /> {contact.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} plantED. All rights reserved.</p>
          <p>Planted in Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
