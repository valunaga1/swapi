import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-flim',
  templateUrl: './flim.component.html',
  styleUrls: ['./flim.component.css']
})
export class FlimComponent implements OnInit{
flim:any={};
  constructor(private activateRoute: ActivatedRoute, private swapiService:SwapiService) {
  
   
    
   }

   ngOnInit(){
    this.activateRoute.params.subscribe((parametro:any) =>{
      this.swapiService.getFlim(parametro['id'])
    .subscribe( film =>{
      console.log(film);
      this.flim=film;
   });
      console.log(parametro['id']);
      this.swapiService.getFlim(parametro['id']);
    });

   }


}
