"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Button from "@/components/ui/Button";
import FormModal from "@/components/modals/FormModal";
import CorporateForm from "@/components/modals/CorporateForm";

const differentials = [
  {
    title: "Consultor dedicado por empresa",
    body: "Sempre o mesmo profissional, que conhece suas preferências e política de viagem.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Disponibilidade 24/7",
    body: "Atendimento imediato a qualquer hora, para qualquer solicitação, em qualquer fuso horário.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Tarifas negociadas",
    body: "Aéreos e hotéis com tarifas corporativas exclusivas, reduzindo os custos sem perda de qualidade.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Plataforma de reservas online",
    body: "Sistema próprio de gestão de viagens, acessível para toda a equipe com aprovações automatizadas.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Relatórios de emissões",
    body: "Controle de carbono e sustentabilidade nas viagens corporativas, com relatórios periódicos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: "Agilidade garantida",
    body: "Solicitações respondidas com rapidez. Seus executivos viajam sem burocracia e sem espera.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function CorporatePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <ServicePageHero
          eyebrow="Corporate"
          title="Seus executivos viajam. Nós cuidamos de tudo."
          subtitle="Consultor dedicado, disponível 24/7, que conhece sua empresa e suas preferências."
          breadcrumb={[
            { label: "Serviços", href: "/servicos" },
            { label: "Corporate" },
          ]}
        />

        {/* Intro */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 max-w-3xl">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
              A nossa proposta
            </p>
            <div className="space-y-5 text-[15px] md:text-base font-light text-brand-earth leading-relaxed">
              <p>
                Na Singularis Corporate, cada empresa tem um consultor dedicado. Uma pessoa que conhece suas políticas de viagem, suas preferências e está disponível 24 horas por dia, 7 dias por semana, para atender qualquer solicitação com agilidade e atenção.
              </p>
              <p>
                Cuidamos de tudo — reservas de aéreos, hotéis, transfers, vistos e logística completa — para que seus executivos e equipes viajem com conforto, segurança e sem nenhuma preocupação.
              </p>
            </div>
          </div>
        </section>

        {/* Differentials grid */}
        <section className="py-24 bg-surface-warm">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-4">
                Diferenciais
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-brand-black">
                O que nos torna o parceiro ideal
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {differentials.map((d) => (
                <div key={d.title} className="flex flex-col">
                  <span className="block w-6 h-0.5 bg-brand-golden mb-5" aria-hidden="true" />
                  <div className="text-brand-earth mb-4 w-5 h-5">{d.icon}</div>
                  <h3 className="text-base font-medium text-brand-black mb-2 tracking-wide">
                    {d.title}
                  </h3>
                  <p className="text-[13px] font-light text-brand-earth leading-relaxed">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-black py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-5">
              Fale com a nossa equipe
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight max-w-xl mb-10">
              Pronto para simplificar as viagens da sua empresa?
            </h2>
            <Button variant="solid" size="lg" onClick={() => setModalOpen(true)}>
              Solicitar Proposta Corporate
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Corporate — Solicitar Proposta"
      >
        <CorporateForm />
      </FormModal>
    </>
  );
}
