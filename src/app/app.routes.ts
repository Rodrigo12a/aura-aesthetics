import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './shared/pages/inicio/inicio.component';
import { ContactoComponent } from './shared/pages/contacto/contacto.component';
import { TratamientosFacialesComponent } from './shared/pages/servicios/tratamientos-faciales/tratamientos-faciales.component';
import { MasajesCorporalesComponent } from './shared/pages/servicios/masajes-corporales/masajes-corporales.component';
import { DepilacionComponent } from './shared/pages/servicios/depilacion/depilacion.component';
import { CuidadoCorporalSolarComponent } from './shared/pages/productos/cuidado-corporal-solar/cuidado-corporal-solar.component';
import { SkincareFacialComponent } from './shared/pages/productos/skincare-facial/skincare-facial.component';
import { ReservarCitaComponent } from './shared/pages/reservar-cita/reservar-cita.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  //servicios

  {
    path: 'tratamientos-faciales',
    component: TratamientosFacialesComponent
  },
  {
    path: 'masajes-corporales',
    component: MasajesCorporalesComponent
  },
  {
    path: 'depilacion',
    component: DepilacionComponent
  },
  //productos
  {
    path: 'skincare-facial',
    component: SkincareFacialComponent
  },
  {
    path: 'cuidado-personal-solar',
    component: CuidadoCorporalSolarComponent
  },

  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'reservar-cita',
    component: ReservarCitaComponent
  }
];
