import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminos: [ true, Validators.requiredTrue ]
  });
  
  persona = {
    genero: 'F',
    notificaciones: true
  }
  
  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    // this.miFormulario.setValue( this.persona );
    this.miFormulario.reset({ 
      ...this.persona,
      terminos: false
     });

    //  this.miFormulario.get('terminos')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue);
    //  })

     this.miFormulario.valueChanges.subscribe( ({ condiciones, ...form }) => {
      this.persona = form;
     })
  }

  guardar() {
    if(this.miFormulario.invalid) { return; }
    
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;

    this.persona = formValue;
  }

}
