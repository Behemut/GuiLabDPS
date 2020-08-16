class Empleado{
nombre:string;
salario:number;

constructor(_nombre:string, _salario:number){
    this.nombre= _nombre;
    this.salario= _salario;
}
CalcularDeducciones():number {
    var deduccion_salariales:number; 
   
    if (this.salario>=500 && this.salario<=800){
        deduccion_salariales= this.salario - (this.salario*0.10);
    }
    if (this.salario>=801 && this.salario<=1000){
        deduccion_salariales= this.salario - (this.salario*0.15);
    }
    if (this.salario<500) {
        deduccion_salariales= this.salario;
    }

    return deduccion_salariales;//Retorno del area calculado
    } //fin de metodo
} //Fin de clase

let Empleado1= new Empleado('Kevin', 525);
console.log("El empleado " + Empleado1.nombre + " recibira un salario neto de " + Empleado1.CalcularDeducciones());
let Empleado2= new Empleado('Carlos', 880);
console.log("El empleado " + Empleado2.nombre + " recibira un salario neto de " + Empleado2.CalcularDeducciones());
let Empleado3= new Empleado('Mason', 420);
console.log("El empleado " + Empleado3.nombre + " recibira un salario neto de " + Empleado3.CalcularDeducciones());
