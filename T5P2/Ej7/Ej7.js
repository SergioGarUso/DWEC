function invertirParrafos() {
    let columnas = document.querySelectorAll(".column");

    columnas.forEach(columna => {
        let parrafos = Array.from(columna.children);
        parrafos.reverse(); // invierto el orden

        // Elimino parrafo
        parrafos.forEach(parrafo => columna.removeChild(parrafo));

        // añado con orden invertido
        parrafos.forEach(parrafo => columna.appendChild(parrafo));
    });
}


