function mostrarFecha() {
    const fechaActual = new Date();

    const diasSemana = {
        0: "Domingo", 1: "Lunes", 2: "Martes", 3: "Miércoles",
        4: "Jueves", 5: "Viernes", 6: "Sábado"
    };
    const meses = {
        0: "Enero", 1: "Febrero", 2: "Marzo", 3: "Abril",
        4: "Mayo", 5: "Junio", 6: "Julio", 7: "Agosto",
        8: "Septiembre", 9: "Octubre", 10: "Noviembre", 11: "Diciembre"
    };

    const objetoFecha = {
        dia: fechaActual.getDate(),
        sem: diasSemana[fechaActual.getDay()],
        mes: meses[fechaActual.getMonth()],
        año: fechaActual.getFullYear()
    };

    document.getElementById("fechaActual").innerText = 
        `Día: ${objetoFecha.dia}, Semana: ${objetoFecha.sem}, Mes: ${objetoFecha.mes}, Año: ${objetoFecha.año}`;
}
