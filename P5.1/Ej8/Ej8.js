class cliente {
    static #id=0;
    constructor(nombre, apellido, telefono) {
        this.id = cliente.#id++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

    toString() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Apellido: ${this.apellido}, Telefono: ${this.telefono}`;
    }

}

class factura {
    constructor(idCliente, importe, estado) {
        this.idCliente = idCliente;
        this.importe = importe;
        this.estado = estado;        
    }
}