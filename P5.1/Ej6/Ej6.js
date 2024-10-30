function crearCirculo() {
    //leo el radio del form y le hago e parse para que sea float
    const radio = parseFloat(document.getElementById('radio').value);
    
    
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
    //la salida con parrafos
    resultadosDiv.innerHTML = `
        <p>Radio: ${circulo.radio}</p>
        <p>Área: ${circulo.area().toFixed(2)}</p>
        <p>Perímetro: ${circulo.perimetro().toFixed(2)}</p>
    `;
}