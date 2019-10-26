import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFlightComponent } from './add-flight.component';
import { StatsComponent } from './stats.component';

@Component({
  selector: 'flight-log',
  template: `
    <div class="container">
      <h1>
        <span class="title">Flight log</span>
        <button type="button" (click)="add()" class="btn btn-outline-primary action-btn">
          <i class="fa fa-plus-circle"></i>
        </button>
        <button type="button" (click)="stats()" class="btn btn-outline-primary action-btn">
          <i class="fa fa-cogs"></i>
        </button>
      </h1>
      <hr>
      <div class="row">
        <div *ngFor="let flight of flights" class="col-md-12">
          <flight [flight]="flight"></flight>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .title { margin-right: 20px; }
    .action-btn {margin-left: 5px; }
  `]
})
export class FlightLogComponent implements OnInit {
  flights

  constructor(private flightService:FlightService, private modalService: NgbModal){}

  ngOnInit() {
    this.flights = this.flightService.getFlights()
  }

  add(){
    this.modalService.open(AddFlightComponent);
  }

  stats(){
    const modalRef = this.modalService.open(StatsComponent);
    modalRef.componentInstance.flights = this.flights;
  }

}
