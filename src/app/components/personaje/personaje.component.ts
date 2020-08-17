import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent  {

  constructor(private swapi: SwapiService, private route: Router) {
    
    
   }
  }
 

