import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const propositions = [
  {
    id: "curadoria",
    title: "Curadoria Exclusiva",
    body: "Cada itinerário é criado à mão para você. Nenhum roteiro é igual ao outro.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
      </svg>
    ),
  },
  {
    id: "atendimento",
    title: "Atendimento Dedicado",
    body: "Um consultor exclusivo acompanha você em cada etapa — do planejamento ao retorno.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "parceiros",
    title: "Parceiros Globais",
    body: "Rede de fornecedores premium em todos os 5 continentes, selecionados pela excelência.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "experiencia",
    title: "30+ Anos de Expertise",
    body: "Conhecimento consolidado no mercado de viagens de alto padrão, a serviço da sua experiência.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function WhySingularis() {
  return (
    <SectionWrapper
      id="por-que"
      className="py-28 bg-white"
      innerClassName="flex flex-col"
    >
      {/* Section header */}
      <div className="flex justify-center mb-20">
        <SectionHeader
          eyebrow="Por que Singularis"
          headline="O que nos torna únicos"
          align="center"
        />
      </div>

      {/* Props grid — 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
        {propositions.map((prop) => (
          <div key={prop.id} className="flex flex-col">
            {/* Golden accent line at top */}
            <span className="block w-8 h-0.5 bg-brand-golden mb-6" aria-hidden="true" />

            {/* Icon */}
            <div className="text-brand-earth mb-5 w-6 h-6">{prop.icon}</div>

            <h3 className="text-lg font-medium tracking-wide text-brand-black mb-3">
              {prop.title}
            </h3>
            <p className="text-[15px] font-light text-brand-earth leading-relaxed">
              {prop.body}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
