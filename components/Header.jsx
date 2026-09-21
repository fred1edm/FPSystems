'use client';

import { useState } from 'react';
import Icon from './icons';
import { NAV_LINKS } from '@/data/content';

function Logo() {
  return (
    <a href="#inicio" className="flex items-center group" aria-label="FP Systems - Inicio">
      <img
        src="/logo.svg"
        alt="FP Systems"
        className="transition-transform duration-300 group-hover:scale-[1.02] header-logo"
      />
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-xl z-40 border-b border-gray-200/60 shadow-[0_1px_24px_-16px_rgba(109,40,217,0.35)]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Logo />

        <nav
          className="hidden md:flex items-center space-x-8 font-medium text-sm text-brand-darkGray"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link hover:text-brand-purpleBright transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-brand-purpleDark to-brand-purpleBright hover:from-brand-purpleBright hover:to-brand-purpleGlow text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 glow-purple active:scale-[0.98]"
          >
            Cotizar proyecto
          </a>
        </div>

        <button
          id="menu-btn"
          className="md:hidden text-brand-graphite focus:outline-none"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'x' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/60 flex flex-col p-6 space-y-4 font-medium shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-purpleBright py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gradient-to-r from-brand-purpleDark to-brand-purpleBright text-white text-center py-3 rounded-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            Cotizar proyecto
          </a>
        </div>
      )}
    </header>
  );
}
