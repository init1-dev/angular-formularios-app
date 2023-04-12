import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'In1t',
    favoritos: [
      { id: 1, nombre: 'metal gear solid'},
      { id: 2, nombre: 'monkey island'},
    ]
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';
  } 

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  guardar() {
    console.log('formulario posteado'); 
  }

}
