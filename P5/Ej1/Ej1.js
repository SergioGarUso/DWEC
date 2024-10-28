const circulo = new Object();
circulo.radio = 7;
circulo.area = function() {
    return Math.PI * Math.pow(this.radio, 2);
    
};

console.log(circulo.area()); 
