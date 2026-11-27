import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import nursery from "../assets/images/nursery-shade.webp";
import { contact } from "../data/site";

// Messages are delivered by FormSubmit (https://formsubmit.co) to the address below.
// The first time the form is used, FormSubmit sends an activation email to this
// address. Click the link in it once, and every message after that arrives normally.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`;

const topics = [
  "Planting a new orchard",
  "Converting land to avocado",
  "Buying grafted seedlings",
  "Advice on an existing orchard",
  "Training or a community programme",
  "Something else",
];

const emptyForm = { name: "", email: "", phone: "", organization: "", topic: topics[0], message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Enter an email address like name@example.com.";
    if (!form.message.trim()) next.message = "Tell us a little about what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `Website enquiry: ${form.topic}`,
          _template: "table",
          _captcha: "false",
          _honey: e.target.elements._honey.value,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setForm(emptyForm);
      toast.success("Message sent. We'll reply by email or phone.");
    } catch {
      setStatus("error");
      toast.error("Your message didn't send.");
    }
  };

  return (
    <>
      <section className="pt-10 md:pt-16">
        <div className="container-page grid gap-6 md:grid-cols-12 md:items-end">
          <h1 className="text-[2.75rem] font-semibold sm:text-6xl md:col-span-7 lg:text-7xl">Talk to us</h1>
          <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-5 md:pb-2">
            Tell us about your land, your crop or your project. We'll get back to you by email or phone.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="rounded-sm bg-flesh p-8 md:p-10" role="status">
                <h2 className="text-3xl font-semibold text-canopy-deep">Message sent</h2>
                <p className="mt-4 max-w-md text-canopy-deep/80">
                  Thanks for getting in touch. We'll reply to the email address you gave us.
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-primary mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Hidden field that catches spam bots */}
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" required error={errors.name} id="name">
                    <input id="name" type="text" autoComplete="name" value={form.name} onChange={update("name")} className="field" maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  </Field>
                  <Field label="Email" required error={errors.email} id="email">
                    <input id="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} className="field" maxLength={255} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  </Field>
                  <Field label="Phone" id="phone">
                    <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} className="field" maxLength={30} />
                  </Field>
                  <Field label="Farm or organisation" id="organization">
                    <input id="organization" type="text" autoComplete="organization" value={form.organization} onChange={update("organization")} className="field" maxLength={100} />
                  </Field>
                </div>

                <Field label="What can we help with?" id="topic">
                  <div className="relative">
                    <select id="topic" value={form.topic} onChange={update("topic")} className="field appearance-none pr-11">
                      {topics.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
                  </div>
                </Field>

                <Field label="Message" required error={errors.message} id="message">
                  <textarea id="message" rows={6} value={form.message} onChange={update("message")} className="field resize-y" maxLength={2000} placeholder="For example: where the land is, how big it is, and what's on it now." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                </Field>

                {status === "error" && (
                  <p className="rounded-sm border border-murram/40 bg-murram/5 p-4 text-sm text-murram" role="alert">
                    Your message didn't send. Check your connection and try again, or email us at{" "}
                    <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>.
                  </p>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-primary disabled:cursor-wait disabled:opacity-70">
                  {status === "sending" ? "Sending…" : "Send message"} <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <ul className="divide-y divide-line border-y border-line">
              <Detail icon={Phone} label="Phone" value={contact.phone} href={contact.phoneHref} />
              <Detail icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <Detail icon={Instagram} label="Instagram" value={contact.instagramHandle} href={contact.instagram} external />
              <Detail icon={MapPin} label="Based in" value={contact.location} />
            </ul>
            <img
              src={nursery}
              alt="Avocado seedlings growing under shade net"
              className="mt-8 aspect-[4/3] w-full rounded-sm object-cover"
              loading="lazy"
            />
          </aside>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, required, error, id, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
      {label}
      {required ? <span className="text-murram"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-2 text-sm text-murram">
        {error}
      </p>
    )}
  </div>
);

const Detail = ({ icon: Icon, label, value, href, external }) => (
  <li className="flex items-start gap-4 py-5">
    <Icon size={20} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
    <div>
      <p className="text-sm text-muted">{label}</p>
      {href ? (
        <a href={href} className="font-medium text-ink hover:text-leaf" {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
          {value}
        </a>
      ) : (
        <p className="font-medium text-ink">{value}</p>
      )}
    </div>
  </li>
);

export default Contact;
