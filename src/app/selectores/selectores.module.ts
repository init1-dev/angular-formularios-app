import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectoresRoutingModule } from './selectores-routing.module';
import { CountryComponent } from './pages/country/country.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectoresRoutingModule
  ]
})
export class SelectoresModule { }
