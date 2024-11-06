class Punto2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Recta extends Punto2D {
    constructor(p1, p2) {
        super(p1.x, p1.y); 
        this.p2 = p2;      
    }

    get longitud() {
        const diagonalx = this.p2.x - this.x;
        const diagonaly = this.p2.y - this.y;
        return Math.sqrt(diagonalx * diagonalx + diagonaly * diagonaly);
    }

    get pendiente() {
        const diagonalx = this.p2.x - this.x;
        const diagonaly = this.p2.y - this.y;
        return diagonalx === 0 ? null : (diagonaly / diagonalx);
    }

    mostrar() {
        return `Recta desde (${this.x}, ${this.y}) hasta (${this.p2.x}, ${this.p2.y}) con longitud ${this.longitud}`;
    }
}

const punto1 = new Punto2D(1, 2);
const punto2 = new Punto2D(4, 6);
const recta = new Recta(punto1, punto2);

console.log(recta.mostrar());
console.log(`Pendiente de la recta: ${recta.pendiente}`);
