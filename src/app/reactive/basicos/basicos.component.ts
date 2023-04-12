import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080 TI'),
  //   precio: new FormControl(599),
  //   existencias: new FormControl(10),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [ null, [ Validators.required, Validators.minLength(3) ] ],
    precio: [ null, [ Validators.required, Validators.min(0) ] ],
    existencias: [ null, [ Validators.required, Validators.min(0) ] ],
  })

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
   this.miFormulario.reset({
    nombre: 'RTX 4080 TI',
    precio: 1200,
    existencias: 10
   }) 
  }

  invalidInput(campo: string) {
    return this.miFormulario.controls[campo].touched && 
           this.miFormulario.controls[campo].errors;
  }

  guardar() {
    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
    console.log(this.miFormulario.value);
  }

}
