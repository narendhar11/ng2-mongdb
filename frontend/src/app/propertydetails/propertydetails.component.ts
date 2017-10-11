import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Property } from '../property';
import { PropertyService } from "../property.service";

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html'
})
export class PropertydetailsComponent implements OnInit, OnDestroy {
  property: Property;
  sub:any;
  constructor(private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.property = this.propertyService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
