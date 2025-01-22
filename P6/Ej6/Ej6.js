function calcularDias(event) {
    event.preventDefault();

    const fecha1 = document.getElementById("fecha1").value;
    const fecha2 = document.getElementById("fecha2").value;

    const [dia1, mes1, año1] = fecha1.split("-").map(Number);
    const [dia2, mes2, año2] = fecha2.split("-").map(Number);

    const date1 = new Date(año1, mes1 - 1, dia1);
    const date2 = new Date(año2, mes2 - 1, dia2);

    const diferenciaMs = Math.abs(date2 - date1);
    const diasDiferencia = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    document.getElementById("diasEntreFechas").innerText = `Hay ${diasDiferencia} días.`;
}
