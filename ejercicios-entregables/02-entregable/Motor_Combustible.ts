import { Motor, Eficiencia } from "./Motor";

export enum Combustible{
    Gasolina = "Gasolina",
    Diesel = "Diesel",
    
}

export class Motor_Combustible extends Motor{

    private cilindros: string = "";
    private tipoCombustible: Combustible = Combustible.Diesel;

    constructor(id: string, potencia: number, eficiencia: Eficiencia, fabricante: string, cilindros: string, tipoCombustible: Combustible){
        super(id, potencia, eficiencia, fabricante)
        this.cilindros = cilindros;
        this.tipoCombustible = tipoCombustible;
    }

    fullEquipment(array: Motor_Combustible[]){
        console.log(array);        
    }

    public agregar_motorCombustible(array: Motor_Combustible[]){
        array.push(this);
        console.table(`Motor de Combustion agregado; ${array}`);
        return;        
    }

    get motorCombustible(){
        const combustionEngine = [ this.id, this.potencia, this.eficiencia, this.fabricante, this.cilindros, this.tipoCombustible]
        console.table([combustionEngine]);
        return combustionEngine;
        
    }

    public modificarMotorCombustible(newId: string, newPotecia: number, newEficiencia: Eficiencia, newFabricante: string, newCilindros: string, newTipoCombustible: Combustible){
        this.id = newId;
        this.potencia = newPotecia;
        this.eficiencia = newEficiencia;
        this.fabricante = newFabricante;
        this.cilindros = newCilindros;
        this.tipoCombustible = newTipoCombustible;
        return;
    }

    public eliminarMotorCombustible(array: Motor_Combustible[]):void{
        const motorAEliminar = array.findIndex((motor_c: Motor_Combustible) => motor_c.id === this.id);
        array.splice(motorAEliminar, 1);
        console.log(`El motor ${this.id} ha sido elimnido`);        
    }
}