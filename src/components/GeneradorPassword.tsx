// Ejercicio 7: construye contraseñas aleatorias según longitud y tipos de caracteres.

import { useState } from "react";

export const GeneradorPassword = () => {
  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+";

  // Genera una contraseña aleatoria con letras y, opcionalmente, números y símbolos.
  const generarPassword = (
    longitud: number,
    incluirNumeros: boolean,
    incluirSimbolos: boolean,
  ): string => {
    // 1. Se parte de las letras (siempre presentes) y se concatenan los extras.
    let caracteresDisponibles = letras;
    if (incluirNumeros) caracteresDisponibles += numeros;
    if (incluirSimbolos) caracteresDisponibles += simbolos;

    // Una longitud no positiva no tiene sentido: se retorna una cadena vacía.
    if (longitud <= 0) return "";

    // 2. Se elige un carácter aleatorio por cada posición de la contraseña.
    let password = "";
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteresDisponibles.length);
      password += caracteresDisponibles.charAt(indice);
    }
    return password;
  };

  // Las contraseñas se generan una sola vez para que no cambien en cada render.
  const [passwords] = useState(() => ({
    basica: generarPassword(8, false, false),
    media: generarPassword(12, true, false),
    fuerte: generarPassword(16, true, true),
  }));

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          7
        </span>
        Generador de Contraseñas
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p className="flex flex-wrap items-baseline gap-2">
          <span>Básica (8):</span>
          <span className="break-all font-semibold text-slate-900">
            {passwords.basica}
          </span>
        </p>
        <p className="flex flex-wrap items-baseline gap-2">
          <span>Media (12):</span>
          <span className="break-all font-semibold text-slate-900">
            {passwords.media}
          </span>
        </p>
        <p className="flex flex-wrap items-baseline gap-2">
          <span>Fuerte (16):</span>
          <span className="break-all font-semibold text-slate-900">
            {passwords.fuerte}
          </span>
        </p>
      </div>

      <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-400">
        Las contraseñas son aleatorias; se generan una vez al cargar la página.
      </p>
    </section>
  );
};
