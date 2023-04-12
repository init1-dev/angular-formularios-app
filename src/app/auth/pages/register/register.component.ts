import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.vs.nombreApellidoPattern ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.vs.noPuedeSerStrider ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [ Validators.required ] ],
  }, {
    validators: [ this.vs.camposIguales('password', 'password2') ]
  })

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']) {
      return 'Email es obligatorio.';
    } else if(errors?.['pattern']) {
      return 'El email debe tener un formato de correo electrónico válido.'
    } else if(errors?.['emailExiste']) {
      return 'El email introducido ya existe.'
    }
    return '';
  }

  constructor( private fb: FormBuilder, 
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'In1t dev',
      email: 'init1.dev@gmail.com',
      username: 'in1t',
      password: '123456',
      password2: '123456'
    })
  }

  inputCheck( campo: string ) {
    return this.miFormulario.get( campo )?.invalid
            && this.miFormulario.get( campo )?.touched;
  }

  // this.miFormulario.get('email')?.hasError('required')
  // this.miFormulario.get('email')?.errors?.['required']

  

  submitFormulario() {
    console.log(this.miFormulario.value);
    
    this.miFormulario.markAllAsTouched();
  }

}
