import { Injectable } from "@angular/core";

@Injectable()
export class FlightService {

    getFlights(){
        return FLIGHTS
    }

}

const FLIGHTS = [
    {
        date: new Date('9/24/2017'), 
        takeoff: 'Pilatus',
        landing: 'Kriens',
        duration: 40,
        description: 'Wunderschöner Abendflug',
        rating: 4
    },
    {
        date: new Date('3/29/2018'), 
        takeoff: 'Hoch-Ybrig',
        landing: 'Weglosen Talstation',
        duration: 30,
        description: 'Saisonstart, gute Thermik',
        rating: 3
    }
]