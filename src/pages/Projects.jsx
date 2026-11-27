import { MapPin } from "lucide-react";
import headerImage from "../assets/images/orchard-panorama.webp";
import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import { projects } from "../data/content";

const Projects = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        intro="Orchards we have planned, planted and advised on in Kenya and Rwanda."
        image={headerImage}
        imageAlt="A large avocado orchard stretching to the horizon"
        position="center 60%"
      />

      <div className="py-20 md:py-28">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="scroll-mt-24 border-t border-line py-16 first:border-t-0 first:pt-0 md:py-24"
          >
            <div className="container-page grid gap-10 md:grid-cols-12 md:gap-12">
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="aspect-[4/3] w-full rounded-sm object-cover md:sticky md:top-28"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} className="text-murram" aria-hidden="true" /> {p.location}
                </p>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{p.title}</h2>
                <p className="mt-6 font-display text-xl leading-snug text-leaf">{p.impact}</p>
                <p className="mt-5 leading-relaxed text-muted">{p.summary}</p>

                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                  {p.results.map((r) => (
                    <div key={r.figure} className="flex flex-col border-t border-line pt-4">
                      <dt className="order-2 mt-1 text-sm leading-snug text-muted">{r.text}</dt>
                      <dd className="order-1 font-display text-2xl font-semibold text-canopy sm:text-3xl">{r.figure}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CallToAction title="Want to create impact together?" text="Tell us about your land or your programme and we'll take it from there." />
    </>
  );
};

export default Projects;
