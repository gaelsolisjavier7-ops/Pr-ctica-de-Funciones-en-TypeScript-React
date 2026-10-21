// Ejercicio 6: promedio, máximo y mínimo de un arreglo de números.

export const EstadisticasArreglo = () => {
  // Calcula el promedio de los números; retorna 0 si el arreglo está vacío.
  const calcularPromedio = (nums: number[]): number =>
    nums.length === 0
      ? 0
      : nums.reduce((acumulado, numero) => acumulado + numero, 0) / nums.length;

  // Retorna el número mayor del arreglo; retorna 0 si está vacío.
  const encontrarMaximo = (nums: number[]): number =>
    nums.length === 0 ? 0 : Math.max(...nums);

  // Retorna el número menor del arreglo; retorna 0 si está vacío.
  const encontrarMinimo = (nums: number[]): number =>
    nums.length === 0 ? 0 : Math.min(...nums);

  const numeros: number[] = [8, 3, 15, 7, 22, 11, 4];

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          6
        </span>
        Estadísticas
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p>Números: [{numeros.join(", ")}]</p>
        <p>
          Promedio:{" "}
          <span className="font-semibold text-slate-900">
            {calcularPromedio(numeros).toFixed(2)}
          </span>
        </p>
        <p>
          Máximo:{" "}
          <span className="font-semibold text-slate-900">
            {encontrarMaximo(numeros)}
          </span>
        </p>
        <p>
          Mínimo:{" "}
          <span className="font-semibold text-slate-900">
            {encontrarMinimo(numeros)}
          </span>
        </p>
      </div>

      <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-400">
        Las tres funciones retornan 0 cuando el arreglo está vacío.
      </p>
    </section>
  );
};
