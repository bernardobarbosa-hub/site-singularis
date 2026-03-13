import SectionHeader from "@/components/ui/SectionHeader";
import SectionWrapper from "@/components/ui/SectionWrapper";

type ServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgClass: string;
  bgImage?: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    id: "educacional",
    title: "Educacional",
    subtitle: "Intercâmbios & Estudos",
    description:
      "Programas internacionais nas melhores universidades do mundo. Foco em liderança, empreendedorismo e inovação para jovens.",
    bgClass: "bg-stone-400",
    bgImage: "/Servicos-educacional.JPG",
    href: "/servicos/educacional",
  },
  {
    id: "lazer",
    title: "Lazer de Luxo",
    subtitle: "Viagens Exclusivas",
    description:
      "Roteiros personalizados, consultores especializados e experiências únicas para os viajantes mais exigentes.",
    bgClass: "bg-neutral-800",
    bgImage: "/Lazer.jpg",
    href: "/servicos/lazer",
  },
  {
    id: "mice",
    title: "MICE",
    subtitle: "Meetings & Incentivos",
    description:
      "Planejamento completo para Meetings, Incentives, Conferences e Exhibitions em destinos nacionais e internacionais.",
    bgClass: "bg-zinc-600",
    bgImage: "/MICE.jpg",
    href: "/servicos/mice",
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "Viagens Empresariais",
    description:
      "Gestão inteligente de viagens corporativas — aéreos, hotéis, transfers e logística completa para empresas.",
    bgClass: "bg-stone-700",
    bgImage: "/CORPORATE.png",
    href: "/servicos/corporate",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-surface-warm">
      <SectionWrapper innerClassName="flex justify-center mb-16">
        <SectionHeader
          eyebrow="Nossos Serviços"
          headline="Soluções completas para cada jornada"
          subtext="Quatro setores especializados, um único compromisso: excelência no atendimento."
          align="center"
        />
      </SectionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, subtitle, description, bgClass, bgImage, href }: ServiceCard) {
  return (
    <a
      href={href}
      className="relative overflow-hidden group block h-96 lg:h-[520px]"
      aria-label={`Conhecer serviço: ${title}`}
    >
      {/* Background — scales on hover */}
      <div
        className={`absolute inset-0 ${bgClass} transition-transform duration-500 ease-out group-hover:scale-105`}
        aria-hidden="true"
      >
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/65 to-black/45 transition-all duration-300 group-hover:from-black/95"
        aria-hidden="true"
      />

      {/* Golden bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-golden scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out"
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
        <div
          className="w-5 h-5 border border-white/40 mb-4 transition-colors duration-300 group-hover:border-brand-golden/60"
          aria-hidden="true"
        />

        <p className="text-[10px] tracking-[0.25em] uppercase text-white/55 font-medium">
          {subtitle}
        </p>
        <h3 className="text-xl font-medium tracking-wide mt-1.5">{title}</h3>

        <p className="text-sm text-white/70 mt-3 leading-relaxed max-w-[220px] translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          {description}
        </p>

        <div className="flex items-center gap-2 mt-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-75">
          <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/70">
            Saiba mais
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M2 7H12M8 3L12 7L8 11"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
