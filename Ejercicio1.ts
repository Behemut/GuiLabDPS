class Rombo{
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    constructor(_DiagonalVertical:number, _DiagonalHorizontal:number){
        this.DiagonalHorizontal = _DiagonalHorizontal;
        this.DiagonalVertical =  _DiagonalVertical;
    }  //Fin constructor

//Metodo para calcular el area de un Rombo DV x DH return number
 CalcularArea():number {
    var area:number=0;
    area = this.DiagonalHorizontal * this.DiagonalVertical
    return area;  //Retorno del area calculado
    } //fin de metodo
} //Fin de clase
//Inicializacion del objeto Rombo 1;
let Rombo1= new Rombo(5,5);
console.log("El area del Rombo1 es de: " + Rombo1.CalcularArea() + " metros cuadrados");
