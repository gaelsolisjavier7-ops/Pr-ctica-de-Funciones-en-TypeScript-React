// Ejercicio 5: cuenta palabras y vocales, e invierte una cadena de texto.

export const AnalizadorTexto = () => {
  // Cuenta las palabras separadas por espacios, ignorando espacios repetidos.
  const contarPalabras = (texto: string): number => {
    const limpio = texto.trim();
    return limpio === "" ? 0 : limpio.split(/\s+/).length;
  };

  // Cuenta las vocales a, e, i, o, u también acentuadas sin distinguir mayúsculas.
  const contarVocales = (texto: string): number => {
    const coincidencias = texto.match(/[aeiouáéíóú]/gi);
    return coincidencias === null ? 0 : coincidencias.length;
  };

  // Retorna el texto con los caracteres en orden inverso.
  const invertirTexto = (texto: string): string =>
    texto.split("").reverse().join("");

  const texto = "Hola mundo desde TypeScript";

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          5
        </span>
        Analizador de Texto
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p>
          Texto: <span className="text-slate-900">"{texto}"</span>
        </p>
        <p>
          Palabras:{" "}
          <span className="font-semibold text-slate-900">
            {contarPalabras(texto)}
          </span>
        </p>
        <p>
          Vocales:{" "}
          <span className="font-semibold text-slate-900">
            {contarVocales(texto)}
          </span>
        </p>
        <p className="break-all">
          Invertido:{" "}
          <span className="font-semibold text-slate-900">
            {invertirTexto(texto)}
          </span>
        </p>
      </div>

      <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-400">
        Regla aplicada: vocales a, e, i, o, u (con acentos) e inversión carácter
        por carácter. Por eso el resultado difiere del ejemplo del documento
        (9 vocales y "tpircS epyT edse…").
      </p>
    </section>
  );
};
