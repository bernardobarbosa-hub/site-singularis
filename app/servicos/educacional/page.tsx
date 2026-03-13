import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Educacional — Singularis Travel",
  description:
    "Programas educacionais internacionais nas melhores universidades do mundo. Preparamos jovens para liderar o futuro.",
};

export default function EducacionalPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicePageHero
          eyebrow="Educacional"
          title="Educação que transforma. Líderes que transformam o mundo."
          breadcrumb={[
            { label: "Serviços", href: "/servicos" },
            { label: "Educacional" },
          ]}
        />

        {/* Philosophical content */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left: main text */}
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-6">
                  Nossa Visão
                </p>
                <div className="space-y-6 text-[15px] md:text-base font-light text-brand-earth leading-relaxed">
                  <p>
                    A Singularis acredita que a maior vantagem competitiva que um jovem pode ter hoje não está nas notas — está na capacidade de liderar, inovar e enxergar oportunidades onde outros veem obstáculos.
                  </p>
                  <p>
                    Desenvolvemos programas educacionais internacionais cuidadosamente selecionados, nas melhores instituições do mundo, para jovens que querem se preparar para o mercado de trabalho do futuro.
                  </p>
                  <p>
                    Cada programa é escolhido individualmente, considerando o perfil, os objetivos e o momento de vida de cada estudante. Cuidamos de cada detalhe — da seleção do programa à logística completa — para que o jovem se concentre completamente na experiência de aprendizado e transformação.
                  </p>
                </div>
              </div>

              {/* Right: pillars */}
              <div className="flex flex-col gap-10">
                {[
                  {
                    title: "Seleção individualizada",
                    body: "Nenhum programa é recomendado sem antes conhecermos profundamente o perfil e os objetivos do estudante.",
                  },
                  {
                    title: "Instituições de excelência",
                    body: "Parcerias exclusivas com as universidades e centros de pesquisa mais reconhecidos do mundo.",
                  },
                  {
                    title: "Cuidado do início ao fim",
                    body: "Da candidatura ao retorno, nossa equipe acompanha cada etapa com atenção e dedicação.",
                  },
                ].map((pillar) => (
                  <div key={pillar.title}>
                    <span className="block w-6 h-0.5 bg-brand-golden mb-4" aria-hidden="true" />
                    <h3 className="text-base font-medium text-brand-black mb-2 tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-[14px] font-light text-brand-earth leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BCI CTA block */}
        <section className="bg-brand-black py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
                  Programa em Destaque
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight max-w-xl">
                  BCI Leaders Program — Boston & Cambridge
                </h2>
                <p className="mt-4 text-[15px] font-light text-white/55 max-w-lg leading-relaxed">
                  2 semanas de imersão no maior ecossistema acadêmico do mundo. Próxima turma: 05 a 19 de julho de 2026. Apenas 90 vagas para todo o Brasil.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button variant="solid" size="lg" href="/servicos/educacional/bci">
                  Conheça o BCI Leaders Program
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
