import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import heroImage from "../assets/images/hero-orchard.webp";
import edward from "../assets/images/edward.webp";
import stageNursery from "../assets/images/stage-nursery.webp";
import stagePlanting from "../assets/images/stage-planting.webp";
import stageEstablish from "../assets/images/stage-establish.webp";
import stageHass from "../assets/images/stage-hass.webp";
import gFlower from "../assets/images/g-flower.webp";
import gFruitset from "../assets/images/g-fruitset.webp";
import gTrunks from "../assets/images/g-trunks.webp";
import gCut from "../assets/images/g-cut.webp";
import gAerial from "../assets/images/g-aerial.webp";
import gCrates from "../assets/images/g-crates.webp";
import CallToAction from "../components/CallToAction";
import { clients, projects, services, stats, testimonials } from "../data/content";

const stages = [
  {
    image: stageNursery,
    alt: "A grafted avocado seedling in a nursery bag under shade net",
    when: "In the nursery",
    title: "Grafted seedlings",
    text: "Hass and Fuerte trees are grafted and raised under shade net until they are strong enough for the field.",
  },
  {
    image: stagePlanting,
    alt: "A newly planted avocado tree beside a drip line in red soil",
    when: "At planting",
    title: "Layout and planting",
    text: "Trees go in at 6 × 4 m spacing with drip irrigation, on raised mounds where drainage needs it, and Napier grass windbreaks.",
  },
  {
    image: stageEstablish,
    alt: "Young avocado trees growing along drip lines",
    when: "Establishment",
    title: "Water and care",
    text: "Measured irrigation, around 20 litres per tree twice a week on our Rwanda sites, plus nutrition and disease checks.",
  },
  {
    image: stageHass,
    alt: "Hass avocados hanging on a tree",
    when: "Year two",
    title: "First fruit",
    text: "Well-established orchards can bear their first fruit two years after planting, as they did at Mutara.",
  },
];

const ease = [0.22, 1, 0.36, 1];

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Journey />
      <ServicesPreview />
      <ProjectsPreview />
      <Gallery />
      <Impact />
      <Testimonials />
      <Clients />
      <CallToAction />
    </>
  );
};

/* ---------- Hero ---------- */

const Hero = () => (
  <section className="relative isolate flex min-h-[calc(100svh-72px)] items-end overflow-hidden bg-canopy-deep">
    <motion.img
      src={heroImage}
      alt="Rows of mature avocado trees running toward distant hills"
      className="absolute inset-0 -z-10 h-full w-full object-cover"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.2, ease }}
      fetchPriority="high"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-canopy-deep via-canopy-deep/55 to-canopy-deep/10" />

    <div className="container-page pb-14 pt-32 md:pb-20">
      <motion.h1
        className="max-w-4xl text-[2.6rem] font-semibold leading-[1.05] text-paper sm:text-6xl lg:text-[5.25rem]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
      >
        Avocado orchards, planned and planted to last.
      </motion.h1>

      <motion.div
        className="mt-8 grid gap-8 md:grid-cols-12 md:items-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease }}
      >
        <p className="max-w-xl text-lg leading-relaxed text-paper/85 md:col-span-7">
          plantED raises grafted seedlings, designs orchards and manages planting for estates and farmers across
          Kenya, Rwanda, Tanzania and Uganda.
        </p>
        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <Link to="/projects" className="btn-light">
            See our projects
          </Link>
          <Link to="/contact" className="btn-ghost-light">
            Talk to Edward
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------- Intro / about preview ---------- */

const Intro = () => (
  <section className="py-20 md:py-28">
    <div className="container-page grid gap-12 md:grid-cols-12 md:items-center">
      <div className="md:col-span-7">
        <p className="font-display text-2xl leading-snug text-ink sm:text-3xl lg:text-[2.35rem] lg:leading-[1.25]">
          We started plantED in 2015 to put modern orchard practice in the hands of the farmers who need it, from
          smallholders to large estates.
        </p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          We work alongside growers to get the most from their land while keeping it healthy for the next
          generation. That means good trees from the nursery, a layout that suits the site, and advice that holds
          up season after season.
        </p>
        <Link to="/about" className="link-underline mt-6 inline-flex items-center gap-2">
          Read our story <ArrowRight size={16} />
        </Link>
      </div>

      <figure className="md:col-span-4 md:col-start-9">
        <img
          src={edward}
          alt="Edward Agg-Manning standing among young avocado trees in a nursery"
          className="aspect-[4/5] w-full rounded-sm object-cover"
          loading="lazy"
        />
        <figcaption className="mt-3 text-sm text-muted">
          Edward Agg-Manning, founder, in one of our nurseries.
        </figcaption>
      </figure>
    </div>
  </section>
);

/* ---------- Seedling to harvest (the signature section) ---------- */

