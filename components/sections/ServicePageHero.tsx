import Breadcrumb from "@/components/ui/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServicePageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: BreadcrumbItem[];
  /** Dark variant: dark bg with white text (e.g. BCI hero) */
  dark?: boolean;
}

export default function ServicePageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  dark = false,
}: ServicePageHeroProps) {
  if (dark) {
    return (
      <section className="relative bg-neutral-900 pt-40 pb-24 overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <Breadcrumb items={breadcrumb} light className="mb-10" />
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-5">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base md:text-lg font-light text-white/55 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pt-40 pb-20 border-b border-black/6">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <Breadcrumb items={breadcrumb} className="mb-10" />
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-brand-black max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg font-light text-brand-earth max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {/* Golden accent line */}
        <div className="w-16 h-px bg-brand-golden mt-10" aria-hidden="true" />
      </div>
    </section>
  );
}
