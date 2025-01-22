var tamanioAct = 15;
function aumentarTamanio() {
    let parrafos = document.querySelectorAll(".column p");
    
    tamanioAct += 2;
    
    parrafos[0].style.fontSize = tamanioAct + "px";
    parrafos[1].style.fontSize = tamanioAct + "px";
    parrafos[2].style.fontSize = tamanioAct + "px";
    parrafos[3].style.fontSize = tamanioAct + "px";
}

function disminuirTamanio() {
    let parrafos = document.querySelectorAll(".column p");
    
    tamanioAct -= 2;
    
    parrafos[0].style.fontSize = tamanioAct + "px";
    parrafos[1].style.fontSize = tamanioAct + "px";
    parrafos[2].style.fontSize = tamanioAct + "px";
    parrafos[3].style.fontSize = tamanioAct + "px";
}

