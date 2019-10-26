import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlightService } from './flight.service';
import { FlightComponent } from './flight.component';
import { FlightLogComponent } from './flight-log.component';
import { FlightDetailComponent } from './flight-detail.component';
import { AddFlightComponent } from './add-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightLogComponent,
    FlightComponent,
    FlightDetailComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FlightService
  ],
  bootstrap: [FlightLogComponent],
  entryComponents: [AddFlightComponent]
})
export class AppModule { }
