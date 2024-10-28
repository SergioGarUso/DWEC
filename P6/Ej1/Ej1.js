function crearCirculo() {
    const radio = parseFloat(document.getElementById('radio').value);
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingresa un número válido mayor a 0.");
        return;
    }
    
    // Crear objeto círculo y asignar propiedades y métodos
    const circulo = new Object();
    circulo.radio = radio;
    circulo.area = function() {
        return Math.PI * Math.pow(this.radio, 2);
    };
    circulo.perimetro = function() {
        return 2 * Math.PI * this.radio;
    };
    
    // Mostrar resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Radio: ${circulo.radio}</p>
        <p>Área: ${circulo.area().toFixed(2)}</p>
        <p>Perímetro: ${circulo.perimetro().toFixed(2)}</p>
    `;
}