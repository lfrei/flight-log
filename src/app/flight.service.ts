import { Injectable } from "@angular/core";

@Injectable()
export class FlightService {

    getFlights(){
        return FLIGHTS
    }

    removeFlight(flight) {
        let index = FLIGHTS.findIndex(x => x.id === flight.id)
        if (index !== -1) {
            FLIGHTS.splice(index, 1)
        } 
    }

    addFlight(flight) {
        flight.id = Math.max.apply(null, FLIGHTS.map(s => s.id)) + 1
        flight.date = new Date(flight.date.year, flight.date.month - 1, flight.date.day);
        
        if(flight.rating > 5){
            flight.rating = 5
        } else if(flight.rating < 1){
            flight.rating = 1
        }
        
        FLIGHTS.push(flight)
      }
}

const FLIGHTS = [
    {
        id: 1,
        date: new Date('9/24/2017'), 
        takeoff: 'Pilatus',
        landing: 'Kriens',
        duration: 40,
        description: 'Wunderschöner Abendflug',
        rating: 4
    },
    {
        id: 2,
        date: new Date('3/29/2018'), 
        takeoff: 'Hoch-Ybrig',
        landing: 'Weglosen Talstation',
        duration: 30,
        description: 'Saisonstart, gute Thermik',
        rating: 3
    }
]