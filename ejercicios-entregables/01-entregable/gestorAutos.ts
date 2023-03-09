import * as fs from 'fs';
import { Auto } from './auto'
const garage = 'garage.json';

export class GestorAutos{
    private cars: Auto[] = [];
    constructor(cars: Auto[]){
        this.cars = cars;
    };
    //* Agrega un nuevo objeto a un listado de autos
    addCars(manufactorer: string, model: string, year: number, color: string, patente: string, speed: number, radio: boolean, volume: number, isOn: boolean){
        const car = new Auto(manufactorer, model, year, color, patente, speed, radio, volume, isOn);
        this.cars.push(car);
        const carsJSON = JSON.stringify(this.cars);
        fs.writeFileSync(garage, carsJSON, 'utf8');
        console.log(`Se ha agregado un nuevo auto a la lista`);
        
    }
    //* obtiene un auto dellistado a partir de la patente
    getCar(patente: any ) {
        const carList = this.cars.find(car => car.getPatente() === patente)
        console.table(carList);        
        return carList;        
    }
    //* modifica un auto del listado 
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
    //*elimina un auto del listado
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
//* lee el archivo, parsea su contenido como un objeto JSON y devuelve un arreglo de objetos Auto creados a partir de los datos del archivo.
export function getCars(cars: string){
    try {
        const data = JSON.parse(fs.readFileSync(garage, 'utf8'));
        const carLot = data.map((data: any) => new Auto(data.manufactorer, data.model, data.year, data.color, data.patente, data.speed, data.radio, data.volume, data.isOn));
        return carLot;
    } catch (error) {
        console.log(error);
        return [];
    }
}