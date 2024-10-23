function sumaRecursiva(n) {
    // Caso base
    if (n === 1) {
        return 1;
    }
    // Llamada recursiva: suma el número actual y llama a la función con n - 1
    return n + sumaRecursiva(n - 1);
}

// Ejemplo de uso
var n = 5;
var resultado = sumaRecursiva(n);
console.log("La suma de los num del 1 al " + n + " es " + resultado);