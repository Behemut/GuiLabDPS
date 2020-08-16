var Rombo = /** @class */ (function () {
    function Rombo(_DiagonalVertical, _DiagonalHorizontal) {
        this.DiagonalHorizontal = _DiagonalHorizontal;
        this.DiagonalVertical = _DiagonalVertical;
    } //Fin constructor
    //Metodo para calcular el area de un Rombo DV x DH return number
    Rombo.prototype.CalcularArea = function () {
        var area = 0;
        area = this.DiagonalHorizontal * this.DiagonalVertical;
        return area;
    }; //fin de metodo
    return Rombo;
}()); //Fin de clase
//Inicializacion del objeto Rombo 1;
var Rombo1 = new Rombo(5, 5);
console.log(Rombo1.CalcularArea());
