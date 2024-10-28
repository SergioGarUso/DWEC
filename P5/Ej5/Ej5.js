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

function incrementar() {
    contador.incrementar();
    document.getElementById("contador").innerText = contador.mostrar();
}