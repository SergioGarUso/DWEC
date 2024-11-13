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

    constructor(idCliente, importe, estado = "pendiente") {
        this.idFactura = Factura.generarIdFactura();
        this.idCliente = idCliente;
        this.importe = importe;
        this.estado = estado;
    }

    static generarIdFactura() {
        return Factura.#idFactura++;
    }

    cobrar() {
        this.estado = "pagado";
    }

    mostrarFactura() {
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
            throw new Error("No tiene que estar vacio");
        }
        if (typeof precio !== 'number' || precio < 0) {
            throw new Error("El precio del artículo debe ser  positivo.");
        }
        this.articulos.push({ nombre, precio });
    }

    mostrarFacturaDetallada() {
        let detallesArticulos = '';
        
        for (let i = 0; i < this.articulos.length; i++) {
            const articulo = this.articulos[i];
            detallesArticulos += `Artículo ${i + 1}: ${articulo.nombre}, Precio: ${articulo.precio}€\n`;
        }

        return `${this.mostrarFactura()}\nArtículos: ${detallesArticulos}`;
    }
}

// hacemos la pruebas
try {
    // creo los clientes
    const cliente1 = new Cliente("Juan", "Pérez", "634567187");
    const cliente2 = new Cliente("Teresa", "López", "655561231");
    const cliente3 = new Cliente("Luis", "Martínez", "602354322");

    console.log(cliente1.toString());
    console.log(cliente2.toString());
    console.log(cliente3.toString());

    // creo la factura detallada de huan
    const factura1 = new FacturaDetallada(cliente1.id, 300);

    // imprimo factura sin cobrar
    console.log("\nFactura antes de cobrar:");
    console.log(factura1.mostrarFactura());

    // cobro factura
    factura1.cobrar();

    // imprimo otra vez pero ya cobrado
    console.log("\nFactura después de cobrar:");
    console.log(factura1.mostrarFactura());

    // Aañado articulos
    factura1.agregarArticulo("Producto A", 100);
    factura1.agregarArticulo("Producto B", 200);

    // imprimo factura otra vez
    console.log("\nFactura detallada:");
    console.log(factura1.mostrarFacturaDetallada());

    //añadir articulo erroneo
    factura1.agregarArticulo("", -50);  // Esto debería lanzar un error
} catch (error) {
    console.error("Error al añadir artículo:", error.message);
}
