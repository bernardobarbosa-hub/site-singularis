import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/modals/ContactForm";

export const metadata: Metadata = {
  title: "Contato — Singularis Travel",
  description:
    "Entre em contato com a Singularis Travel. Nosso time está pronto para criar a experiência perfeita para você.",
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-24 bg-white border-b border-black/6">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <Breadcrumb items={[{ label: "Contato" }]} className="mb-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Left: info */}
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-5">
                  Fale Conosco
                </p>
                <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-brand-black mb-6">
                  Vamos criar algo extraordinário juntos.
                </h1>
                <p className="text-base font-light text-brand-earth leading-relaxed max-w-md mb-12">
                  Nossa equipe está pronta para entender suas necessidades e criar a experiência de viagem perfeita para você.
                </p>

                <div className="w-12 h-px bg-brand-golden mb-10" aria-hidden="true" />

                <address className="not-italic space-y-4">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-earth/50 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contato@singularistravel.com.br"
                      className="text-[15px] font-light text-brand-black hover:text-brand-earth transition-colors duration-150"
                    >
                      contato@singularistravel.com.br
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-earth/50 mb-1">
                      Telefone
                    </p>
                    <a
                      href="tel:+551100000000"
                      className="text-[15px] font-light text-brand-black hover:text-brand-earth transition-colors duration-150"
                    >
                      +55 (11) 0000-0000
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-earth/50 mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/5521951018796"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-light text-brand-black hover:text-brand-earth transition-colors duration-150"
                    >
                      Enviar mensagem
                    </a>
                  </div>
                </address>
              </div>

              {/* Right: form */}
              <div className="bg-surface-warm p-8 md:p-12">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-8">
                  Envie uma mensagem
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
