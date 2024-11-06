class vehiculo{
    //clase padre
    constructor(marca, modelo, anyo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.precio = precio;
    }

    mostrar(){
        return this.marca + " " + this.modelo + ", " + this.anyo + ", " + this.precio + "€";
    }
}

class coche extends vehiculo{
        //contructor con el super herdeado

    constructor(marca, modelo, anyo, precio, puertas){
        super(marca, modelo, anyo,precio);
        this.puertas = puertas;
    }

    mostrar(){
        return super.mostrar() + ", " + this.puertas + " puertas";
    }
}

class moto extends vehiculo{
    //contructor con el super herdeado
    constructor(marca, modelo, anyo,precio, manillar){
        super(marca, modelo, anyo,precio);
        this.manillar = manillar;
    }

    mostrar(){
        return super.mostrar() + ", manillar tipo " + this.manillar ;
    }
}

class Concesionario {
    constructor() {
        this.inventario = [];  // Array donde guardo vehiculos
    }

    //funcion para añadir vehiculos
    AddVehiculo(vehiculo) {
        this.inventario.push(vehiculo);
    }

    //funcion que muestra los vehiculos
    showTaller() {
        if (this.inventario.length === 0) {
            console.log("Inventario vacio.");
        } else {
            console.log("Concesionario:");
            this.inventario.forEach((vehiculo, index) => {
                console.log(`${index + 1}. ${vehiculo.mostrar()}`);
            });
        }
    }
}

// Crearmos el taller
const tallerChatarrasPalas = new Concesionario();

// Crear algunos vehículos
const carro1 = new coche("Toyota", "Corolla", 2020, 20000, 4);
const carro2 = new coche("Ford", "Mustang", 2019, 35000, 2);
const motarda1 = new moto("Honda", "CBR", 2021, 15000, "tracker");
const carro3 = new coche("Seat", "Leon", 2019, 2000, 5);
const motarda2 = new moto("Honda", "CBR", 2018, 1500, "recto");

// Agregar vehículos 
tallerChatarrasPalas.AddVehiculo(carro1);
tallerChatarrasPalas.AddVehiculo(carro2);
tallerChatarrasPalas.AddVehiculo(carro3);
tallerChatarrasPalas.AddVehiculo(motarda1);
tallerChatarrasPalas.AddVehiculo(motarda2);

// Mostrar inventario 
tallerChatarrasPalas.showTaller();



