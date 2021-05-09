import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modulos
import { pagesRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes =[

{path: '**', component: NopagefoundComponent}, 
{path: '', redirectTo:'/dashboard', pathMatch:'full'},
];
@NgModule({
  
  imports: [
     RouterModule.forRoot( routes),
     pagesRoutingModule,
     authRoutingModule

  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }  
