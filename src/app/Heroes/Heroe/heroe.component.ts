import { Component } from "@angular/core";


@Component ({
    selector: "app-heroe",
    templateUrl: "Heroe.component.html",

})

export class Heroecomponent {
    nombre: string = "Iroman";
    edad: number = 42;

    obtenernombre() : string{

        return this.nombre + " - " + this.edad;
    } 

    CambiarNombre() : void {

        this.nombre = "Spiderman";
    }
    
    CambiarEdad() : number {

        return this.edad = 28;
    }
}