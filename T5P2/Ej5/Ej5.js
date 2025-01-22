function contarPalabras() {
    let columnas = document.querySelectorAll(".column");
    let totalPalabras = 0;

    columnas.forEach(columna => {
        let texto = columna.textContent || columna.innerText;
        let palabras = texto.split(/\s+/).filter(palabra => palabra.trim().length > 0);
        totalPalabras += palabras.length;
    });

    mostrarContadorPalabras(totalPalabras);
}

function mostrarContadorPalabras(totalPalabras) {
    let contador = document.getElementById("contadorPalabras");
    if (!contador) {
        contador = document.createElement("p");
        contador.id = "contadorPalabras";
        document.body.appendChild(contador);
    }
    contador.textContent = `El documento contiene ${totalPalabras} palabras.`;
}