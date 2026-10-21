// Ejercicio 8: función de orden superior que aplica estrategias de descuento.

// Tipo de las funciones callback que calculan un descuento a partir del precio.
type CalcularDescuento = (precio: number) => number;

export const AplicadorDescuentos = () => {
  // Función de orden superior: recibe el precio y la función que calcula el descuento.
  const aplicarDescuento = (
    precio: number,
    calcularDescuento: CalcularDescuento,
  ): number => precio - calcularDescuento(precio);

  // Descuento del 10 % del precio.
  const descuento10 = (p: number): number => p * 0.1;

  // Descuento del 25 % del precio.
  const descuento25 = (p: number): number => p * 0.25;

  // Descuento especial para estudiantes: 15 % del precio.
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          8
        </span>
        Aplicador de Descuentos
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p>Precio original: ${precio}</p>
        <p>
          Con 10% off:{" "}
          <span className="font-semibold text-slate-900">
            ${aplicarDescuento(precio, descuento10)}
          </span>
        </p>
        <p>
          Con 25% off:{" "}
          <span className="font-semibold text-slate-900">
            ${aplicarDescuento(precio, descuento25)}
          </span>
        </p>
        <p>
          Descuento estudiante:{" "}
          <span className="font-semibold text-slate-900">
            ${aplicarDescuento(precio, descuentoEstudiante)}
          </span>
        </p>
      </div>

      <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-400">
        La misma función recibe distintas estrategias de descuento (callbacks).
      </p>
    </section>
  );
};
