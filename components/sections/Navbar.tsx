"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Por que Singularis", href: "/#por-que" },
  { label: "Experiências", href: "/#experiencias" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On internal pages, navbar is always white (no dark hero below)
  const isWhite = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isWhite
            ? "bg-white/95 backdrop-blur-sm border-b border-black/8 py-3"
            : "bg-transparent py-5"
        }`}
        aria-label="Navegação principal"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex flex-col leading-none"
            aria-label="Singularis Travel — Página inicial"
          >
            <span
              className={`text-sm font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
                isWhite ? "text-brand-black" : "text-white"
              }`}
            >
              Singularis
            </span>
            <span
              className={`text-[9px] font-medium tracking-[0.35em] uppercase transition-colors duration-300 ${
                isWhite ? "text-brand-earth" : "text-white/60"
              }`}
            >
              Travel
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-[12px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 group ${
                    isWhite
                      ? "text-brand-black hover:text-brand-earth"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px transition-all duration-200 ${
                      isWhite ? "bg-brand-earth" : "bg-white/60"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant={isWhite ? "outline-dark" : "outline-white"}
              size="sm"
              href="/contato"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer transition-colors duration-200 ${
              isWhite ? "text-brand-black" : "text-white"
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <span className="block h-px w-6 bg-current transition-all duration-200" />
            <span className="block h-px w-4 bg-current transition-all duration-200" />
            <span className="block h-px w-6 bg-current transition-all duration-200" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white flex flex-col transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
        aria-label="Menu de navegação"
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-black/8">
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-brand-black">
            Singularis
            <span className="text-brand-earth ml-1">Travel</span>
          </span>
          <button
            onClick={closeMobile}
            className="w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Fechar menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-6">
          <ul className="space-y-2" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobile}
                  className="block py-4 text-3xl font-light text-brand-black hover:text-brand-earth transition-colors duration-200 border-b border-black/8"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button variant="solid" size="lg" href="/contato" onClick={closeMobile}>
              Fale Conosco
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
