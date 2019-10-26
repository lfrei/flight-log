import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight-detail',
  template: `
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-2">Date:</div>
                <div class="col-md-2">{{flight.date | date: 'dd.MM.yyyy'}}</div>
            </div>
            <div class="row">
                <div class="col-md-2">Takeoff:</div>
                <div class="col-md-2">{{flight.takeoff}}</div>
            </div>
            <div class="row">
                <div class="col-md-2">Landing:</div>
                <div class="col-md-2">{{flight.landing}}</div>
            </div>
            <div class="row">
                <div class="col-md-2">Duration:</div>
                <div class="col-md-2">{{flight.duration}} min</div>
            </div>
            <div class="row">
                <div class="col-md-2">Description:</div>
                <div class="col-md-8">{{flight.description}}</div>
            </div>
            <div class="row">
                <div class="col-md-2">Rating:</div>
                <div class="col-md-2">
                    <ngb-rating [(rate)]="flight.rating" [readonly]="true" max="5"></ngb-rating>
                </div>
            </div>
        </div>
    </div>
  `
})
export class FlightDetailComponent {
    @Input() flight
}