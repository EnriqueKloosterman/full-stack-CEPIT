// Armar una base de datos de libros• Hacer el planteo de las clases necesarias
// • Implementar la clase Libro
// • Implementar la clase GestorLibros → debe 
// soportar insertar/consultar/modificar/eliminar libros (la entrada de información por teclado)
// • Luego incorporar en donde se crea necesario un mecanismo para leer libros desde un archivo de texto

import { table } from 'console';
import * as fs from 'fs';
const books = 'libros.json'

class Libro{
    nombre: string;
    autor: string;
    genero: string;
    paginas: number;
    editorial: string;
    idioma: string;

    
    constructor(nombre: string, autor: string, genero: string, paginas: number, editorial: string, idioma: string){
        this.nombre = nombre,
        this.autor = autor,
        this.genero = genero,
        this.paginas = paginas,
        this.editorial = editorial,
        this.idioma = idioma
    }
};


class GestorLibros{
    private libros: Libro[] = [];
    constructor(libros: Libro[]){
        this.libros = libros
    };
    agregarLibro(nombre: string, autor: string, genero: string, paginas: number, editorial: string, idioma: string){
        const libroIndex = this.libros.findIndex(libro => libro.nombre === nombre);
        if(libroIndex !== -1){
            console.log('El Libro ya se encuentra en la lista');
        } else{
            const libro = new Libro(nombre, autor, genero, paginas, editorial, idioma);
            this.libros.push(libro);
            const librosJSON = JSON.stringify(this.libros);
            fs.writeFileSync(books,librosJSON);
        }
    };
    consultarLibro(nombre: string): Libro | undefined{
        const consulta = this.libros.find(libro => libro.nombre === nombre);
        if(consulta){
            return consulta
        }else{
            console.log("el libro no se encuetra en la lista");
        }
    };
    modificarLibro(nombre: string, nuevoLibro: Libro){
        const libroIndex = this.libros.findIndex(libro => libro.nombre === nombre);
        if(libroIndex === -1){
            console.log("ese libro no se encunetra en la lista")
        }
        this.libros[libroIndex] = nuevoLibro;
        const librosJSON = JSON.stringify(this.libros);
        fs.writeFileSync(books, librosJSON);
        
    };
    eliminarLibro(nombre: string){
        const libroIndex = this.libros.findIndex(libro => libro.nombre === nombre);
        if(libroIndex === -1){
            console.log('El libro no se encuentra en la lista, por lo tanto no se puede borrar');
        }
        this.libros.splice(libroIndex, 1);
        const librosJSON = JSON.stringify(this.libros);
        fs.writeFileSync(books, librosJSON);
    }

    
}

function leer(libros:string): Libro[] {
    try{
        const data = JSON.parse(fs.readFileSync(books, 'utf8'));
        const libreria = data.map((data: any) => new Libro(data.nombre, data.autor, data.genero, data.paginas, data.editorial, data.idioma));
        return libreria;
    }
    catch(err)
    {
        console.log(err);
        return []
    }
}



const biblioteca = leer('books')
const gestor = new GestorLibros(biblioteca);
// gestor.agregarLibro( 'ree', 'Neil Gaiman', 'fantasia',  207,  'Norma Editorial', 'español');
// gestor.modificarLibro('Catch 22', { nombre: 'Catch 22', autor:'Joseph Heller', genero: 'novela', paginas: 464, editorial: 'Dell Editions', idioma: 'ingles' })
// gestor.eliminarLibro('Catch 22');
const consulta = gestor.consultarLibro('Stardust');
console.table(consulta)

console.table(biblioteca);




