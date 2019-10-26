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
            <div class="col-md-6">Total Flight duration:</div>
            <div class="col-md-6">{{totalDuration}}</div>
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
    totalDuration

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(){
        if(this.flights) {
            this.totalFlights = this.flights.length
            this.totalDuration = this.flights.reduce((sum, current) => sum + current.duration, 0);
        }
    }

}