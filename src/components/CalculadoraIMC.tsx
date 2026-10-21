// Ejercicio 3: cálculo del Índice de Masa Corporal y su clasificación.

export const CalculadoraIMC = () => {
  // Calcula el IMC con la fórmula peso / (altura × altura); evita la división entre cero.
  const calcularIMC = (peso: number, altura: number): number =>
    altura <= 0 ? 0 : peso / (altura * altura);

  // Clasifica un IMC según los rangos indicados en la práctica.
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const peso = 70;
  const altura = 1.75;

  // Se calcula una sola vez y se reutiliza al mostrar el valor y la clasificación.
  const imc = calcularIMC(peso, altura);

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          3
        </span>
        Calculadora de IMC
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        <p>
          Peso: {peso} kg | Altura: {altura} m
        </p>
        <p>
          IMC:{" "}
          <span className="font-semibold text-slate-900">
            {imc.toFixed(2)}
          </span>
        </p>
        <p>
          Clasificación:{" "}
          <strong className="text-emerald-600">{clasificarIMC(imc)}</strong>
        </p>
      </div>
    </section>
  );
};
