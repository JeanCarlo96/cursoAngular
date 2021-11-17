/*
    ==== Código de TyperScript ====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calculaISV(productos: Producto[]): [number, number]{

    let total = 0;

    //productos.forEach((producto, i, arr))
    //productos.forEach( (producto) => {
    productos.forEach( ({precio}) => {
        //total += producto.precio;
        total += precio;
    })

    //return total * 0.15;
    return [total, total * 0.15];

}

const articulos = [telefono, tableta];

const [ total, isv ] = calculaISV(articulos);

console.log('Total: ', total);
console.log('ISV: ', isv);