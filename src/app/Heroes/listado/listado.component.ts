import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
 
  Heroes : string[] =["Spiderman" , "Thor" , "Iroman" , "Hulk" , "Capitan America"]
  Heroeborrado: string = "";

  BorrarHeroe () {
    this.Heroeborrado = this.Heroes.shift() || "";
      }
}
