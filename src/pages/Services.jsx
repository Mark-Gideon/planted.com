import headerImage from "../assets/images/nursery-rows.webp";
import fieldRows from "../assets/images/field-rows.webp";
import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import { services } from "../data/content";

const Services = () => {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Support for every part of an orchard, from choosing the site to selling the fruit."
        image={headerImage}
        imageAlt="Rows of grafted avocado seedlings in a shade-net nursery"
      />

      <section className="py-20 md:py-28">
        <div className="container-page">
          <ul>
            {services.map((s) => (
              <li
                key={s.title}
                className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-12"
              >
                <div className="flex items-start gap-4 md:col-span-4">
                  <s.icon className="mt-1 h-7 w-7 shrink-0 text-leaf" strokeWidth={1.6} aria-hidden="true" />
                  <h2 className="text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted md:col-span-5">{s.desc}</p>
                <ul className="space-y-2 md:col-span-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-baseline gap-3 text-ink">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-leaf" />
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <figure className="container-page pb-20 md:pb-28">
        <img
          src={fieldRows}
          alt="Young avocado trees in crates lined up across a field before planting"
          className="aspect-[16/9] w-full rounded-sm object-cover sm:aspect-[21/9]"
          loading="lazy"
        />
        <figcaption className="mt-3 text-sm text-muted">Young trees lined up across the field, ready to plant.</figcaption>
      </figure>

      <CallToAction title="Ready to get started?" text="Let's talk about what your farm needs and where we can help." />
    </>
  );
};

export default Services;
