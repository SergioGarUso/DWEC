class Libro {
    constructor(titulo, autor, anyoPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anyoPublicacion = anyoPublicacion;
    }

    mostrar_info() {
        return `"${this.titulo}" de ${this.autor}, publicado en ${this.anyoPublicacion}.`;
    }

    es_clasico() {
        let anyoActual = new Date().getFullYear();
        if(anyoActual-this.anyoPublicacion>50){
            return `"Es clasico.`;
        }else{
            return `"No es clasico.`;
        }
    }
}

let libro = new Libro("Frankenstein", "Mary Shelley", 1818);
console.log(libro.es_clasico() );
console.log(libro.mostrar_info());
libro[autor]="Pedro Sanchez";

for (let prop in libro) {
    console.log(`${prop} = ${libro[prop]}`);
}
