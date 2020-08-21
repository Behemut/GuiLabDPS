import { Component, OnInit } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

unidades;
opcionSeleccion: string;
valorcm: number;
valorconversion:number;

constructor(){

}
  ngOnInit() {
    this.unidades=["Pulgada","Metro","Kilometro"];
    this.opcionSeleccion = "Selecciona";
    this.valorcm=0;
    this.valorconversion=0;
  } //Constructor por defecto

capturar(){
  switch(this.opcionSeleccion){
case 'Pulgada':
  this.valorconversion = this.valorcm*0.39370;
break;

case 'Metro':
  this.valorconversion = this.valorcm/100;
break;

case 'Kilometro':
  this.valorconversion=this.valorcm/100000;
break;

    } //Fin de switch
  } //Fin de metodo capturar
}

export class AppComponent {

}
