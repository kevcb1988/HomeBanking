//Declaración de variables

var nombreUsuario = "Keven Chaparro";
var saldoCuenta = 200;
var limiteExtraccion = 5000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones creadas por mi

function sumarDinero(dineroDepositado){
    saldoAnterior = saldoCuenta;
    saldoCuenta += dineroDepositado;
    actualizarSaldoEnPantalla();
}

function restarDinero(dineroRetirado){
    if(dineroRetirado > saldoCuenta || dineroRetirado > limiteExtraccion){
        alert(`¡ATENCIÓN! La cantidad de dinero ingresada es superior a tu saldo actual o excede el monto de retiro permitido.`)
    }else if(dineroRetirado % 100 ){
        alert(`¡ATENCIÓN! Solo puedes sacar billetes de $100`)
    }
    else{
        saldoAnterior = saldoCuenta;
        saldoCuenta -= dineroRetirado;
        nuevoSaldoRetirado();
        actualizarSaldoEnPantalla();
    }
}

function nuevoSaldoDepositado(){
    alert(
        `
        TRANSACCIÓN EXITOSA:

        Has ingresado: $${dineroDepositado}
        Saldo anterior: $${saldoAnterior}

        Tu nuevo saldo será: $${saldoCuenta}
        `
    );
}

function nuevoSaldoRetirado(){
    alert(
        `
        TRANSACCIÓN EXITOSA:

        Has retirado: $${dineroRetirado}
        Saldo anterior: $${saldoAnterior}

        Tu nuevo saldo será: $${saldoCuenta}
        `
    );
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion(){
    nuevoLimiteDeExtraccion = parseInt(prompt("¿Cuál es tu nuevo limite de extracción?"))
    limiteExtraccion = nuevoLimiteDeExtraccion;
    actualizarLimiteEnPantalla();
}

function extraerDinero() {
    dineroRetirado = parseInt(prompt("¿Cuánto dinero deseas retirar?"));
    restarDinero(dineroRetirado);
}

function depositarDinero() {
    dineroDepositado = parseInt(prompt("¿Cuánto dinero deseas depositar?"));
    sumarDinero(dineroDepositado);
    nuevoSaldoDepositado();
}

function pagarServicio(){
    var servicioSeleccionado = parseInt(
        prompt(
            `Digita el número del servicio que deseas pagar: \n
            1- Agua
            2- Luz
            3- Télefono
            4- Internet\n`
        )
    );
    
    switch(servicioSeleccionado){
        case 1:
            pagar(agua)
            break;
        case 2:
            pagar(telefono)
            break;
        case 3:
            pagar(luz)
            break;
        case 4:
            pagar(internet)
            break;
        default:
            alert("ALERTA:\nEl número ingresado no es valido. Vuelve a intentar.")
    }

    function pagar(servicioSeleccionado){
        if(servicioSeleccionado > saldoCuenta){
            alert("ALERTA:\nNo tienes suficiente dinero, debes depositar más dinero en tu cuenta. Vuelve a intentarlo.")            
        }else{
            alert(`Haz r`);
            console.log(saldoCuenta);
            saldoCuenta -= servicioSeleccionado;
            actualizarSaldoEnPantalla();
        }
    }

}

            
function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}