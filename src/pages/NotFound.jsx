import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="container-page py-28 md:py-40">
    <h1 className="text-5xl font-semibold sm:text-6xl">This page doesn't exist</h1>
    <p className="mt-6 max-w-md text-lg text-muted">The link may be old or mistyped. Go back to the homepage to find what you need.</p>
    <Link to="/" className="btn-primary mt-10">
      Go to the homepage
    </Link>
  </section>
);

export default NotFound;
