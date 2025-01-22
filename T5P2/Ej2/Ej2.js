function leerParrafo() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let parrafo = document.getElementById("parrafo").value;
    let er_num = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    let correcto=0;

    console.log("nombre: " + nombre);
    console.log("e: " + email);
    console.log("p: " +parrafo);
   
    if(email == ""){
        let span = document.getElementById("errorEmail");
        span.innerHTML = "* Campo obligatorio";
    }else{
        if(er_num.test(email)){
            correcto++;
        }else{
            let span = document.getElementById("errorEmail");
            span.innerHTML = "* El email no es valido";
        }
    }
    
    
    if(parrafo == ""){
        let span2 = document.getElementById("errorParrafo");
        span2.innerHTML = "* Campo obligatorio";
    }else{
        correcto++;
    }

    if(correcto == 2){
        anyadeParrafo();
    }
}
function anyadeParrafo() {
    let parrafo = document.getElementById("parrafo").value;
    let nuevoParrafo = document.createElement("p");
    let textoParrafo = document.createTextNode(parrafo); // Corregido aquí
    nuevoParrafo.appendChild(textoParrafo);
    let columna = document.getElementById("column1");
    columna.appendChild(nuevoParrafo);
}
window.onload = function () {
    
    
    let formulario = document.querySelector("form");

    if (formulario) {
        formulario.reset();
    }

    let spanEmail = document.getElementById("errorEmail");
    let spanParrafo = document.getElementById("errorParrafo");
    if (spanEmail) spanEmail.innerHTML = "";
    if (spanParrafo) spanParrafo.innerHTML = "";
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === name) return value;
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function manejarVisitas() {
    if (!sessionStorage.getItem("cookiesAceptadas")) {
        if (confirm("¿Aceptas el uso de cookies para contar tus visitas?")) {
            sessionStorage.setItem("cookiesAceptadas", "true");
        } else {
            sessionStorage.setItem("cookiesAceptadas", "false");
            deleteCookie("contVisitas");
            alert("No se registrarán tus visitas.");
            return;
        }
    }

    if (sessionStorage.getItem("cookiesAceptadas") === "true") {
        let contador = parseInt(getCookie("contVisitas")) || 0;
        contador++;
        setCookie("contadorVisitas", contador, 365);
        mostrarVisitas(contador);
    }
}


function incrementarContadorVisitas() {
    let contador = parseInt(getCookie("contVisitas")) || 0;
    contador++;
    setCookie("contVisitas", contador, 365); 
    mostrarVisitas(contador);
}

function mostrarVisitas(contador) {
    let mensaje = document.getElementById("contVisitas");
    if (!mensaje) {
        mensaje = document.createElement("p");
        mensaje.id = "contVisitas";
        document.body.appendChild(mensaje);
    }
    mensaje.textContent = `Has visitado esta página ${contador} ${contador === 1 ? "vez" : "veces"}.`;
}

manejarVisitas();





