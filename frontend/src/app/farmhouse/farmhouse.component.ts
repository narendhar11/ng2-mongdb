import { Component, OnInit } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from "../property.service";

@Component({
  selector: 'app-farmhouse',
  templateUrl: './farmhouse.component.html',
  styleUrls: ['./farmhouse.component.css']
})
export class FarmhouseComponent implements OnInit {
  farmhouseproperties: Property[]; //Properties array
  farmhouse:string = 'Farmhouse';
  farmhouseResults:number;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.farmhouseproperties = this.propertyService.gettype(this.farmhouse);
    //console.log(this.farmhouseproperties);
    this.farmhouseResults = this.farmhouseproperties.length
  }

}
