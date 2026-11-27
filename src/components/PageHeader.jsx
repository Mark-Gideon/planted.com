// Shared header for the inner pages: a large title and intro, then a wide photograph.
const PageHeader = ({ title, intro, image, imageAlt, caption, position = "center" }) => {
  return (
    <section className="pt-10 md:pt-16">
      <div className="container-page grid gap-6 md:grid-cols-12 md:items-end">
        <h1 className="text-[2.75rem] font-semibold sm:text-6xl md:col-span-7 lg:text-7xl">{title}</h1>
        {intro && (
          <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-5 md:pb-2">{intro}</p>
        )}
      </div>

      {image && (
        <figure className="container-page mt-10 md:mt-14">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[16/10] w-full rounded-sm object-cover sm:aspect-[21/9]"
            style={{ objectPosition: position }}
            fetchPriority="high"
          />
          {caption && <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>}
        </figure>
      )}
    </section>
  );
};

export default PageHeader;
