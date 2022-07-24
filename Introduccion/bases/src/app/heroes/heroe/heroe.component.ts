import { Component } from "@angular/core";

@Component({
  selector: 'app-heore',
  templateUrl: 'heroe.component.html'
})
export class HeoreComponent{
  nombre: string = 'Ironman'
  edad: number = 45;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 18;
  }
}

