import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  { value: "20+", label: "Anos de Mercado" },
  { value: "100%", label: "Atendimento Personalizado" },
  { value: "5", label: "Continentes Atendidos" },
];

export default function AboutStrip() {
  return (
    <SectionWrapper
      id="sobre"
      className="py-24 bg-white border-b border-black/6"
      innerClassName="flex flex-col items-center text-center"
    >
      {/* Eyebrow */}
      <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
        Sobre Nós
      </p>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-brand-black max-w-3xl">
        Viagens que transformam.{" "}
        <span className="italic">Momentos que ficam para sempre.</span>
      </h2>

      {/* Divider */}
      <div className="w-16 h-px bg-brand-golden mt-8 mb-12" aria-hidden="true" />

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 w-full max-w-3xl">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center ${
              i < stats.length - 1
                ? "sm:border-r sm:border-black/10"
                : ""
            }`}
          >
            <span className="text-5xl md:text-6xl font-light text-brand-earth leading-none">
              {stat.value}
            </span>
            <span className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-brand-black/50">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
