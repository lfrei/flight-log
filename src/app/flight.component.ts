import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight',
  template: `
    <div class="row">
        <div class="col-md-2">{{flight.date | date: 'shortDate'}}</div>
        <div class="col-md-3">{{flight.takeoff}}</div>
        <div class="col-md-3">{{flight.landing}}</div>
        <div class="col-md-2">{{flight.duration}} min</div>
        <div class="col-md-2">
            <ngb-rating [(rate)]="flight.rating" [readonly]="true" max="5"></ngb-rating>
        </div>
    </div>
  `
})
export class FlightComponent {
    @Input() flight
    rating
}