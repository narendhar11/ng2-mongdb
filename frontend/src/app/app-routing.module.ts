import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PropertydetailsComponent } from "./propertydetails/propertydetails.component";
import { SearchresultsComponent } from "./searchresults/searchresults.component";
import { AboutComponent } from "./about/about.component";
import { LandComponent } from "./land/land.component";
import { FarmhouseComponent } from "./farmhouse/farmhouse.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent },
  {
    path: 'property/:id', 
    component: PropertydetailsComponent 
  },
  {
    path: 'searchresults/:location/:minPrice/:maxPrice', 
    component: SearchresultsComponent 
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'land', 
    component: LandComponent
  },
  {
    path: 'farmhouse', 
    component: FarmhouseComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
