import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');

  titulo: string = 'Mi primera app con TS';

  nombre: string = 'Juan';
  materia: string = 'Tecnologias Web';
  semestre: number = 4;

  urlImagen: string = 'https://picsum.photos/200';

  activo: boolean = true;

  mensaje: string = 'Pasa el maouse aqui'

  contador: number = 0;

  incrementar(): void{
    this.contador++;
  }

  resetear(): void{
    this.contador = 0;
  }
}
