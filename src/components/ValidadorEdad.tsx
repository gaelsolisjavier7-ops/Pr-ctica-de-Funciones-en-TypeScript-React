// Ejercicio 4: determina la mayoría de edad y muestra un mensaje por cada edad.

export const ValidadorEdad = () => {
  // Retorna true si la edad es mayor o igual a 18 (mayoría de edad).
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Retorna "Puede votar" o cuántos años le faltan para cumplir 18.
  const obtenerMensaje = (edad: number): string =>
    esMayorDeEdad(edad) ? "Puede votar" : `Le faltan ${18 - edad} años`;

  const edades: number[] = [15, 18, 25, 12];

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          4
        </span>
        Validador de Edad
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        {edades.map((edad) => (
          <p key={edad}>
            Edad {edad}:{" "}
            <span className="font-semibold text-slate-900">
              {obtenerMensaje(edad)}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};
