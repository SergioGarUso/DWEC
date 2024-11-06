let punto = {
    x: 0,
    _y: 0,
    _z: 0,
    _cuadrante: 0,
    set y(x){
        this._y = x * 2;
    },
    get y(){
        return this._y;
    },
    set z(valor){
        this._z = Math.sqrt(this.x*valor);
    },
    get z(){
        return this._z;
    },
    get cuadrante(){
        if(this.x > 0 && this._y > 0) return 1;
        if(this.x < 0 && this._y > 0) return 2;
        if(this.x < 0 && this._y < 0) return 3;
        if(this.x > 0 && this._y < 0) return 4;
    },
    distancia(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this._y,2));
    },
    mostrar_cordenadas(){
        console.log(`Cordenadas : ${this.x} , ${this._y} , ${this._z}`); 
    },
    mostrar_cuadrante(){
        console.log(`Cuadrante es : ${this._cuadrante}`);
    }
    
}

punto.x = 7;
punto._y = punto.x;
punto._z = 11;

console.log("La distancia es:" + punto.distancia());
punto.mostrar_cordenadas();
punto.mostrar_cuadrante();
