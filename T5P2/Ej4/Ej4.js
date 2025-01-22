function buscarYRemarcar() {
    let palabra = document.getElementById("buscar").value.trim();
    // sin palabra
    if (!palabra) {
        alert("Por favor, introduce una palabra para buscar.");
        return;
    }

    //buscar por columna
    let columnas = document.querySelectorAll(".column");
    let palabraRegex = new RegExp(`(${palabra})`, "gi");

    let encontrado = false;

    //remarcar
    columnas.forEach(columna => {
        columna.innerHTML = columna.innerHTML.replace(/<mark>(.*?)<\/mark>/g, "$1");
        if (palabraRegex.test(columna.innerHTML)) {
            encontrado = true;
            columna.innerHTML = columna.innerHTML.replace(palabraRegex, "<mark>$1</mark>");
        }
    });

    //no encuentra
    if (!encontrado) {
        alert(`No se encontró la palabra "${palabra}" en el texto.`);
    }
}
