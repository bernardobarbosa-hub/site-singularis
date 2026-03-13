import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "BCI Leaders Program — Singularis Travel",
  description:
    "2 semanas de imersão em Harvard, MIT e Bentley. Próxima turma: 05 a 19 de julho de 2026. Apenas 90 vagas.",
};

const differentials = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
      </svg>
    ),
    label: "Certificação Internacional BCI",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Boston & Cambridge, EUA",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Monitoria 24h e Segurança Total",
  },
];

const dailySchedule = [
  {
    period: "Manhã",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Aulas em Harvard e Bentley",
    description:
      "Professores dessas instituições ensinando Negociação, Inteligência Artificial, Liderança e Empreendedorismo de forma prática e aplicada.",
  },
  {
    period: "Tarde",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Visitas a empresas e laboratórios",
    description:
      "Centros de pesquisa do MIT, startups de Boston e laboratórios de inovação. Aprendizado prático — não turismo passivo.",
  },
  {
    period: "Noite",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Networking e convivência",
    description:
      "Atividades esportivas, eventos culturais e convivência com outros jovens de alto potencial do Brasil e do mundo.",
  },
];

const included = [
  "Curso completo com workshops e labs",
  "Hospedagem no campus",
  "Alimentação completa",
  "Transporte exclusivo",
  "Mentoria e monitoria 24h",
  "Certificado Internacional BCI",
];

const testimonials = [
  {
    quote:
      "Além da vivência, percebo que agora ele relaciona qualquer dor do cotidiano a um potencial negócio.",
    author: "Silvânia",
    role: "Mãe do Arthur, participante 2024",
  },
  {
    quote:
      "Ela voltou com uma maturidade que eu não esperava em tão pouco tempo. Gostaria até de ter ficado mais tempo.",
    author: "Fabiana",
    role: "Mãe de participante 2024",
  },
];