const Journey = () => (
  <section className="bg-canopy py-20 text-paper md:py-28">
    <div className="container-page">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 className="text-4xl font-semibold text-paper sm:text-5xl md:col-span-7">From grafted seedling to first harvest</h2>
        <p className="max-w-md text-lg text-paper/75 md:col-span-5">
          We can take an orchard through every stage, or step in where you need us.
        </p>
      </div>

      {/* The line reads as a planting row, with a tree mark at each stage */}
      <ol className="relative mt-14 grid gap-12 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-paper/25 md:mt-20 md:grid-cols-4 md:gap-6 md:before:inset-x-0 md:before:bottom-auto md:before:top-[7px] md:before:h-px md:before:w-auto">

        {stages.map((s, i) => (
          <li key={s.title} className="relative pl-10 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-flesh ring-4 ring-canopy z-10 md:relative"
            />
            <p className="text-sm font-medium text-flesh md:mt-6">
              <span className="sr-only">Stage {i + 1}: </span>
              {s.when}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-paper">{s.title}</h3>
            <img
              src={s.image}
              alt={s.alt}
              className="mt-5 aspect-[4/5] w-full rounded-sm object-cover"
              loading="lazy"
            />
            <p className="mt-5 leading-relaxed text-paper/75">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* ---------- Services ---------- */

const ServicesPreview = () => (
  <section className="py-20 md:py-28">
    <div className="container-page grid gap-12 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <h2 className="text-4xl font-semibold sm:text-5xl">What we do</h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            Advice, management, training and market links for farms of every size.
          </p>
          <Link to="/services" className="link-underline mt-6 inline-flex items-center gap-2">
            All services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <ul className="md:col-span-8">
        {services.map((s) => (
          <li key={s.title} className="grid gap-3 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[auto_1fr] sm:gap-6 md:first:pt-2">
            <s.icon className="h-6 w-6 text-leaf" strokeWidth={1.6} aria-hidden="true" />
            <div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* ---------- Projects ---------- */

const ProjectsPreview = () => {
  const [lead, ...rest] = projects;
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl font-semibold sm:text-5xl">Recent projects</h2>
          <Link to="/projects" className="link-underline inline-flex items-center gap-2">
            All projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <ProjectCard project={lead} large className="md:col-span-7" />
          <div className="grid gap-10 md:col-span-5 md:gap-8">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, large = false, className = "" }) => (
  <Link to={`/projects#${project.slug}`} className={`group block ${className}`}>
    <div className="overflow-hidden rounded-sm">
      <img
        src={project.image}
        alt={project.imageAlt}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
          large ? "aspect-[4/3] md:aspect-[5/4]" : "aspect-[16/9]"
        }`}
        loading="lazy"
      />
    </div>
    <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
      <MapPin size={14} className="text-murram" aria-hidden="true" /> {project.location}
    </p>
    <h3 className={`mt-1 font-semibold group-hover:text-leaf ${large ? "text-3xl" : "text-xl"}`}>{project.title}</h3>
    {large && <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.impact}</p>}
  </Link>
);

/* ---------- Gallery ---------- */

const gallery = [
  { src: gAerial, w: 896, h: 883, alt: "An avocado orchard block seen from the air", caption: "An orchard block from the air." },
  { src: gFlower, w: 960, h: 1280, alt: "A bee on avocado flowers", caption: "A bee at work. Good pollination sets the crop." },
  { src: gFruitset, w: 1400, h: 1050, alt: "Clusters of young Hass avocados on the tree", caption: "Hass fruit sizing up on the tree." },
  { src: gCut, w: 1100, h: 1467, alt: "A ripe Hass avocado cut in half", caption: "A ripe Hass, ready to eat." },
  { src: gTrunks, w: 1280, h: 960, alt: "Whitewashed avocado trunks with drip irrigation lines", caption: "Whitewashed trunks guard young bark from sun; drip lines water every tree." },
  { src: gCrates, w: 1100, h: 1467, alt: "Stacks of green field crates in a packhouse", caption: "Field crates stacked in the packhouse before harvest." },
];

const Gallery = () => (
  <section className="bg-flesh/40 py-20 md:py-28">
    <div className="container-page">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 className="text-4xl font-semibold sm:text-5xl md:col-span-7">In the orchard</h2>
        <p className="max-w-md text-lg text-muted md:col-span-5">
          A season on the farms we look after, from flower to packhouse.
        </p>
      </div>
      <div className="mt-12 gap-6 sm:columns-2 lg:columns-3">
        {gallery.map((g) => (
          <figure key={g.caption} className="mb-8 break-inside-avoid">
            <img src={g.src} alt={g.alt} width={g.w} height={g.h} className="h-auto w-full rounded-sm" loading="lazy" />
            <figcaption className="mt-3 text-sm text-muted">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Impact numbers ---------- */

const Impact = () => (
  <section className="bg-canopy-deep py-20 text-paper md:py-24">
    <div className="container-page">
      <h2 className="max-w-2xl text-3xl font-semibold text-paper sm:text-4xl">Our work so far</h2>
      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col border-t border-paper/20 pt-5">
            <dt className="order-2 mt-2 text-paper/70">{s.label}</dt>
            <dd className="order-1 font-display text-4xl font-semibold text-flesh sm:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

/* ---------- Testimonials ---------- */

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (step) => setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-12">
        <h2 className="text-sm font-medium text-leaf md:col-span-3 md:pt-3 font-sans">What people say</h2>

        <div className="md:col-span-9">
          <div className="min-h-[15rem] sm:min-h-[13rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="font-display text-2xl leading-snug text-ink sm:text-3xl lg:text-4xl lg:leading-tight">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-medium text-ink">{t.name}</span>
                  <span className="text-muted">, {t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-canopy transition-colors hover:border-canopy"
              aria-label="Previous quote"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-canopy transition-colors hover:border-canopy"
              aria-label="Next quote"
            >
              <ArrowRight size={18} />
            </button>
            <p className="ml-2 text-sm text-muted">
              {index + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Clients ---------- */

const Clients = () => (
  <section className="border-t border-line py-20 md:py-24">
    <div className="container-page grid gap-10 md:grid-cols-12">
      <h2 className="text-3xl font-semibold md:col-span-4">Farms and companies we've worked with</h2>
      <ul className="flex flex-wrap gap-x-8 gap-y-4 md:col-span-8">
        {clients.map((name) => (
          <li key={name} className="font-display text-xl text-canopy/80">
            {name}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Home;
