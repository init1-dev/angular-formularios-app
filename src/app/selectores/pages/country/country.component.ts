import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region    : [ '', [ Validators.required ] ],
    pais      : [ '', [ Validators.required ] ],
    frontera  : [ '', [ Validators.required ] ],
  })

  // Llenar selectores
  regiones  : string[] = [];
  paises    : PaisSmall[] = [];
  // fronteras : string[] = [];
  fronteras : PaisSmall[] = [];

  // UI
  cargando: boolean = false;

  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe( region => {
    //     this.paisesService.getPaisesPorRegion(region)
    //       .subscribe( paises => { do something })
    //   })

    // Cuando cambia la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( region ) => {
          if(region === ''){
            this.paises = [];
            this.cargando = false;
          } else {
            this.cargando = true;
          }
          this.miFormulario.get('pais')?.reset('');
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando = false;
      })

    // Cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo )),
        switchMap( pais => this.paisesService.getPaisesPorCodigos( pais?.borders! ))
      )
      .subscribe( paises => {
        // this.fronteras = pais?.borders || [];
        // TODO: terminar la validación si no tiene fronteras y hacer formulario valido
        if(this.miFormulario.get('pais')?.value !== '' && paises.length === 0){
          console.log('notiene');
        }
        
        this.fronteras = paises;
        this.cargando = false;
      })
    
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
