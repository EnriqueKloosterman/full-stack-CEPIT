import { Equipo } from "./Equipo";
import { Bomba } from "./Bomba";
import { Kit_Mangueras, Roscas } from "./Kit_Mangueras";
import { Motor, Eficiencia} from "./Motor";
import { Motor_Electrico } from "./Motor_Electrico";
import { Motor_Combustible, Combustible } from "./Motor_Combustible";


const bomba1 = new Bomba('B1',4, 5, 'Jgh');
bomba1.leerBomba;
bomba1.modificarBomba('B1_2',4.1, 5.1, 'Kartan');
bomba1.leerBomba;

const manguera1 = new Kit_Mangueras('id Rosca', 5, 1/8, Roscas.material1);
manguera1.leerKitMangueras;
manguera1.modificarKitMangueras('id Rosca', 5, 1/8, Roscas.material3)
manguera1.leerKitMangueras;

const MCombustion = new Motor_Combustible('id MC', 1000, Eficiencia.B, 'Acme', '3CV', Combustible.Diesel);
MCombustion.motorCombustible;
MCombustion.modificarMotorCombustible('id MC', 1000, Eficiencia.B, 'Acme', '3CV', Combustible.Gasolina)
MCombustion.motorCombustible;

const MEleictrico1 = new Motor_Electrico('id ME', 1000, Eficiencia.A, 'Acme', 'Amp', 15, true);
MEleictrico1.leerMotorElectrico;
MEleictrico1.modificarMotorElectrico('id ME', 1000, Eficiencia.A, 'Acme', 'Amp', 15, false);
MEleictrico1.leerMotorElectrico;

const equipo1 = new Equipo('id motor E', 'desc motor', new Date() , new Date(), bomba1, manguera1, MEleictrico1);
equipo1.leerEquipo;


const equipo2 = new Equipo('id motor', 'desc motor', new Date() , new Date(), bomba1, manguera1, MCombustion);
equipo2.leerEquipo;
let equipos: Equipo[] = []
equipos.push(equipo1);
equipos.push(equipo2);
console.log(equipos);




equipo1.eliminaEquipo(equipos);
console.log(equipos);
