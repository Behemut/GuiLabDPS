import { Component } from '@angular/core';
import { Alumno } from './models/alumno' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
//Arreglo del tipo Alumno que tiene 3 registro almacenados
alumnoArray: Alumno[] = [{id:1, name: "Alex", lastname:"Campos", age: 35},
                         {id:2, name: "Maria", lastname:"Lopez", age: 20},
                         {id:3, name: "Juan", lastname:"Castro", age: 25}]

//Atributo selecAlumno del tipo Alumno, por lo tanto puede almacenar un objeto

selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0};

//un metodo que no retorna nada "void", recibe como parametro una variable del tipo Alumno
//Para ser asignada al atributo selectAlumno y poder ser mostrado en pantalla

openForEdit(alumno: Alumno): void{
  this.selectedAlumno = alumno;
}

//Metodo que no retorna nada "void", NO recibe parametro pero realiza dos operaciones agregar
//Editar si no hay registro seleccionado se guarda, de lo contrario limpia el atributo

addOrEdit(): void{
if(this.selectedAlumno.id === 0){ //INSERT
  this.selectedAlumno.id = this.alumnoArray.length +1;
  this.alumnoArray.push (this.selectedAlumno);
}
this.selectedAlumno = {id:0, name:'', lastname: '', age: 0};
}

delete(): void {
  if (confirm('¿Esta seguro de eliminar el Registro?')){
    this.alumnoArray = this.alumnoArray.filter( x => x!= this.selectedAlumno);
    this.selectedAlumno = {id:0, name:'', lastname: '', age: 0};
   }
  }
}
