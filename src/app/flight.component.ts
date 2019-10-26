import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight',
  template: `
    <div class="row flight-entry">
        <div class="col-md-2">{{flight.date | date: 'dd.MM.yyyy'}}</div>
        <div class="col-md-3">{{flight.takeoff}}</div>
        <div class="col-md-3">{{flight.landing}}</div>
        <div class="col-md-2">{{flight.duration}} min</div>
        <div class="col-md-2">
            <button type="button" class="btn-sm btn-outline-primary float-right" (click)="showDetail = !showDetail">
                <span *ngIf="showDetail">Hide Details</span>
                <span *ngIf="!showDetail">Show Details</span>
            </button>
        </div>
    </div>
    <div *ngIf="showDetail">
        <flight-detail [flight]="flight"></flight-detail>
    </div>
  `,
  styles: [`
  .flight-entry { margin-top: 10px; margin-bottom: 10px; }
`]
})
export class FlightComponent {
    @Input() flight
    showDetail = false
}