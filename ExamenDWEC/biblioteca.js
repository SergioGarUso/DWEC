let tamanioAct = 15;
function zoomIn() {
    let parrafos = document.querySelectorAll("p:not(notas)");
    tamanioAct += 2;

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize=tamanioAct +"px"
    });
    
}

function zoomOut() {
    let parrafos = document.querySelectorAll("p:not(notas)");
    
    tamanioAct -= 2;
    for(x=0; x<parrafos.length; x++){
        parrafos[x].style.fontSize=tamanioAct + "px";
    }
    
}

function anotaciones() {
    let parrafo = document.getElementById("formNotas").value;
    
    let nuevoParrafo = document.createElement("p");
    let textoParrafo = document.createTextNode(parrafo); // Corregido aquí
    nuevoParrafo.appendChild(textoParrafo);
    let notas = document.getElementById("notas");
    notas.appendChild(nuevoParrafo);
}

var modoGrinch = false;
function modeGrinch(){
    let boton = document.getElementById("modoGrinch");
    let parrafos = document.querySelectorAll("p:not(notas)");
    
    
    if(modoGrinch){
        let palabra = `<mark style="backgroundColor: #7FFF00;">Apestosa Navidad</mark>`;
        let palabraalt= `<mark style="backgroundColor: #7FFF00;">apestosa Navidad</mark>`;
        let palabraRegexalt = new RegExp(`(${palabraalt})`, "gi");
        let palabraRegex = new RegExp(`(${palabra})`, "gi");
        parrafos.forEach(parrafo => {
            parrafo.style.color= "black";
            parrafo.innerHTML= parrafo.innerHTML.replace(palabraRegex, "Feliz Navidad");
            parrafo.innerHTML= parrafo.innerHTML.replace(palabraRegexalt, "feliz Navidad")
        });
        
        boton.style.backgroundColor= "";
        modoGrinch=false;
    }else{
        let palabra = "Feliz Navidad";
        let palabraalt= "feliz Navidad";
        let palabraRegexalt = new RegExp(`(${palabraalt})`, "gi");
        let palabraRegex = new RegExp(`(${palabra})`, "gi");
        parrafos.forEach(parrafo => {
            parrafo.style.color= "red";
            parrafo.innerHTML= parrafo.innerHTML.replace(palabraRegex, `<mark style="backgroundColor: #7FFF00;">Apestosa Navidad</mark>`);
            parrafo.innerHTML= parrafo.innerHTML.replace(palabraRegexalt, `<mark style="backgroundColor: #7FFF00;">apestosa Navidad</mark>`);
        });
        
        boton.style.backgroundColor= "#7FFF00";
        
        modoGrinch=true;
        
        
    }
}
var modoNoc=false;
function modoDiurnoNocturno(){
    let boton = document.getElementById("botonNocturno");
    let fondo = document.getElementById("libro");
    if(modoNoc){
        boton.innerText= "Modo nocturno";
        fondo.style.backgroundColor= "white";
        fondo.style.color="black";
        modoNoc=false;
    }else{
        boton.innerText= "Modo diurno";
        fondo.style.backgroundColor= "black";
        fondo.style.color="white";
        modoNoc=true;
    }
}



    
