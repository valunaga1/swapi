import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlimsComponent } from './components/flims/flims.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FlimComponent } from './components/flim/flim.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "films", component: FlimsComponent },
  { path: "film/:id", component: FlimComponent },
  { path: "personajes", component: PersonajesComponent },
  { path: "personajes/page/:id", component: PersonajesComponent },
  { path: "personaje/:id", component: PersonajesComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
