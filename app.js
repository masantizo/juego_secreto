//DOM  Document Object Model
let intentos = 1;
let numeroMaximo = 3;
let listaNumerosSorteados = [];
let numeroSecreto = 0;
//console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);

    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario===numeroSecreto);
    //alert('Click desde el botón');
  
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos ===1 ? 'vez' : 'veces')} !!`);
        document.querySelector('p').style.color = 'orange';

        //document.querySelector('#reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').disabled = true;
        document.querySelector('#reiniciar').disabled = false;              
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
    } 
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);

    // si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        console.log(listaNumerosSorteados);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    limpiarCaja();      
    intentos = 1
    numeroSecreto = generarNumeroSecreto();   
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    document.querySelector('p').style.color = 'white';
    document.querySelector('#intentar').disabled = false;
    document.querySelector('#reiniciar').disabled = true;
}


function reiniciarJuego() {
    //Limpiar caja
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Iniciar el numero intentos
    
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p',"Ya se sortearon todos los números posibles");
        document.querySelector('p').style.color = 'red';

        document.querySelector('#valorUsuario').style.display = 'none';

        document.querySelector('#intentar').style.display = 'none';
        document.querySelector('#intentar').disabled = true;

        document.querySelector('#reiniciar').style.display = 'none';
        document.querySelector('#reiniciar').disabled = true;   
    } else {
        condicionesIniciales();
    }       
   return;
}

condicionesIniciales();
