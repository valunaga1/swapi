import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  personajes: any [] = [];
  personajes2: string ;
  constructor(private activateRoute: ActivatedRoute,private swapi: SwapiService, private route: Router) {
    this.swapi.getPersonajes()
   .subscribe ( (data: any) =>{
    console.log(data);
    this.personajes = data.results;
  });
  
  this.activateRoute.params.subscribe((parametro:any) =>{
    this.swapi.getPage(parametro['id'])
    .subscribe ( (data: any) =>{
      console.log(data.results);
      this.personajes2 =data.results.name;
 });
 console.log(parametro['id']);
 this.swapi.getPage(parametro['id']);

  });
   }
   verFlim(pelicula:any){
    console.log("peli"+pelicula);
    this.route.navigate(['personajes/page',pelicula]);

    
    
  } 

    
  
  

}
