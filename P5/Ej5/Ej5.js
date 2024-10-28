class Contador {
    constructor() {
        this.valor = 0;
    }

    incrementar() {
        this.valor++;
    }

    mostrar() {
        return this.valor;
    }
}

const contador = new Contador();

function incrementa() {
    contador.incrementar();
    document.getElementById("cont").innerText = contador.mostrar();
}