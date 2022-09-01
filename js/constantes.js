


//funciones declaradas
function sumar(a,b){
  console.log(a+b);
}

function restar(a,b){
    console.log(a-b);
}

function multiplicar(a,b){
    console.log(a*b);
}

function dividir(a,b){
    console.log(a/b);
}

export const funciones = {
    sumar,
    multiplicar,
    restar,
    dividir
}

let name = 'Brian Castañeda';
export default function saludar(){
  console.log(`Hola bienvenido ${name}`);
}

export class Saludo{
  constructor(){
    console.log('Hola este es un saludpo')
  }
}


//funcion expresada  se guarda en variable

/*

const hello = () => console.log('Hola mundo);

*/