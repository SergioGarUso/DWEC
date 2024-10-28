class Contador {
    constructor() {
        this.valor = 0;
    }
    //incrementa el numero
    incrementar() {
        this.valor++;
    }
    //Diminuye el numero
    disminuye() {
        this.valor--;
    }
    //devuelve el valor 
    mostrar() {
        return this.valor;
    }
}

//creamos el objeto y creamos la funcion que usara el boton
const contador = new Contador();
function incrementa() {
    contador.incrementar();
    document.getElementById("cont").innerText = contador.mostrar();
}
function disminuye() {
    contador.disminuye();
    document.getElementById("cont").innerText = contador.mostrar();
}