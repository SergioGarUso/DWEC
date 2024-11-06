class vehiculo{
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
    constructor(marca, modelo, anyo, precio, puertas){
        super(marca, modelo, anyo,precio);
        this.puertas = puertas;
    }

    mostrar(){
        
        console.log(super.mostrar() , this.puertas + " puertas");
    }
}

class moto extends vehiculo{
    constructor(marca, modelo, anyo,precio, manillar){
        super(marca, modelo, anyo,precio);
        this.manillar = manillar;
    }

    mostrar(){
        console.log(super.mostrar() + ", manillar tipo" , this.manillar );
    }
}