import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flims',
  templateUrl: './flims.component.html',
  styleUrls: ['./flims.component.css']
})
export class FlimsComponent implements OnInit {

  listaPeliculas: any [] = [];
  film:any={};
  constructor(private swapi: SwapiService, private route: Router) {
 
  } 

  ngOnInit(){
     this.swapi.getListFlims()
    .subscribe ( (data: any) =>{
     console.log(data.results);
     this.listaPeliculas =data.results;
   });
    } 
    
    verFlim(pelicula:any){
     console.log(pelicula);
     this.route.navigate(['film',pelicula]);
  }
}
