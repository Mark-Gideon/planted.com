import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { contact } from "../data/site";

const CallToAction = ({
  title = "Planning a new orchard, or converting land to avocado?",
  text = "Tell us about your land and what you want to grow. We'll tell you what it will take.",
}) => {
  return (
    <section className="bg-flesh">
      <div className="container-page grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-24">
        <div className="md:col-span-8">
          <h2 className="text-3xl font-semibold text-canopy-deep sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-canopy-deep/75">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:col-span-4 md:flex-col md:items-start">
          <Link to="/contact" className="btn-primary">
            Start a conversation
          </Link>
          <a href={contact.phoneHref} className="flex items-center gap-2 font-medium text-canopy-deep hover:text-leaf">
            <Phone size={16} /> {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
