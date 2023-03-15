import { Equipo } from "./Equipo";

export class Bomba{
    protected id: string = "";
    protected caudalEntrada: number = 0;
    protected caudalSalida: number = 0;
    private fabricante: string = "";

    constructor(id: string, caudalEntrada: number, caudalSalida: number, fabricante: string){
        this.id = id;
        this.caudalEntrada = caudalEntrada;
        this.caudalSalida = caudalSalida;
        this.fabricante = fabricante;
    }

    fullEquipment(array: Bomba[]){
        console.log(array);
        
    }

    public agregar_bomba(array: Bomba[]){
        array.push(this);
        console.table(`Bomba agregada: ${array}`);
        return;
    }

    public get leerBomba(){
        const bomb = [this.id, this.caudalEntrada, this.caudalSalida, this.fabricante ] 
        console.table(bomb);
        return `
                ${this.id}
                ${this.caudalEntrada}
                ${this.caudalSalida}
                ${this.fabricante}
                `
    }

    public modificarBomba(newId: string, newCaudalEntrada: number, newCaudalSalida: number, newFabricante: string){
        this.id = newId;
        this.caudalEntrada = newCaudalEntrada;
        this.caudalSalida = newCaudalSalida;
        this.fabricante = newFabricante;
        return;
    }

    public eliminarBomba(array: Bomba[]):void{
        const bomaAEliminar = array.findIndex((bomba: Bomba) => bomba.id === this.id);
        array.splice(bomaAEliminar, 1);
        console.log(`Bomba ${this.id} ha sido elimnida`);        
    }
}


