"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const inputClass =
  "w-full border-b border-brand-earth/40 bg-transparent py-2.5 text-sm font-light text-brand-black placeholder:text-brand-earth/40 focus:outline-none focus:border-brand-golden transition-colors duration-200";
const labelClass =
  "block text-[10px] font-medium tracking-[0.2em] uppercase text-brand-earth mb-1.5";
const errorClass = "text-[11px] text-red-500 mt-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
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
          Mensagem enviada
        </p>
        <p className="text-sm font-light text-brand-earth/70 leading-relaxed max-w-xs">
          Obrigado pelo contato. Nossa equipe retornará em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-7">
        {/* Nome */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Nome completo
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Seu nome"
            className={inputClass}
            {...register("name", { required: "Nome obrigatório" })}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
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

        {/* Mensagem */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Mensagem
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Como podemos ajudar?"
            className={`${inputClass} resize-none`}
            {...register("message", { required: "Mensagem obrigatória" })}
          />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-[12px] text-red-500 text-center -mb-2">
            Ocorreu um erro. Por favor, tente novamente.
          </p>
        )}
        <Button
          variant="solid"
          size="lg"
          type="submit"
          className="w-full mt-2"
        >
          {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </div>
    </form>
  );
}
