import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';


import { Property } from '../property';
import { PropertyService } from "../property.service";


@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html'
})
export class SearchresultsComponent implements OnInit  {
	results:Property[];
	sub:any;
	location:string;
	totalresults: number;
	subscription: Subscription;
  	constructor(private propertyService: PropertyService,
  				private route: ActivatedRoute,
  				private router: Router) { }
  
  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
      let location = params['location'];
      this.location=location;
      let minPrice = Number.parseInt(params['minPrice']);
      let maxPrice = Number.parseInt(params['maxPrice']);
      this.results = this.propertyService.searchresults(location,minPrice,maxPrice); 
      this.totalresults = this.results.length;
    });
  //this.subscription = this.messageService.getMessage().subscribe(results => { this.results = results; });
  
  }

}
