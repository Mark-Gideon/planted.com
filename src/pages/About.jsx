import { Award, Leaf, Lightbulb, Users } from "lucide-react";
import headerImage from "../assets/images/mature-rows.webp";
import team from "../assets/images/team.webp";
import edwardNursery from "../assets/images/edward-nursery.webp";
import edward from "../assets/images/edward.webp";
import walk from "../assets/images/walk.webp";
import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Every decision puts the long-term health of the land and careful use of resources first.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We use new technology and fresh thinking where they solve a real problem on the farm.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Our work is built on partnership with the farming communities we serve.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "We hold a high standard in everything, from the advice we give to the fruit that leaves the farm.",
  },
];

const About = () => {
  return (
    <>
      <PageHeader
        title="About plantED"
        intro="Our story, what we believe, and the people doing the work."
        image={headerImage}
        imageAlt="Rows of mature avocado trees over red mulch"
        position="center 60%"
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <h2 className="text-4xl font-semibold sm:text-5xl">From the seed of an idea to a growing movement</h2>
            <p className="mt-6 leading-relaxed text-muted">
              plantED began in 2015, when a group of agricultural scientists and community advocates saw how wide the
              gap had grown between modern farming practice and smallholder farmers. What started as a small
              consultancy has become a full agricultural services company.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Today we work with farmers in several countries, helping them adopt sustainable practices, use better
              technology and reach bigger markets for what they grow.
            </p>
          </div>
          <figure className="md:col-span-5 md:col-start-8">
            <img src={team} alt="Three members of the plantED team laughing in a nursery" className="aspect-[3/2] w-full rounded-sm object-cover" loading="lazy" />
            <figcaption className="mt-3 text-sm text-muted">The team at work in the nursery.</figcaption>
          </figure>
        </div>
      </section>

      {/* Roots of change */}
      <section className="bg-canopy py-20 text-paper md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={walk} alt="Two people walking between rows of mature avocado trees" className="aspect-[4/5] w-full rounded-sm object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="text-4xl font-semibold text-paper sm:text-5xl">Roots of change</h2>
            <p className="mt-8 font-display text-2xl leading-snug text-flesh">
              This was never only about farming. It was about a future where progress is shared, and every success
              inspires the next.
            </p>
            <p className="mt-8 leading-relaxed text-paper/75">
              In farming communities where opportunity once felt limited, a new kind of growth began, in the fields
              and in people's lives. With better knowledge, better techniques and a shared goal, families saw real
              change. Yields went up, incomes steadied, and for the first time in years people felt in control of
              their future.
            </p>
            <p className="mt-4 leading-relaxed text-paper/75">
              At the heart of it were the people: farmers, trainers and leaders who believed in doing things
              differently. Communities grew closer and shared resources and hope. Children stayed in school,
              households became more secure and local economies grew stronger.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="border-t-2 border-canopy pt-6">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              To give farming communities sustainable solutions, useful technology and thorough training that secure
              their food and income for generations.
            </p>
          </div>
          <div className="border-t-2 border-canopy pt-6">
            <h2 className="text-3xl font-semibold">Our vision</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A world where every farmer has the tools, knowledge and markets to thrive, and where farming drives
              economic growth while protecting the planet's resources.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-flesh/50 py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-4xl font-semibold sm:text-5xl">What drives us</h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map((v) => (
              <li key={v.title}>
                <v.icon className="h-7 w-7 text-leaf" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12 md:items-center">
          <div className="grid grid-cols-2 gap-4 md:col-span-6">
            <img src={edward} alt="Edward Agg-Manning in a plantED nursery" className="aspect-[3/4] w-full rounded-sm object-cover" loading="lazy" />
            <img src={edwardNursery} alt="Edward Agg-Manning among young avocado trees" className="mt-12 aspect-[3/4] w-full rounded-sm object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-sm font-medium text-leaf">Founder and CEO</p>
            <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">Edward Agg&#8209;Manning</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              An agricultural scientist with 20 years of experience in sustainable farming. Edward leads plantED's
              nursery, orchard and advisory work across East Africa.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
