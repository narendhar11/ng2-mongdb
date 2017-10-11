import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

//Property Services
import { PropertyService } from './property.service';

//Pipe filter
import { UniquePipe } from './uniquevalue.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { AboutComponent } from './about/about.component';
import { LandComponent } from './land/land.component';
import { FarmhouseComponent } from './farmhouse/farmhouse.component';
import { PlotsComponent } from './plots/plots.component';
import { FlatsComponent } from './flats/flats.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true }); 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropertydetailsComponent,
    SearchresultsComponent,
    AboutComponent,
    LandComponent,
    FarmhouseComponent,
    PlotsComponent,
    FlatsComponent,
    UniquePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting,
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
