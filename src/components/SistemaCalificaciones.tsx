// Ejercicio 9: promedio de calificaciones, letra final y estado de aprobación.

// Tipo de cada alumno con su nombre y sus calificaciones.
interface Alumno {
  nombre: string;
  califs: number[];
}

export const SistemaCalificaciones = () => {
  // Calcula el promedio de las calificaciones; retorna 0 si no hay calificaciones.
  const calcularPromedio = (calificaciones: number[]): number =>
    calificaciones.length === 0
      ? 0
      : calificaciones.reduce((acumulado, calif) => acumulado + calif, 0) /
        calificaciones.length;

  // Devuelve la letra que corresponde al promedio (A, B, C, D o F).
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Retorna true si el promedio es suficiente para aprobar (70 o más).
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos: Alumno[] = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] },
  ];

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          9
        </span>
        Sistema de Calificaciones
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        {alumnos.map((alumno) => {
          // Por cada alumno se calcula el promedio, la letra y el estado.
          const promedio = calcularPromedio(alumno.califs);
          const letra = obtenerLetra(promedio);
          const aprobado = estaAprobado(promedio);

          return (
            <p key={alumno.nombre}>
              {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} -{" "}
              <span
                className={
                  aprobado
                    ? "font-semibold text-emerald-600"
                    : "font-semibold text-rose-600"
                }
              >
                {aprobado ? "Aprobado" : "Reprobado"}
              </span>
            </p>
          );
        })}
      </div>
    </section>
  );
};
