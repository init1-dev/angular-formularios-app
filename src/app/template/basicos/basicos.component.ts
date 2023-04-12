import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080',
    precio: 599,
    existencias: 3
  }

  nombreValido() {
    const input = this.miFormulario?.controls['producto'];
    return input?.touched && input?.invalid;
  }

  precioValido() {
    const input = this.miFormulario?.controls['precio'];
    const valid = input?.value < 0 || input?.value === null || input?.value === '';
    return input?.touched && valid;
  }

  customDirective() {
    return this.miFormulario?.controls['existencias']?.errors;
  }

  // guardar( form: NgForm ) {
  guardar() {
    console.log( this.miFormulario.value );
    this.miFormulario.resetForm({
      producto: '',
      precio: 0,
      existencias: 0
    });
  }

}
