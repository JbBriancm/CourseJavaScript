// si se van a exportar variables o clases se deben de meter entre las llaves si son funciones puede meterlas en un obj
//la variable por default va despues de import
import saludar,{Saludo,funciones} from "./constantes.js";
funciones.sumar(4,5);
funciones.restar(10,2);
funciones.multiplicar(2,3);
funciones.dividir(25,5);
saludar();
let saludo = new Saludo();
saludo;