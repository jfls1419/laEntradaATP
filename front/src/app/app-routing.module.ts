import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DatosrequeridosComponent} from './app.component';


const routes: Routes = [
  // {
  //   path: '/home'
  //   component: DatosrequeridosComponent
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
