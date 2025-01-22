const texto = "El producto-A tiene un costo de 50.25, mientras que el producto-B vale 37 y el producto-A20V tiene un precio de 500 euros.";

const regex = /(\bproducto-[A-Za-z0-9]+)\b.*?\b(\d+(?:\.\d+)?)/g;

function extraerProductosYPrecios(texto) {
    const mapa = {};
    let match;
    while ((match = regex.exec(texto)) !== null) {
        const producto = match[1]; 
        const precio = parseFloat(match[2]); 
        mapa[producto] = precio; 
    }
    return mapa;
}

const productosYPrecios = extraerProductosYPrecios(texto);
console.log(productosYPrecios);
