import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-log',
  template: `
    <div>
      <h1>Flight log</h1>
      <hr>
      <div *ngFor="let flight of flights">
        <flight [flight]="flight"></flight>
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
