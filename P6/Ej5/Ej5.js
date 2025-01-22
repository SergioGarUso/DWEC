function mostrarHoras() {
    const ahora = new Date();
    let html = ``; // Construir HTML como cadena

    const madrid = ahora.toLocaleTimeString("es-ES", { timeZone: "Europe/Madrid" });
    const ottawa = ahora.toLocaleTimeString("es-ES", { timeZone: "America/Toronto" });
    const canberra = ahora.toLocaleTimeString("es-ES", { timeZone: "Australia/Sydney" });
    const londres = ahora.toLocaleTimeString("es-ES", { timeZone: "Europe/London" });

    html += `<li>Madrid: ${madrid}</li>`;
    html += `<li>Ottawa: ${ottawa}</li>`;
    html += `<li>Canberra: ${canberra}</li>`;
    html += `<li>Londres: ${londres}</li>`;

    document.getElementById("horasCiudades").innerHTML = html; // Asignar el contenido generado
}