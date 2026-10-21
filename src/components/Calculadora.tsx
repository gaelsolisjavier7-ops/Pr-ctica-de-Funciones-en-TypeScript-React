// Ejercicio 1: operaciones aritmeticas basicas mediante funciones puras.

export const Calculadora = () => {
  // Suma dos numeros y retorna el resultado.
  const sumar = (a: number, b: number): number => a + b;

  // Resta dos numeros y retorna el resultado.
  const restar = (a: number, b: number): number => a - b;

  // Multiplica dos numeros y retorna el producto.
  const multiplicar = (a: number, b: number): number => a * b;

  // Divide a entre b; si el divisor es 0 retorna 0 para evitar un error matematico.
  const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

  const a = 15;
  const b = 4;

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          1
        </span>
        Calculadora
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p>
          {a} + {b} ={" "}
          <span className="font-semibold text-slate-900">{sumar(a, b)}</span>
        </p>
        <p>
          {a} - {b} ={" "}
          <span className="font-semibold text-slate-900">{restar(a, b)}</span>
        </p>
        <p>
          {a} × {b} ={" "}
          <span className="font-semibold text-slate-900">
            {multiplicar(a, b)}
          </span>
        </p>
        <p>
          {a} ÷ {b} ={" "}
          <span className="font-semibold text-slate-900">
            {dividir(a, b).toFixed(2)}
          </span>
        </p>
      </div>

      {/* Caso borde solicitado en la practica: division entre cero. */}
      <p className="mt-4 border-t border-slate-100 pt-3 font-mono text-xs text-slate-400">
        Caso borde: {a} ÷ 0 = {dividir(a, 0)} (divisor cero)
      </p>
    </section>
  );
};
