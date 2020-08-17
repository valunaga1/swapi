import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RUTAS
import { AppRoutingModule } from './app-routing.module';
//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { FlimsComponent } from './components/flims/flims.component';
import { FlimComponent } from './components/flim/flim.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//SERVICIOS
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    PersonajeComponent,
    FlimsComponent,
    FlimComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
