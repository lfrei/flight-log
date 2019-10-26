import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFlightComponent } from './add-flight.component';
import { StatsComponent } from './stats.component';
import { ExportService } from './export.service';

@Component({
  selector: 'flight-log',
  templateUrl: 'flight-log.component.html',
  styles: [`
    .title { margin-top: 10px; }
    .action-btn {margin-right: 5px; }
  `]
})
export class FlightLogComponent implements OnInit {
  flights
  filteredFlights

  constructor(
    private flightService:FlightService, 
    private modalService: NgbModal,
    private exportService:ExportService){}

  ngOnInit() {
    this.flights = this.flightService.getFlights()
    this.filteredFlights = this.flights
  }

  getYears(): [] {
    return this.flights
        .map(flight => flight.date.getFullYear())
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort()
  }

  add(){
    this.modalService.open(AddFlightComponent);
  }

  stats(){
    const modalRef = this.modalService.open(StatsComponent);
    modalRef.componentInstance.flights = this.filteredFlights;
  }

  export(){
    this.exportService.exportJson(this.filteredFlights);
  }

  selectYear(year){
    this.filteredFlights = this.flights.filter(flight => flight.date.getFullYear() === year)
  }

  selectAll(){
    this.filteredFlights = this.flights
  }

}
