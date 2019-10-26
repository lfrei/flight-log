import { Component, Input } from '@angular/core';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight',
  template: `
    <div class="row flight-entry">
        <div class="col-md-2">{{flight.date | date: 'dd.MM.yyyy'}}</div>
        <div class="col-md-3">{{flight.takeoff}}</div>
        <div class="col-md-3">{{flight.landing}}</div>
        <div class="col-md-2">{{flight.duration}} min</div>
        <div class="col-md-2 float-right">
            <button type="button" class="btn-sm btn-outline-primary float-right action-btn" (click)="remove(flight)">
                <i class="fa fa-trash"></i>
            </button>
            <button type="button" class="btn-sm btn-outline-primary float-right action-btn" (click)="showDetail = !showDetail">
                <i class="fa fa-info-circle"></i>
            </button>
        </div>
    </div>
    <div *ngIf="showDetail">
        <flight-detail [flight]="flight"></flight-detail>
    </div>
  `,
  styles: [`
  .flight-entry { margin-top: 10px; margin-bottom: 10px; }
  .action-btn {margin-left: 5px; }
`]
})
export class FlightComponent {
    @Input() flight
    showDetail = false

    constructor(private flightService:FlightService){}

    remove(flight) {
        this.flightService.removeFlight(flight)
    }
}