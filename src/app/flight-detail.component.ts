import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight-detail',
  template: `
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">Date:</div>
                <div class="col-md-3">{{flight.date | date: 'dd.MM.yyyy'}}</div>
            </div>
            <div class="row">
                <div class="col-md-3">Takeoff:</div>
                <div class="col-md-3">{{flight.takeoff}}</div>
            </div>
            <div class="row">
                <div class="col-md-3">Landing:</div>
                <div class="col-md-3">{{flight.landing}}</div>
            </div>
            <div class="row">
                <div class="col-md-3">Duration:</div>
                <div class="col-md-3">{{flight.duration}} min</div>
            </div>
            <div class="row">
                <div class="col-md-3">Description:</div>
                <div class="col-md-7">{{flight.description}}</div>
            </div>
            <div class="row">
                <div class="col-md-3">Rating:</div>
                <div class="col-md-3">
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