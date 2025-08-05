//variables
let numeroSecreto = 3;
let numeroUsuario = prompt("me indicas un numero entre 1 y 10 porfavor:");
console.log(numeroUsuario);
/*este codigo realiza una comparacion*/
if (numeroUsuario == numeroSecreto){    
    //acertamos la condicion se cumplio
    alert(`Acertaste, el numero es: ${numeroSecreto}`);
}
else {
    //no acertamos la condicion no se cumplio
    alert('lo siento, No acertaste el numero');
}