import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto #01 DPS';
//Codigo de clase ejemplo
contador = 1;

incrementar(){
  this.contador++;
}

decrementar(){
  this.contador--;
}



nombre = 'Kevin Pleitez';
edad =17;
email = 'kevin@correo.com'
sueldos = [1700,1600,1900];
activo = true;
sitio = 'http://www.google.com'

esActivo(){
  if(this.activo)
  return "Trabajado Activo";
  else
  return 'Trabajador Inactivo';
}

ultimos3Sueldos(){
  let suma =0;
  for(let x=0; x< this.sueldos.length; x++)
  suma+= this.sueldos[x];
  return suma;
}

}//Fin de Export Class
