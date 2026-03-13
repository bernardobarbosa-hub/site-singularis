"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Button from "@/components/ui/Button";
import FormModal from "@/components/modals/FormModal";
import MiceForm from "@/components/modals/MiceForm";

const timelineSteps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Definição de objetivos, entendimento da audiência e alinhamento do ROI pretendido para o evento.",
  },
  {
    number: "02",
    title: "Estratégia & Planejamento",
    description:
      "Conceituação e temática do evento, cronograma detalhado e gerenciamento orçamentário completo.",
  },
  {
    number: "03",
    title: "Negociações",
    description:
      "Seleção e contratação de fornecedores estratégicos com foco em redução de custos sem perda de qualidade.",
  },
  {
    number: "04",
    title: "Comunicação & Marketing",
    description:
      "Desenvolvimento de mensagem estratégica, campanhas de engajamento e registro completo de convidados.",
  },
  {
    number: "05",
    title: "Operação",
    description:
      "Execução impecável do evento ou viagem com nossa equipe presente em cada momento.",
  },
  {
    number: "06",
    title: "ROI & Resultados",
    description:
      "Pesquisa pós-evento, relatórios de engajamento e análise detalhada dos objetivos atingidos.",
  },
];

export default function MicePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <ServicePageHero
          eyebrow="MICE"
          title="Eventos corporativos que se tornam experiências memoráveis."
          subtitle="Do briefing ao relatório de ROI — com uma equipe dedicada em cada etapa."
          breadcrumb={[
            { label: "Serviços", href: "/servicos" },
            { label: "MICE" },
          ]}
        />

        {/* Intro */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 max-w-3xl">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
              Nossa Abordagem
            </p>
            <div className="space-y-5 text-[15px] md:text-base font-light text-brand-earth leading-relaxed">
              <p>
                A Singularis transforma eventos corporativos em experiências memoráveis. Cuidamos de todo o processo — do briefing inicial à mensuração de resultados — com uma equipe dedicada que entende que cada evento tem objetivos únicos e merece uma solução sob medida.
              </p>
              <p>
                Meetings, Incentives, Conferences e Exhibitions. Cada formato tem sua especialidade, e a Singularis tem profissionais dedicados para cada um.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-surface-warm">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="mb-16">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-4">
                Nossa Metodologia
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-brand-black">
                Processo em 6 etapas
              </h2>
            </div>
            <ProcessTimeline steps={timelineSteps} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-black py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-5">
              Vamos planejar juntos
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight max-w-xl mb-10">
              Fale com nossa equipe de MICE
            </h2>
            <Button variant="solid" size="lg" onClick={() => setModalOpen(true)}>
              Solicitar Proposta
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="MICE — Solicitar Proposta"
      >
        <MiceForm />
      </FormModal>
    </>
  );
}
