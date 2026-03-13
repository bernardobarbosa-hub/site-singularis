"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

interface MiceFormData {
  firstName: string;
  lastName: string;
  cargo: string;
  company: string;
  email: string;
  phone: string;
  servicos: string[];
  message?: string;
  consent: boolean;
}

const inputClass =
  "w-full border-b border-brand-earth/40 bg-transparent py-2.5 text-sm font-light text-brand-black placeholder:text-brand-earth/40 focus:outline-none focus:border-brand-golden transition-colors duration-200";
const labelClass =
  "block text-[10px] font-medium tracking-[0.2em] uppercase text-brand-earth mb-1.5";
const errorClass = "text-[11px] text-red-500 mt-1.5";

const servicoOptions = ["Reuniões e/ou Eventos", "Viagens de Incentivo"];

export default function MiceForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MiceFormData>();

  const onSubmit = async (data: MiceFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/mice", {
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
          Nossa equipe de MICE entrará em contato para entender seu projeto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="mice-first" className={labelClass}>Primeiro Nome</label>
            <input
              id="mice-first"
              type="text"
              placeholder="João"
              className={inputClass}
              {...register("firstName", { required: "Obrigatório" })}
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="mice-last" className={labelClass}>Sobrenome</label>
            <input
              id="mice-last"
              type="text"
              placeholder="Silva"
              className={inputClass}
              {...register("lastName", { required: "Obrigatório" })}
            />
            {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="mice-cargo" className={labelClass}>Cargo</label>
          <input
            id="mice-cargo"
            type="text"
            placeholder="Diretor de RH"
            className={inputClass}
            {...register("cargo", { required: "Cargo obrigatório" })}
          />
          {errors.cargo && <p className={errorClass}>{errors.cargo.message}</p>}
        </div>

        <div>
          <label htmlFor="mice-company" className={labelClass}>Empresa</label>
          <input
            id="mice-company"
            type="text"
            placeholder="Nome da empresa"
            className={inputClass}
            {...register("company", { required: "Empresa obrigatória" })}
          />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>

        <div>
          <label htmlFor="mice-email" className={labelClass}>Email</label>
          <input
            id="mice-email"
            type="email"
            placeholder="seu@empresa.com"
            className={inputClass}
            {...register("email", {
              required: "Email obrigatório",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="mice-phone" className={labelClass}>Telefone</label>
          <input
            id="mice-phone"
            type="tel"
            placeholder="+55 (11) 00000-0000"
            className={inputClass}
            {...register("phone", { required: "Telefone obrigatório" })}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <p className={`${labelClass} mb-3`}>Tipo de serviço</p>
          <div className="flex flex-col gap-3">
            {servicoOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  value={opt}
                  className="w-4 h-4 accent-brand-golden cursor-pointer flex-shrink-0"
                  {...register("servicos")}
                />
                <span className="text-sm font-light text-brand-earth group-hover:text-brand-black transition-colors duration-150">
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="mice-message" className={labelClass}>
            Mensagem adicional{" "}
            <span className="text-brand-earth/40 normal-case tracking-normal">(opcional)</span>
          </label>
          <textarea
            id="mice-message"
            rows={3}
            placeholder="Conte-nos mais sobre seu evento ou projeto..."
            className={`${inputClass} resize-none`}
            {...register("message")}
          />
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 accent-brand-golden cursor-pointer flex-shrink-0 mt-0.5"
              {...register("consent", { required: "Aceite obrigatório" })}
            />
            <span className="text-[12px] font-light text-brand-earth/70 leading-relaxed group-hover:text-brand-earth transition-colors duration-150">
              Concordo com a{" "}
              <a href="#" className="underline hover:text-brand-black">
                Política de Privacidade
              </a>{" "}
              e autorizo o contato da Singularis Travel.
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
          {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
        </Button>
      </div>
    </form>
  );
}
