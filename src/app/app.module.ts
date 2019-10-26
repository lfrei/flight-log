import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlightService } from './flight.service';
import { FlightComponent } from './flight.component';
import { FlightLogComponent } from './flight-log.component';
import { FlightDetailComponent } from './flight-detail.component';

@NgModule({
  declarations: [
    FlightLogComponent,
    FlightComponent,
    FlightDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    FlightService
  ],
  bootstrap: [FlightLogComponent]
})
export class AppModule { }
