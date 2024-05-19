import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { v4 } from 'uuid';

@Controller('cars')
export class CarsController {

    // La inyeccion de dependencias se realiza en el constructor
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version: '4' }) ) id: string ){       
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() body:any ){
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() body:any
    ){
        return {
            id,
            body
        };
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        return {
            ok: true,
            id,
            method: 'delete'
        };
    }
}
