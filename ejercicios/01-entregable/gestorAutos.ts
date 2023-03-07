import * as fs from 'fs';
import { Auto } from './auto'
const garage = 'garage.json';

export class gestorAutos{
    private cars: Auto[] = [];
    constructor(cars: Auto[]){
        this.cars = cars;
    };
    addCars(manufactorer: string, model: string, year: number, color: string, patente: string, speed: number, radio: boolean, volume: number, isOn: boolean){
        const car = new Auto(manufactorer, model, year, color, patente, speed, radio, volume, isOn);
        this.cars.push(car);
        const carsJSON = JSON.stringify(this.cars);
        fs.writeFileSync(garage, carsJSON, 'utf8');
        console.log(`Se ha agrergado un nuevo auto a la lista`);
        
    }
    getCars(patente: any ) {
        const carList = this.cars.find(car => car.getPatente() === patente)
        console.table(carList);        
        return carList;        
    }
    modifyCar(patente: any, carModified: Auto){
        const carIndex = this.cars.findIndex(car => car.getPatente() === patente);
        if(carIndex === -1){
            console.log(`No existe el auto con la patente ${patente}`);
            return;
        }
        this.cars[carIndex] = carModified;
        const carsJSON = JSON.stringify(this.cars);
        fs.writeFileSync(garage, carsJSON, 'utf8');
    }
    deleteCar(patente: string){
        const carIndex = this.cars.findIndex(car => car.getPatente() === patente);
        if(carIndex === -1){
            console.log(`No existe el auto con la patente ${patente}`);
            return;
        }
        this.cars.splice(carIndex, 1);;
        const carsJSON = JSON.stringify(this.cars);
        fs.writeFileSync(garage, carsJSON, 'utf8');
    }

}

function getCars(cars: string){
    try {
        const data = JSON.parse(fs.readFileSync(garage, 'utf8'));
        const carLot = data.map((data: any) => new Auto(data.manufactorer, data.model, data.year, data.color, data.patente, data.speed, data.radio, data.volume, data.isOn));
        return carLot;
    } catch (error) {
        console.log(error);
        return [];
    }

}

const carList = getCars('garage');

const gestor =  new gestorAutos(carList);
// gestor.addCars('Dodge', 'Charger', 1963, 'Naranja', 'GRA L01',0, false, 11, false);
// gestor.modifyCar('tbc 710', new Auto('Chevrolet','Corsa', 2005,'Azul','tbc 710', 0, false, 11, false));
gestor.getCars('tbc 710');
// gestor.deleteCar('GRA L01');
console.table(carList)