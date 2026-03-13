import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";

export const metadata: Metadata = {
  title: "Serviços — Singularis Travel",
  description:
    "Quatro setores especializados: Educacional, Lazer de Luxo, MICE e Corporate. Um único compromisso: excelência.",
};

const services = [
  {
    id: "educacional",
    title: "Educacional",
    subtitle: "Intercâmbios & Estudos",
    description:
      "Programas internacionais nas melhores universidades do mundo. Preparamos jovens para o mercado do futuro com foco em liderança, empreendedorismo e inovação.",
    href: "/servicos/educacional",
    bgClass: "bg-stone-400",
  },
  {
    id: "lazer",
    title: "Lazer de Luxo",
    subtitle: "Viagens Exclusivas",
    description:
      "Roteiros 100% personalizados, criados à mão para você. Consultores especializados com mais de 30 anos de experiência a serviço da sua experiência.",
    href: "/servicos/lazer",
    bgClass: "bg-neutral-800",
  },
  {
    id: "mice",
    title: "MICE",
    subtitle: "Meetings & Incentivos",
    description:
      "Do briefing ao relatório de ROI. Planejamento completo para Meetings, Incentives, Conferences e Exhibitions com equipe dedicada.",
    href: "/servicos/mice",
    bgClass: "bg-zinc-600",
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "Viagens Empresariais",
    description:
      "Consultor dedicado por empresa, disponível 24/7. Aéreos, hotéis, transfers, vistos e logística completa para que seus executivos viajem sem preocupações.",
    href: "/servicos/corporate",
    bgClass: "bg-stone-700",
  },
];

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicePageHero
          eyebrow="Singularis Travel"
          title="Soluções para cada jornada"
          subtitle="Quatro setores especializados, um único compromisso: excelência no atendimento."
          breadcrumb={[{ label: "Serviços" }]}
        />

        {/* Services grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/6">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className="group relative overflow-hidden bg-white p-10 lg:p-14 block hover:bg-surface-warm transition-colors duration-300"
                  aria-label={`Conhecer ${service.title}`}
                >
                  {/* Golden accent */}
                  <span
                    className="block w-8 h-0.5 bg-brand-golden mb-8"
                    aria-hidden="true"
                  />

                  <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-brand-earth mb-3">
                    {service.subtitle}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light text-brand-black tracking-tight mb-5">
                    {service.title}
                  </h2>
                  <p className="text-[15px] font-light text-brand-earth leading-relaxed mb-8 max-w-sm">
                    {service.description}
                  </p>

                  {/* CTA arrow */}
                  <div className="flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase text-brand-black">
                    <span className="relative">
                      Conhecer serviço
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-golden scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7H12M8 3L12 7L8 11"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
