const circulo = new Object();
circulo.radio = 7;
circulo.area = function() {
    return Math.PI * Math.pow(this.radio, 2);
    
};
circulo.perimetro = function() {
    return 2 * Math.PI * this.radio;
    
};

console.log(circulo.area()); 
