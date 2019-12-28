import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'stats',
  template: `
    <div class="modal-header">
        <h4 class="modal-title">Flight Statistics</h4>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="col-md-6">Total Flights:</div>
            <div class="col-md-6">{{totalFlights}}</div>
        </div>
        <div class="row">
            <div class="col-md-6">Total Flight days:</div>
            <div class="col-md-6">{{totalFlightDays}}</div>
        </div>
        <div class="row">
            <div class="col-md-6">Total Flight duration:</div>
            <div class="col-md-6">{{secondsToDhm(totalDuration)}}</div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class StatsComponent implements OnInit {
    @Input() flights
    totalFlights
    totalFlightDays
    totalDuration

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(){
        if (this.flights) {
            this.totalFlights = this.flights.length;
            this.totalFlightDays = this.getFlightDays(this.flights);
            this.totalDuration = this.getDuration(this.flights);
        }
    }

    getFlightDays(flights) {
        return flights
            .map(flight => this.toDayOnly(flight.date))
            .map(date => date.getTime())
            .filter((date, index, self) => index === self.indexOf(date))
            .length;
    }

    toDayOnly(date) {
        return new Date(Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()));
    }

    getDuration(flights) {
        return flights
            .reduce((sum, current) => sum + current.duration, 0);
    }

    secondsToDhm(minutes) {
        const seconds = Number(minutes * 60);
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor(seconds % (3600 * 24) / 3600);
        const m = Math.floor(seconds % 3600 / 60);

        const dDisplay = d > 0 ? d + (d === 1 ? ' day, ' : ' days, ') : '';
        const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : '';
        const mDisplay = m > 0 ? m + (m === 1 ? ' minute ' : ' minutes ') : '';
        return dDisplay + hDisplay + mDisplay;
    }

}