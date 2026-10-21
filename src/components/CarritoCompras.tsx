// Ejercicio 10: subtotales, IVA y total a pagar de un carrito de compras.

// Tipo de cada producto del carrito.
interface ItemCarrito {
  producto: string;
  precio: number;
  cantidad: number;
}

export const CarritoCompras = () => {
  // Calcula el subtotal de un producto: precio por cantidad.
  const calcularSubtotal = (precio: number, cantidad: number): number =>
    precio * cantidad;

  // Calcula el IVA del 16 % sobre un subtotal.
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;

  // Calcula el total a pagar: subtotal más IVA.
  const calcularTotal = (subtotal: number): number =>
    subtotal + calcularIVA(subtotal);

  // Formatea un número como precio con signo $ y dos decimales.
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito: ItemCarrito[] = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 },
  ];

  // Subtotal general del carrito acumulado con reduce.
  const subtotal = carrito.reduce(
    (acumulado, item) =>
      acumulado + calcularSubtotal(item.precio, item.cantidad),
    0,
  );

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-800">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
          10
        </span>
        Carrito de Compras
      </h3>

      <div className="space-y-2 font-mono text-sm text-slate-600">
        {carrito.map((item) => (
          <div
            key={item.producto}
            className="flex items-baseline justify-between gap-4"
          >
            <span>
              {item.producto} x{item.cantidad} =
            </span>
            <span className="font-semibold text-slate-900">
              {formatearPrecio(
                calcularSubtotal(item.precio, item.cantidad),
              )}
            </span>
          </div>
        ))}

        <hr className="my-3 border-slate-200" />

        <div className="flex items-baseline justify-between gap-4">
          <span>Subtotal:</span>
          <span className="font-semibold text-slate-900">
            {formatearPrecio(subtotal)}
          </span>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <span>IVA (16%):</span>
          <span className="font-semibold text-slate-900">
            {formatearPrecio(calcularIVA(subtotal))}
          </span>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t border-slate-200 pt-2 text-base">
          <span className="font-semibold text-slate-800">Total:</span>
          <span className="font-bold text-indigo-600">
            {formatearPrecio(calcularTotal(subtotal))}
          </span>
        </div>
      </div>
    </section>
  );
};
