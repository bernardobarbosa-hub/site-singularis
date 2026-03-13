import SectionWrapper from "@/components/ui/SectionWrapper";

type ExperienceItem = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  imgBg: string;
  imgSrc?: string;
  reverse?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    eyebrow: "Lazer em Grupo sem Preocupação",
    title: "Group Collections — Viagens em grupo com guia brasileiro",
    body: "Saia do Brasil com tudo resolvido. Roteiro pronto, guia brasileiro do aeroporto ao destino — sem se preocupar com idioma, logística ou imprevistos. Conheça destinos incríveis, faça novas amizades e viva a viagem com total tranquilidade.",
    cta: "Conhecer estas experiências",
    ctaHref: "https://www.groupcollections.com.br",
    imgBg: "bg-neutral-700",
    imgSrc: "/groupcollections.jpg",
    reverse: false,
  },
  {
    eyebrow: "Educacional",
    title: "BCI Leaders Program — Boston & Cambridge, EUA",
    body: "2 semanas de imersão em Harvard, MIT e Bentley. Certificação internacional, monitoria 24h e apenas 90 vagas para todo o Brasil. Próxima turma: 05 a 19 de julho de 2026.",
    cta: "Conhecer esta experiência",
    ctaHref: "/servicos/educacional/bci",
    imgBg: "bg-stone-600",
    imgSrc: "/bci.JPG",
    reverse: true,
  },
];

export default function FeaturedExperience() {
  return (
    <section id="experiencias" className="py-24 bg-surface-warm">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col gap-0">
        {/* Section header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-4">
            Experiências em Destaque
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-brand-black max-w-2xl">
            Viagens que marcam para sempre
          </h2>
        </div>

        {/* Experience items */}
        <div className="flex flex-col divide-y divide-black/8">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.title} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  eyebrow,
  title,
  body,
  cta,
  ctaHref,
  imgBg,
  imgSrc,
  reverse = false,
}: ExperienceItem) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 py-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image block */}
      <div
        className={`relative ${imgBg} min-h-72 lg:min-h-[440px] overflow-hidden ${
          reverse ? "lg:order-last" : ""
        }`}
        aria-label="Imagem da experiência"
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
          aria-hidden="true"
        />
        {!imgSrc && (
          <div className="absolute bottom-5 left-5">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
              Foto em breve
            </span>
          </div>
        )}
      </div>

      {/* Text content */}
      <div
        className={`flex flex-col justify-center py-10 lg:py-0 ${
          reverse ? "lg:pr-16" : "lg:pl-16"
        }`}
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-4">
          {eyebrow}
        </p>
        <h3 className="text-2xl md:text-3xl font-light leading-tight tracking-tight text-brand-black mb-6">
          {title}
        </h3>
        <p className="text-[15px] font-light text-brand-earth leading-relaxed mb-8">
          {body}
        </p>

        {/* Link-arrow CTA */}
        <a
          href={ctaHref}
          className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-brand-black w-fit"
        >
          <span className="relative">
            {cta}
            <span
              className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-golden scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              aria-hidden="true"
            />
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
