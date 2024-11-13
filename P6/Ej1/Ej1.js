// Genera un número de lotería aleatorio entre 1 y 100
function generarNumLoteria() {
    return Math.floor(Math.random() * 100) + 1;
}

// Inicializamos las variables globales
let numLoteria = generarNumLoteria();
let contador = 1;
let victoria = false;
const NUM_MAX_INTENTOS = 5;

// Función para comprobar el número ingresado por el usuario
function comprobarNumLoteria() {
    // Validamos que aún haya intentos
    if (contador > NUM_MAX_INTENTOS) {
        alert("Has perdido la lotería, no te quedan intentos el numero era " + numLoteria);
        return;
    }

    // Obtenemos el número ingresado por el usuario
    const numJugador = parseInt(document.getElementById("num").value);

    if (victoria) {
        alert("Ya has ganado, por favor reinicia la página para volver a empezar");
        return;
    }

    // Comprobamos si el usuario ha acertado
    if (numJugador === numLoteria) {
        alert(`¡Has ganado la lotería en el intento ${contador}! el numero era ${numLoteria}`);
        victoria = true;
        contador= "";
    } else {
        // Si el número no coincide, incrementamos el contador
        alert("No has acertado la lotería");
        contador++;
        document.getElementById("cont").innerText = contador;
        
        // Si llegamos al máximo de intentos, mostramos mensaje de pérdida
        if (contador > NUM_MAX_INTENTOS || contador == "Numero maximo de intentos alcanzado") {
            alert("Has perdido la lotería, no te quedan intentos el numero era " + numLoteria);
            contador = "Numero maximo de intentos alcanzado";
            document.getElementById("cont").innerText = contador;

        }
    }
}
