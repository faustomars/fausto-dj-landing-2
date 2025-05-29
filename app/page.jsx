
"use client";
import React from "react";
import Image from "next/image";
import { Mail, Instagram, Music } from "lucide-react";

export default function DJLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 text-center border-b border-white/10">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/Logo_Fausto_Martinez_Blanco_Transparente.png"
            alt="Logo Fausto Martínez"
            width={120}
            height={120}
          />
          <h1 className="text-4xl md:text-6xl font-bold">Fausto Martínez</h1>
          <p className="text-lg md:text-xl text-white/70">Crossover DJ & Music Curator</p>
        </div>
      </header>

      <section className="p-8 md:p-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sobre mí</h2>
        <p className="max-w-2xl mx-auto text-white/80">
          Dj ecuatoriano especializado en hacer de tu fiesta diferente. Versátil 100%. Mi objetivo es hacer que la pista vibre y que la energía no decaiga. Disponible para eventos, fiestas privadas y festivales.
        </p>
      </section>

      <section className="p-8 md:p-16 bg-white/5 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Escucha mis sets</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://open.spotify.com/playlist/5ZFJUxBLF4tVoLnCXJOLOk?si=524cc47789a14fcd" target="_blank" rel="noopener" className="hover:underline">
            <div className="border border-white/30 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10">
              <Music className="w-4 h-4" /> <span>Spotify Playlist</span>
            </div>
          </a>
        </div>
      </section>

      <section className="p-8 md:p-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contacto</h2>
        <p className="text-white/80 mb-4">Para bookings o colaboraciones:</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:faustoms@outlook.com">
            <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/90">
              <Mail className="w-4 h-4" /> <span>Email</span>
            </div>
          </a>
          <a href="https://www.instagram.com/faustoa_martinezs/" target="_blank" rel="noopener">
            <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/90">
              <Instagram className="w-4 h-4" /> <span>Instagram</span>
            </div>
          </a>
        </div>
      </section>

      <footer className="p-4 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Fausto Martínez. Todos los derechos reservados.
      </footer>
    </div>
  );
}
