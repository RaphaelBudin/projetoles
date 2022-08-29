export function getCurrentDateTime(separador=''){

    let newDate = new Date()
    let dia = newDate.getDate();
    let mes = newDate.getMonth() + 1;
    let ano = newDate.getFullYear();
    let hora = newDate.getHours();
    let minuto = newDate.getMinutes();
    let segundo = newDate.getSeconds();
    let milisegundo = newDate.getMilliseconds();
    
    let string = '';
    string += ano + separador;
    string += mes + separador;
    string += dia + separador;
    string += hora + separador;
    string += minuto + separador;
    string += segundo + separador;
    string += milisegundo;

    return string;
}