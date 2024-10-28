let pelicula = {
    titulo: "Inception",
    director: "Christopher Nolan",
    anyo: 2010,
    genero: "Ciencia Ficción",
    mostrar_informacion: function() {
        return `${this.titulo} : película dirigida por ${this.director}, estreno ${this.anyo}, genero: ${this.genero}.`;
    }
};

console.log(pelicula.mostrar_informacion());
