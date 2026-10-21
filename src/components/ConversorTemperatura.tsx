// Ejercicio 2: conversión de temperaturas entre grados Celsius y Fahrenheit.

export const ConversorTemperatura = () => {
  // Convierte grados Celsius a Fahrenheit con la fórmula (c × 9/5) + 32.
  const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;

  // Convierte grados Fahrenheit a Celsius con la fórmula (f − 32) × 5/9.
  const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

  const temperatura = 25;

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          2
        </span>
        Conversor
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p>
          {temperatura}°C ={" "}
          <span className="font-semibold text-slate-900">
            {celsiusAFahrenheit(temperatura)}
          </span>
          °F
        </p>
        <p>
          100°F ={" "}
          <span className="font-semibold text-slate-900">
            {fahrenheitACelsius(100).toFixed(2)}
          </span>
          °C
        </p>
      </div>
    </section>
  );
};
