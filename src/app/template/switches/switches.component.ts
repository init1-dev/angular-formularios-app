import { Component } from '@angular/core';

interface Persona {
  genero: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  persona: Persona = {
    genero: 'M',
    notificaciones: true
  }

  terminos: Boolean = false;

}
