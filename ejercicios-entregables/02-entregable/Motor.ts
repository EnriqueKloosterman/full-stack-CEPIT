


export enum Eficiencia {
    A = 'A',
    B = 'B',
    C = 'C',
}

export class Motor{
    public id: string = "";
    protected potencia: number = 0;
    public eficiencia: Eficiencia = Eficiencia.A;
    public fabricante: string = "";

    constructor(id: string, potencia: number, eficiencia: Eficiencia, fabricante: string){
        this.id = id;
        this.potencia = potencia;
        this.eficiencia = eficiencia;
        this.fabricante = fabricante;
    }

    public leerMotor(){
        const engine = [this.id, this.potencia, this.eficiencia, this.fabricante]
        console.table(engine);
        return engine;
    }

    public modificarMotor(newId: string, newPotecia: number, newEficiencia: Eficiencia, newFabricante: string){
        this.id = newId;
        this.potencia = newPotecia;
        this.eficiencia = newEficiencia;
        this.fabricante = newFabricante;
        return;
    }
}