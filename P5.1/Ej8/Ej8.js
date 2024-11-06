class Cliente {
    static #id = 0;
    constructor(nombre, apellido, telefono) {
        this.id = Cliente.#id++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

    toString() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Apellido: ${this.apellido}, Teléfono: ${this.telefono}`;
    }
}

class Factura {
    static #idFactura = 0;

    constructor(idCliente, importe, estado = 'pendiente') {
        this.idFactura = Factura.generarIdFactura();
        this.idCliente = idCliente;
        this.importe = importe;
        this.estado = estado;
    }

    static generarIdFactura() {
        return Factura.#idFactura++;
    }

    cobrar() {
        this.estado = 'pagado';
    }

    imprimirFactura() {
        return `Factura ID: ${this.idFactura}, Cliente ID: ${this.idCliente}, Importe: ${this.importe}€, Estado: ${this.estado}`;
    }
}

class FacturaDetallada extends Factura {
    constructor(idCliente, importe, estado = 'pendiente') {
        super(idCliente, importe, estado);
        this.articulos = [];
    }

    agregarArticulo(nombre, precio) {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error("El nombre del artículo debe ser una cadena de texto no vacía.");
        }
        if (typeof precio !== 'number' || precio < 0) {
            throw new Error("El precio del artículo debe ser un número positivo.");
        }
        this.articulos.push({ nombre, precio });
    }

    imprimirFacturaDetallada() {
        const detallesArticulos = this.articulos.map(
            (articulo, index) => `Artículo ${index + 1}: ${articulo.nombre}, Precio: ${articulo.precio}€`
        ).join('\n');
        return `${this.imprimirFactura()}\nArtículos:\n${detallesArticulos}`;
    }
}

// Código para pruebas
try {
    // Crear clientes
    const cliente1 = new Cliente("Juan", "Pérez", "634567187");
    const cliente2 = new Cliente("Teresa", "López", "655561231");
    const cliente3 = new Cliente("Luis", "Martínez", "602354322");

    console.log(cliente1.toString());
    console.log(cliente2.toString());
    console.log(cliente3.toString());

    // Crear factura para el primer cliente (Juan)
    const factura1 = new FacturaDetallada(cliente1.id, 300);

    // Imprimir factura antes de cobrar
    console.log("\nFactura antes de cobrar:");
    console.log(factura1.imprimirFactura());

    // Cobrar la factura
    factura1.cobrar();

    // Imprimir factura después de cobrar
    console.log("\nFactura después de cobrar:");
    console.log(factura1.imprimirFactura());

    // Añadir artículos a la factura detallada
    factura1.agregarArticulo("Producto A", 100);
    factura1.agregarArticulo("Producto B", 200);

    // Imprimir factura detallada
    console.log("\nFactura detallada:");
    console.log(factura1.imprimirFacturaDetallada());

    // Intento de añadir un artículo inválido (manejo de errores)
    factura1.agregarArticulo("", -50);  // Esto debería lanzar un error
} catch (error) {
    console.error("Error al añadir artículo:", error.message);
}
