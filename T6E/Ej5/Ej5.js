const raton = document.getElementById("raton");
const teclado = document.getElementById("teclado");
const ratonx = document.getElementById("ratonX");
const ratony = document.getElementById("ratonY");
const tecladoChr = document.getElementById("tecladoChr");
const tecladoCod = document.getElementById("tecladoCod");

document.addEventListener("keydown", (event) => {
    teclado.style.backgroundColor = "lightblue";
    raton.style.backgroundColor = "white";

    tecladoChr.innerHTML = `Caracter: ${event.key}`;
    tecladoCod.innerHTML = `Codigo: ${event.code}`;
});

document.addEventListener("mousemove", () => {
    raton.style.backgroundColor = "white";
    teclado.style.backgroundColor = "white";
    
});

document.addEventListener("click", (event) => {
    raton.style.backgroundColor = "yellow";
    teclado.style.backgroundColor = "white";

    ratonx.innerHTML = `X: ${event.clientX}`;
    ratony.innerHTML = `Y: ${event.clientY}`;
});
