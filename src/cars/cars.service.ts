import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            name: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            name: 'Honda',
            model: 'Civic' 
        },
        {
            id: 3,
            name: 'Jeep',
            model: 'Cherokee'
        }
 
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id: number ){
        const car = this.cars.find( car => car.id === id );
        return car;
    }

}
