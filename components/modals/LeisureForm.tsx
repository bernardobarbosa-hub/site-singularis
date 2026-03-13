"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

interface LeisureFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

const inputClass =
  "w-full border-b border-brand-earth/40 bg-transparent py-2.5 text-sm font-light text-brand-black placeholder:text-brand-earth/40 focus:outline-none focus:border-brand-golden transition-colors duration-200";
const labelClass =
  "block text-[10px] font-medium tracking-[0.2em] uppercase text-brand-earth mb-1.5";
const errorClass = "text-[11px] text-red-500 mt-1.5";

export default function LeisureForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeisureFormData>();

  const onSubmit = async (data: LeisureFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/leisure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-10 h-10 border border-brand-golden flex items-center justify-center mb-6" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L6.5 11.5L13 5" stroke="#F1D213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-earth mb-3">
          Solicitação recebida
        </p>
        <p className="text-sm font-light text-brand-earth/70 leading-relaxed max-w-xs">
          Seu consultor dedicado entrará em contato em breve para começar a criar sua experiência.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="leisure-first" className={labelClass}>Primeiro Nome</label>
            <input
              id="leisure-first"
              type="text"
              placeholder="João"
              className={inputClass}
              {...register("firstName", { required: "Obrigatório" })}
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="leisure-last" className={labelClass}>Sobrenome</label>
            <input
              id="leisure-last"
              type="text"
              placeholder="Silva"
              className={inputClass}
              {...register("lastName", { required: "Obrigatório" })}
            />
            {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="leisure-email" className={labelClass}>Email</label>
          <input
            id="leisure-email"
            type="email"
            placeholder="seu@email.com"
            className={inputClass}
            {...register("email", {
              required: "Email obrigatório",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="leisure-phone" className={labelClass}>Telefone</label>
          <input
            id="leisure-phone"
            type="tel"
            placeholder="+55 (11) 00000-0000"
            className={inputClass}
            {...register("phone", { required: "Telefone obrigatório" })}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="leisure-subject" className={labelClass}>Assunto / Destino de interesse</label>
          <input
            id="leisure-subject"
            type="text"
            placeholder="Ex: Lua de mel na Toscana"
            className={inputClass}
            {...register("subject", { required: "Assunto obrigatório" })}
          />
          {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="leisure-message" className={labelClass}>Como podemos ajudar?</label>
          <textarea
            id="leisure-message"
            rows={4}
            placeholder="Conte-nos sobre o tipo de experiência que você está buscando..."
            className={`${inputClass} resize-none`}
            {...register("message", { required: "Mensagem obrigatória" })}
          />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 accent-brand-golden cursor-pointer flex-shrink-0 mt-0.5"
              {...register("consent", { required: "Aceite obrigatório" })}
            />
            <span className="text-[12px] font-light text-brand-earth/70 leading-relaxed group-hover:text-brand-earth transition-colors duration-150">
              Desejo receber comunicações por email da Singularis Travel sobre experiências e destinos exclusivos.
            </span>
          </label>
          {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-[12px] text-red-500 text-center -mb-2">
            Ocorreu um erro. Por favor, tente novamente.
          </p>
        )}
        <Button variant="solid" size="lg" type="submit" className="w-full mt-2">
          {status === "loading" ? "Enviando..." : "Solicitar Proposta"}
        </Button>
      </div>
    </form>
  );
}
