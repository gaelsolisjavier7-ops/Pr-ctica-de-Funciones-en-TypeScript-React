
import { AplicadorDescuentos } from "./components/AplicadorDescuentos";
import { AnalizadorTexto } from "./components/AnalizadorTexto";
import { Calculadora } from "./components/Calculadora";
import { CalculadoraIMC } from "./components/CalculadoraIMC";
import { CarritoCompras } from "./components/CarritoCompras";
import { ConversorTemperatura } from "./components/ConversorTemperatura";
import { EstadisticasArreglo } from "./components/EstadisticasArreglo";
import { GeneradorPassword } from "./components/GeneradorPassword";
import { SistemaCalificaciones } from "./components/SistemaCalificaciones";
import { ValidadorEdad } from "./components/ValidadorEdad";

export const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Practica de Funciones en TypeScript
            </h1>
            <p className="mt-2 text-sm text-indigo-100">
              React + TypeScript · 10 ejercicios · Tailwind CSS
            </p>
          </div>
          <p className="text-sm font-medium text-indigo-200">
            Gael Solis Javier
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Calculadora />
          <ConversorTemperatura />
          <CalculadoraIMC />
          <ValidadorEdad />
          <AnalizadorTexto />
          <EstadisticasArreglo />
          <GeneradorPassword />
          <AplicadorDescuentos />
          <SistemaCalificaciones />
          <CarritoCompras />
        </div>
      </main>

      <footer className="pb-8 text-center text-xs text-slate-400">
        Cada resultado se calcula con funciones tipadas y se renderiza con
        React.
      </footer>
    </div>
  );
};

export default App;