export default function BCIPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — Editorial Split + Data Panel */}
        <section className="relative bg-[#080808] overflow-hidden">
          {/* Golden vertical accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-brand-golden/20"
            aria-hidden="true"
          />

          {/* Main grid */}
          <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-0 min-h-[85vh] items-center py-40 lg:py-0">

              {/* LEFT: Editorial headline */}
              <div className="flex flex-col justify-center lg:pr-16 lg:py-40 order-2 lg:order-1">
                <Breadcrumb
                  items={[
                    { label: "Serviços", href: "/servicos" },
                    { label: "Educacional", href: "/servicos/educacional" },
                    { label: "BCI Leaders Program" },
                  ]}
                  light
                  className="mb-10 opacity-40"
                />

                <p className="text-[10px] font-medium tracking-[0.45em] uppercase text-white/35 mb-7">
                  Boston Cambridge Institute
                </p>

                <h1
                  className="font-light leading-[1.0] tracking-tight text-white"
                  style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}
                >
                  O Mercado de<br />
                  Trabalho do<br />
                  Futuro<span className="text-brand-golden">.</span>
                </h1>

                <div className="w-12 h-px bg-brand-golden/50 my-8" aria-hidden="true" />

                <p className="text-[12px] font-light text-white/35 tracking-[0.2em] uppercase mb-10">
                  Harvard · MIT · Bentley · 2 semanas
                </p>

                <div>
                  <Button
                    variant="solid"
                    size="lg"
                    href="https://singulariseducation.com.br/bci-formulario/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aplicar ao Programa 2026
                  </Button>
                </div>
              </div>

              {/* RIGHT: Data panel */}
              <div className="flex flex-col justify-center lg:py-40 order-1 lg:order-2 pb-8 lg:pb-0">
                <div className="border border-white/10 divide-y divide-white/8">
                  {[
                    { label: "Próxima Turma", value: "05 – 19 Jul", sub: "2026" },
                    { label: "Local", value: "Boston &", sub: "Cambridge, EUA" },
                    { label: "Vagas", value: "90", sub: "para todo o Brasil" },
                  ].map(({ label, value, sub }) => (
                    <div key={label} className="px-8 py-7">
                      <p className="text-[9px] font-medium tracking-[0.4em] uppercase text-white/30 mb-3">
                        {label}
                      </p>
                      <p className="text-2xl md:text-3xl font-light text-white leading-tight">
                        {value}
                      </p>
                      <p className="text-[12px] font-light text-white/45 mt-1 tracking-wide">
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom strip: differentials */}
          <div className="border-t border-white/8">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {differentials.map((d, i) => (
                  <div key={d.label} className="flex items-center gap-8">
                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/40">
                      {d.label}
                    </span>
                    {i < differentials.length - 1 && (
                      <span className="text-white/15 text-sm hidden sm:inline" aria-hidden="true">·</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o programa */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
                Sobre o Programa
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-brand-black mb-6">
                Não é um curso de inglês. É uma imersão que muda perspectivas.
              </h2>
              <div className="space-y-4 text-[15px] font-light text-brand-earth leading-relaxed">
                <p>
                  O BCI Leaders Program não é um curso de inglês. É uma imersão de 2 semanas dentro do maior ecossistema acadêmico do mundo — Harvard, MIT e Bentley — conectando jovens brasileiros à inovação na prática.
                </p>
                <p>
                  Os participantes saem com uma visão de mundo ampliada, habilidades concretas e uma rede de contatos internacional que vai muito além da sala de aula.
                </p>
              </div>
            </div>
            <div className="bg-neutral-100 min-h-64 lg:min-h-80 relative overflow-hidden">
              <img
                src="/bci.JPG"
                alt="BCI Leaders Program — imersão em Boston e Cambridge"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Como são os dias */}
        <section className="py-24 bg-surface-warm">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-4">
                A Rotina
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-brand-black">
                Como são os dias
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dailySchedule.map((item) => (
                <div key={item.period} className="bg-white p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="text-brand-earth">{item.icon}</div>
                    <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-brand-earth/60">
                      {item.period}
                    </p>
                  </div>
                  <span className="block w-6 h-0.5 bg-brand-golden mb-5" aria-hidden="true" />
                  <h3 className="text-base font-medium text-brand-black mb-3 tracking-wide leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-light text-brand-earth leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Onde acontece */}
        <section className="py-20 bg-white border-y border-black/6">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-8">
              Onde acontece
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              {["Harvard University", "MIT", "Bentley University"].map((inst, i) => (
                <div key={inst} className="flex items-center gap-6 sm:gap-12">
                  <span className="text-lg md:text-xl font-light text-brand-black tracking-wide">
                    {inst}
                  </span>
                  {i < 2 && (
                    <span className="hidden sm:block text-brand-earth/30 text-lg" aria-hidden="true">
                      ·
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] font-light text-brand-earth tracking-wide">
              Boston & Cambridge, Massachusetts — EUA
            </p>
          </div>
        </section>

        {/* O que está incluído */}
        <section className="py-24 bg-surface-warm">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
                  Tudo incluso
                </p>
                <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-brand-black">
                  Você só precisa se preocupar em aprender
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5" role="list">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-brand-golden flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7L5.5 10.5L12 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[14px] font-light text-brand-earth leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth text-center mb-14">
              O que dizem as famílias
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="border border-black/8 p-10 flex flex-col"
                >
                  <span className="text-brand-golden text-3xl font-light leading-none mb-6" aria-hidden="true">
                    "
                  </span>
                  <blockquote className="text-base md:text-lg font-light text-brand-black leading-relaxed flex-1 mb-8 italic">
                    {t.quote}
                  </blockquote>
                  <div>
                    <p className="text-[13px] font-medium text-brand-black tracking-wide">
                      {t.author}
                    </p>
                    <p className="text-[11px] font-light text-brand-earth mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final — link externo */}
        <section className="bg-brand-black py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-5">
              Próxima Turma · Julho 2026
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight max-w-xl mb-4">
              Garanta sua vaga no BCI Leaders Program
            </h2>
            <p className="text-[15px] font-light text-white/50 max-w-md leading-relaxed mb-10">
              Apenas 90 vagas para todo o Brasil. Não deixe para a última hora.
            </p>
            <Button
              variant="solid"
              size="lg"
              href="https://singulariseducation.com.br/bci-formulario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aplicar ao Programa 2026
            </Button>
            <p className="mt-5 text-[11px] font-light text-white/25 tracking-wide">
              Você será redirecionado para o formulário oficial de inscrição
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
