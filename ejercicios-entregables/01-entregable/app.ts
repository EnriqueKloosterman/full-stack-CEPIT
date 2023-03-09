import { Auto } from "./auto";
import { GestorAutos, getCars } from "./gestorAutos";


const carList = getCars('garage');

const gestor =  new GestorAutos(carList);
// gestor.addCars('Dodge', 'Charger', 1963, 'Naranja', 'GRA L01',0, false, 11, false);
// gestor.modifyCar('tbc 710', new Auto('Chevrolet','Corsa', 2005,'Azul','tbc 710', 0, false, 11, false));
gestor.getCar('tbc 710');
// gestor.deleteCar('GRA L01');
console.table(carList)