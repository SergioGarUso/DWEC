function buscarPalabra() {
    let palabra = document.getElementById("buscar").value.trim();

    //no hay palabra
    if (!palabra) {
        alert("Por favor, introduce una palabra para buscar.");
        return;
    }

    let encontrado = window.find(palabra, false, false);

    //no existe palabra
    if (!encontrado) {
        alert(`No se encontró la palabra "${palabra}" en el texto.`);
    }
}
