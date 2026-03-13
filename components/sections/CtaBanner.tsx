import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section id="contato" className="bg-brand-black py-28 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, #ffffff 60px, #ffffff 61px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-6">
          Vamos conversar
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white max-w-2xl mb-6">
          Planeje sua próxima jornada
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg font-light text-white/55 max-w-lg leading-relaxed mb-12">
          Nossa equipe está pronta para criar uma experiência única e
          completamente personalizada para você.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-white/15 mb-12" aria-hidden="true" />

        {/* CTA */}
        <Button variant="solid" size="lg" href="mailto:contato@singularistravel.com.br">
          Entre em Contato
        </Button>

        {/* Social proof line */}
        <p className="mt-8 text-[11px] font-medium tracking-[0.15em] uppercase text-white/25">
          +30 anos · Atendimento boutique · 5 continentes
        </p>
      </div>
    </section>
  );
}
