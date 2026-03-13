import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Cinematic gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-32">
        {/* Pre-headline with flanking rules */}
        <div
          className="flex items-center gap-4 mb-8 animate-fade-up animation-delay-200"
          aria-hidden="true"
        >
          <span className="block w-12 h-px bg-white/30" />
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-white/55">
            Singularis Travel
          </span>
          <span className="block w-12 h-px bg-white/30" />
        </div>

        {/* Main headline — editorial poster style */}
        <h1 className="font-light leading-none tracking-tight text-white mb-6">
          {/* Each word on its own line for dramatic editorial effect */}
          <span
            className="block text-[clamp(3.5rem,11vw,9.5rem)] animate-fade-up animation-delay-400"
            style={{ lineHeight: 1.05 }}
          >
            Pure
            <span className="text-brand-golden">.</span>
          </span>
          <span
            className="block text-[clamp(3.5rem,11vw,9.5rem)] animate-fade-up animation-delay-600"
            style={{ lineHeight: 1.05 }}
          >
            Travel
            <span className="text-brand-golden">.</span>
          </span>
          <span
            className="block text-[clamp(3.5rem,11vw,9.5rem)] animate-fade-up animation-delay-800"
            style={{ lineHeight: 1.05 }}
          >
            Emotion
            <span className="text-brand-golden">.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg font-light text-white/75 max-w-md leading-relaxed mt-2 animate-fade-up animation-delay-1000">
          Mais de 30 anos criando experiências de viagem únicas e
          completamente personalizadas para você.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 animate-fade-up animation-delay-1000">
          <Button variant="solid" size="lg" href="#contato">
            Fale Conosco
          </Button>
          <Button variant="outline-white" size="lg" href="#servicos">
            Nossos Serviços
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 animate-nudge-down"
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-white/40"
        >
          <path
            d="M4 7L10 13L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
