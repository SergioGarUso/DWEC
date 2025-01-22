const num = document.getElementById("num");

document.addEventListener("keydown", (event) => {
    if(event.key == "ArrowUp"){
        if(parseInt(num.innerHTML) < 120 ){
            num.innerHTML = parseInt(num.innerHTML) + 1;
        }
        
    }else if(event.key == "ArrowDown"){
        if(parseInt(num.innerHTML) > 0 ){
            num.innerHTML = parseInt(num.innerHTML) - 1;
        }
        
    }
    
})