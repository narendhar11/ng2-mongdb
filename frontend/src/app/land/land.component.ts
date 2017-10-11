import { Component, OnInit } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from "../property.service";

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  landproperties: Property[]; //Properties array
  land:string = 'Land';
  landResults:number;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.landproperties = this.propertyService.gettype(this.land);
    this.landResults = this.landproperties.length
    //console.log(this.land);
    //console.log(this.landproperties);
  }
  
}
