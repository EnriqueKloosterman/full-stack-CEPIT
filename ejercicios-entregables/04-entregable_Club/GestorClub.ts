import { Deporte, Jugador } from './Jugador';

import * as fs from 'fs';
const readlineSync = require('readline-sync')
const sociosJSON = 'socios.json'

export class GestorClub{
    constructor(){
        const soscioJSON =
        fs.writeFileSync('socios.json', '[]')
    }

    read() { return fs.readFileSync('socios.json')};
    data() { return JSON.parse(fs.readFileSync('socios.json', 'utf8'))}

    agregarSocios(){
        const arrayDeportes = ['futbol', 'basquet', 'zumba', 'voley', 'natacion', 'gym']
        const nombre = readlineSync.question('Nombre del socio: ').toUpperCase();
        const apellido = readlineSync.question('Apellido del socio: ').toUpperCase();
        const fechaNacimiento = readlineSync.question('Fecha de nacimento (yyyy/mm/dd): ');
        const documento = readlineSync.question('Nro de documento del socio: ');
        const telefono = readlineSync.question('Nro de telefono del socio: ');
        const deporte = readlineSync.keyInSelect(arrayDeportes, 'Seleccione el deporte: ');

        const nuevoSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);

        const datosActuales = JSON.parse(fs.readFileSync(sociosJSON, 'utf8'));
        const socio = [...datosActuales, nuevoSocio];
        fs.writeFileSync(sociosJSON, JSON.stringify(socio, null, 2));

    }
    buscarPorNombre(nombre: string){
        const nombreSocio = this.data().find((socio: {nombre: string}) => socio.nombre === nombre.toUpperCase())
        console.log(nombreSocio);
        return nombreSocio;
        
    }
    buscarPorApellido(apellido: string){
        const apellidoSocio = this.data().find((socio: {apellido: string}) => socio.apellido === apellido.toUpperCase())
        console.log(apellidoSocio);
        return apellidoSocio;
        
    }
    buscarPorDocumento(documento: string){
        const documentoSocio = this.data().find((socio: {documento: string}) => socio.documento === documento)
        console.log(documentoSocio);
        return documentoSocio;
    }
    buscarPorTelefono(telefono: string){
        const telefonoSocio = this.data().find((socio: {telefono: string}) => socio.telefono === telefono)
        console.log(telefonoSocio);
        return telefonoSocio;
    }
}
