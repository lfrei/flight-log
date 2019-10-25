import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-log',
  template: `
    <div class="container">
      <h1>Flight log</h1>
      <hr>
      <div class="row">
        <div *ngFor="let flight of flights" class="col-md-12">
          <flight [flight]="flight"></flight>
        </div>
      </div>
    </div>
  `
})
export class FlightLogComponent implements OnInit {
  flights

  constructor(private flightService:FlightService){}

  ngOnInit() {
    this.flights = this.flightService.getFlights()
    console.log(this.flights)
  }

}
