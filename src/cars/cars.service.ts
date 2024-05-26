import { Injectable, NotFoundException, Module } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic' 
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id: string ){
        const car = this.cars.find( car => car.id === id );
        if( !car ) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    // create( createCarDto: CreateCarDto){
    //     console.log(createCarDto);
    //     const car: Car = {
    //         id: uuid(),
    //         brand: createCarDto.brand,
    //         model: createCarDto.model
    //     }
    //     this.cars.push(car);
    //     return car;
    // }

    // create( { brand, model } : CreateCarDto){
    //     const car: Car = {
    //         id: uuid(),
    //         brand,
    //         model
    //     }
    //     this.cars.push(car);
    //     return car;
    // }

    create( createCarDto : CreateCarDto){
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto){

    }

}
