import { Component } from '@angular/core';

interface menuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  templateMenu: menuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }
  ]

  reactiveMenu: menuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }
  ]

  authMenu: menuItem[] = [
    {
      texto: 'Register',
      ruta: './auth/register'
    },
    {
      texto: 'Login',
      ruta: './auth/login'
    }
  ]

  selectoresMenu: menuItem[] = [
    {
      texto: 'Selectores',
      ruta: './selectores/countries'
    }
  ]

}
