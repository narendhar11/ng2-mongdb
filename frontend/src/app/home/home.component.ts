import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Property } from '../property';
import { PropertyService } from '../property.service';

//Pipe for filer

import { UniquePipe } from '../uniquevalue.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  properties: Property[]; //Properties array
  searchres: Property[]; //Properties array
  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute,
              private router: Router,) { }
  
  ngOnInit() {
    this.properties = [];
    this.propertyService.getAll().subscribe(properties =>{
      this.properties =properties;
      console.log(properties);
    })
    //this.properties = this.propertyService.getAll();
  }

  gotoSearchList(location: string, minPrice: number, maxPrice: number){
    if(location != "" && String(minPrice)=="" && String(maxPrice)==""){
      alert("working");
    }else{
      this.searchres = this.propertyService.searchresults(location,minPrice,maxPrice);
      this.router.navigate(['./searchresults/'+location+'/'+minPrice+'/'+maxPrice]);
    }
    
  }
}