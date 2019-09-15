//Declaración de variables

// var nombreUsuario = prompt("Ingresa tu nombre");
var nombreUsuario = "Keven Chaparro";
var saldoCuenta = 20000;
var limiteExtraccion = 5000;

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

function pagarServicio() {

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