export enum Roscas {
    material1 = 'Material 1',
    material2 = 'Material 2',
    material3 = 'Material 3',
}


export class Kit_Mangueras{
    private id: string = "";
    private elementos: number = 0;
    private medidaPulgadas: number = 0;
    protected roscasMaterial: Roscas = Roscas.material1;

    public constructor(id: string, elementos: number, medidaPulgadas: number, roscasMaterial: Roscas){
        this.id = id;
        this.elementos = elementos;
        this.medidaPulgadas = medidaPulgadas;
        this.roscasMaterial = roscasMaterial;
    }

    fullEquipment(array: Kit_Mangueras[]){
        array.push(this);
        console.table(`Kit agregado:${array}`);
        return;
        
    }

    public agregar_kitMangueras(id: string, elementos: number, medidaPulgadas: number, roscasMaterial: Roscas){
        const kitMangueras = new Kit_Mangueras(id, elementos, medidaPulgadas, roscasMaterial);
        console.log(kitMangueras);
        return kitMangueras;
        
    }

    get leerKitMangueras(){
        const kitMangueras = [this.id, this.elementos, this.medidaPulgadas, this.roscasMaterial];
        console.table(kitMangueras);
        return kitMangueras;
    }

    public modificarKitMangueras(newId: string, newElementos: number, newMedidaPulgadas: number, newRoscasMaterial: Roscas){
        this.id = newId;
        this.elementos = newElementos;
        this.medidaPulgadas = newMedidaPulgadas;
        this.roscasMaterial = newRoscasMaterial;
    }

    public eliminarKitmangueras(array: Kit_Mangueras[]):void{
        const kitMangueraAEliminar = array.findIndex((manguera: Kit_Mangueras) => manguera.id === this.id);
        array.splice(kitMangueraAEliminar, 1);
        console.log(`El kit de mangueras ${this.id} ha sido eliminado`);        
    }
}