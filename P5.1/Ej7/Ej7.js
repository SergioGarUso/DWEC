let punto = {
    _x: 0,
    _y: 0,
    _z: 0,

    set y(x){
        this._y = x * 2;
    },

    set z(valor){
        this._z = Math.sqrt(this.x*valor);
    },

    _cuadrante: 0,

    get cuadrante(){
        if(this._x > 0 && this._y > 0) return 1;
        if(this._x < 0 && this._y > 0) return 2;
        if(this._x < 0 && this._y < 0) return 3;
        if(this._x > 0 && this._y < 0) return 4;
    },
    distancia(){
        return Math.sqrt(Math.pow(this._x,2)+Math.pow(this._y,2));
    },
    
    
}