import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightService } from './flight.service';

@Component({
    selector: 'add-flight',
    templateUrl: 'add-flight.component.html'
})
export class AddFlightComponent {
    newFlight

    constructor(public activeModal: NgbActiveModal, private flightService:FlightService){}

    close(){
        this.activeModal.close("Close click")
    }

    saveFlight(newFlight){
        this.flightService.addFlight(newFlight)
        this.activeModal.close("Add click")
    }

}