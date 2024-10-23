function factorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }
   
    return n * factorial(n - 1);
}
let numeros = [];

function capturarNumero() {
    const input = document.getElementById('numero').value;

    // Convertimos el valor a número y lo agregamos al array
    const numero = parseInt(input);
    if (!isNaN(numero)) {
        numeros.push(numero);
    }

    document.getElementById('numero').value = '';
    //vamos poniendo una lista de los numero añadidos
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML += '<p>' + numero + '</p>';
}


function mostrarResultados() {
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; 

    // Recorremos el array de números con una función tradicional
    for (var i = 0; i < numeros.length; i++) {
        var numero = numeros[i];
        var resultado = 'Factorial de ' + numero + ': ' + factorial(numero);

        // Usamos innerHTML para añadir el resultado directamente
        resultadosDiv.innerHTML += '<p>' + resultado + '</p>';
    }

    // Limpiamos el array de números
    numeros = [];
}