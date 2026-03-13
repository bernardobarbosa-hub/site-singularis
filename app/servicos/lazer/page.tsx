"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Button from "@/components/ui/Button";
import FormModal from "@/components/modals/FormModal";
import LeisureForm from "@/components/modals/LeisureForm";

export default function LazerPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <ServicePageHero
          eyebrow="Lazer de Luxo"
          title="Viagens que existem apenas para você."
          subtitle="A Singularis não vende pacotes. Cria experiências."
          breadcrumb={[
            { label: "Serviços", href: "/servicos" },
            { label: "Lazer de Luxo" },
          ]}
        />

        {/* Main content */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-6 text-[15px] md:text-base font-light text-brand-earth leading-relaxed">
              <p>
                Com mais de 30 anos de mercado e uma rede de parceiros nos cinco continentes, nossos consultores especializados dedicam tempo para conhecer profundamente cada cliente — seus gostos, sonhos e estilo de vida — antes de criar um roteiro que existe apenas para você.
              </p>
              <p>
                Do hotel ao transfer, de reservas em restaurantes com estrelas Michelin a experiências exclusivas fora dos roteiros convencionais, cada detalhe é pensado e executado com precisão e cuidado absoluto.
              </p>
              <p className="text-brand-black font-medium">
                Você não precisa se preocupar com nada. Nós cuidamos de tudo.
              </p>
            </div>

            {/* Value props */}
            <div className="flex flex-col gap-8">
              {[
                {
                  title: "Roteiros sob medida",
                  body: "Cada itinerário é criado do zero para você. Nenhuma viagem é igual à outra.",
                },
                {
                  title: "Parceiros premium globais",
                  body: "Hotéis de luxo, restaurantes premiados, experiências exclusivas nos 5 continentes.",
                },
                {
                  title: "Consultor dedicado",
                  body: "Um profissional exclusivo, disponível a qualquer hora, durante toda a viagem.",
                },
              ].map((prop) => (
                <div key={prop.title}>
                  <span className="block w-6 h-0.5 bg-brand-golden mb-4" aria-hidden="true" />
                  <h3 className="text-base font-medium text-brand-black mb-2 tracking-wide">
                    {prop.title}
                  </h3>
                  <p className="text-[14px] font-light text-brand-earth leading-relaxed">
                    {prop.body}
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
              Comece agora
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight max-w-xl mb-10">
              Pronto para criar sua experiência?
            </h2>
            <Button variant="solid" size="lg" onClick={() => setModalOpen(true)}>
              Solicitar Proposta Personalizada
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Viagens Personalizadas"
      >
        <LeisureForm />
      </FormModal>
    </>
  );
}
