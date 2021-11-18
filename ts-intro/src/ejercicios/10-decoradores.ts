/*
    ==== Código de TyperScript ====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSupoerClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSupoerClase);

const miClase = new MiSupoerClase();

console.log(miClase.miPropiedad);