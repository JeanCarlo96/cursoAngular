/*
    ==== Código de TyperScript ====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
//const { volumen, segundo, cancion, detalles: {autor} } = reproductor;
const { autor } = detalles;

/*
console.log('El volumen actual es de: ', reproductor.volumen);
console.log('El segundo actual es de: ', reproductor.segundo);
console.log('La canción actual es de: ', reproductor.cancion);
console.log('El autor actual es de: ', reproductor.detalles.autor);
*/

/*
console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La canción actual es de: ', cancion);
console.log('El autor actual es de: ', autor);
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;
//const [ , , p3 ] = dbz;

//console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);