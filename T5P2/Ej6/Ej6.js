function mostrarParrafosPocoAPoco() {
    let parrafos = document.querySelectorAll(".column p");
    let x = 0;


    function mostrarSiguienteParrafo() {
        if (x < parrafos.length) {
            parrafos[x].style.opacity = 1;
            parrafos[x].style.animation = "fadeIn 2s ease";
            x++;
            setTimeout(mostrarSiguienteParrafo, 2000);
        }
    }

    mostrarSiguienteParrafo();
}

