import { useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";
import Lightbox, { type Slide } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import SignatureStays from "/sig.png";
import MoneyManager from "/moneymanger.png";
import Yallapass from "/yallapass.png";
import Plato from "/plato.png";
import SectionHeading from "./ui/SectionHeading";

type Project = {
  title: string;
  year: string;
  role: string;
  description: string;
  image: string;
  /** Optional gallery; when present the cover opens a lightbox. */
  images?: Slide[];
  demoLinks?: { label: string; url: string }[];
  technologies?: string[];
};

// Builds an ordered lightbox gallery from a folder of numbered WebP files.
// `modules` comes from import.meta.glob (Vite rewrites the URLs to the deploy
// base path, so they resolve correctly in dev and on GitHub Pages). Files are
// sorted by their zero-padded numeric prefix and captioned by basename.
const buildGallery = (
  modules: Record<string, string>,
  label: string,
  captions: Record<string, string>,
): Slide[] =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const key = path.split("/").pop()!.replace(/\.webp$/, "");
      const caption = captions[key];
      return { src, alt: caption ? `${label} — ${caption}` : `${label} screenshot`, title: caption };
    });

const platoGallery = buildGallery(
  import.meta.glob("../assets/plato/*.webp", { eager: true, import: "default" }) as Record<string, string>,
  "Plato",
  {
    "01-dashboard": "Owner dashboard — live operations & AI insights",
    "02-storefront": "Branded online storefront & menu",
    "03-pos": "Point-of-sale — order in progress",
    "04-kitchen-display": "Kitchen display system with ticket aging",
    "05-waiter-floor": "Waiter floor — live table states",
    "06-orders-board": "All-channel orders board",
    "07-menu-engineering": "AI menu engineering — Stars / Puzzles / Plowhorses / Dogs",
    "08-inventory": "Live inventory & stock levels",
    "09-recipe-costing": "Recipe costing",
    "10-loyalty": "Loyalty program setup",
    "11-payroll": "Payroll",
    "12-accounting": "Accounting dashboard",
  },
);

const yallamedGallery = buildGallery(
  import.meta.glob("../assets/yallamed/*.webp", { eager: true, import: "default" }) as Record<string, string>,
  "YallaMed",
  {
    "01-dashboard": "Clinic analytics dashboard — revenue, appointments & trends",
    "02-patient-profile": "Patient profile — timeline, vitals & clinical scales",
    "03-icd10-diagnosis": "ICD-10 coded diagnosis autocomplete",
    "04-prescription-pdf": "Canvas prescription rendered to a branded PDF",
    "05-ms-registry": "MS registry — specialty disease history",
    "06-booking-board": "Live booking board — patient flow through the day",
    "07-calendar": "Multi-doctor scheduling calendar",
    "08-booking-requests": "Online booking requests queue",
    "09-clinic-profile": "Public branded clinic profile & booking",
    "10-inventory": "Inventory with low-stock alerts",
    "11-invoices": "Invoicing & payments (EGP)",
    "12-roles": "Granular roles & permissions",
  },
);

const projects: Project[] = [
  {
    title: "Signature Stays",
    year: "2025",
    role: "Full-Stack Developer",
    description:
      "Transforms private homes into five-star hospitality experiences — a luxury lifestyle service backed by a smart digital dashboard that gives owners full control while delivering guests a seamless stay.",
    image: SignatureStays,
    technologies: ["React", "Next.js", "Socket.io", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Yallapass",
    year: "2025",
    role: "Full-Stack Developer",
    description:
      "A studio-management platform with a credit/subscription system built on NestJS. Integrated RabbitMQ for real-time email and billing workflows; deployed on GCP with Kubernetes for auto-scaling during peak loads.",
    image: Yallapass,
    technologies: ["Next.js", "NestJS", "Socket.io", "RabbitMQ", "GCP", "MongoDB", "Docker"],
  },
  {
    title: "Money Manager",
    year: "2025",
    role: "Backend Developer",
    description:
      "A personal-finance tracker that helps users manage expenses, set budgets, and visualize spending patterns through intuitive charts and reports.",
    image: MoneyManager,
    technologies: ["NestJS", "Socket.io", "Postgres", "Docker", "TypeORM", "GCP", "RabbitMQ"],
  },
  {
    title: "Plato",
    year: "2026",
    role: "Full-Stack Developer",
    description:
      "An all-in-one restaurant operations platform — POS, kitchen display, waiter floor, inventory & recipe costing, finance/accounting, loyalty, payroll, and multi-branch management, with AI menu-engineering insights and full Arabic (RTL) support.",
    image: Plato,
    images: platoGallery,
    demoLinks: [
      { label: "Website", url: "https://www.useplato.net/ar-EG" },
      { label: "Dashboard", url: "https://app.useplato.net/admin/signin" },
    ],
    technologies: ["Next.js", "Convex", "TypeScript", "Tailwind CSS", "Recharts"],
  },
  {
    title: "YallaMed",
    year: "2026",
    role: "Full-Stack Developer",
    description:
      "A multi-branch clinic management platform for the Egyptian healthcare market — coded clinical records (ICD-10 / LOINC), canvas prescriptions rendered to branded PDFs, a specialty MS disease registry, booking & scheduling with online patient requests, inventory, EGP billing, and granular team roles, with full Arabic (RTL) support.",
    image: yallamedGallery[0].src,
    images: yallamedGallery,
    demoLinks: [{ label: "Dashboard", url: "https://yallamed.uk" }],
    technologies: ["Vue", "Express", "MongoDB", "Socket.io", "Puppeteer", "AWS S3", "Tailwind CSS"],
  },
];

const ProjectCard = ({
  title,
  year,
  role,
  description,
  image,
  images,
  demoLinks,
  technologies,
}: Project) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const hasGallery = !!images && images.length > 0;

  const cover = (
    <img
      src={image}
      alt={`${title} preview`}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:-translate-y-1">
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-secondary">
        {hasGallery ? (
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            aria-label={`View ${images.length} screenshots of ${title}`}
            className="block h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          >
            {cover}
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/15" />
            <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <Images size={13} />
              {images.length}
            </span>
          </button>
        ) : (
          cover
        )}
      </div>

      {hasGallery && (
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={images}
          plugins={[Thumbnails, Zoom, Captions]}
          captions={{ showToggle: true, descriptionTextAlign: "center" }}
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <span className="shrink-0 text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-brand">{role}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {demoLinks && demoLinks.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
            {demoLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="04 — Selected projects" title="Work" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
