import Persona from "./InterfacePersona"

export default abstract class MiembroClub implements Persona{
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    documento: number;
    telefono: number;
    miembroDesde: string;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, doucumento: number, telefono: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = new Date(fechaNacimiento).toLocaleString();
        this.documento = doucumento;
        this.telefono = telefono;
        this.miembroDesde = new Date().toLocaleString();
    }

    
}