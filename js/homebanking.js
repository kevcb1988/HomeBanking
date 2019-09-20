//Declaración de variables

var nombreUsuario = prompt("Ingresa tu usuario");
var codigo_cuenta = parseInt(prompt("Ingresa tu código de cuenta"));
var pass = 1234;
var saldoCuenta = 2000;
var limiteExtraccion = 5000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
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
    var agua = 350;
    var luz = 210;
    var telefono = 425;
    var internet = 570;

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
            alert(`¡TRANSACCIÓN EXITOSA!\nHaz realizado el pago del servicio por un valor de $${servicioSeleccionado}. Vuelve pronto.`);
            saldoCuenta -= servicioSeleccionado;
            actualizarSaldoEnPantalla();
        }
    }

}

            
function transferirDinero() {
    var cuenta_amiga_1 = 1234567;
    var cuenta_amiga_2 = 7654321;

    var cantidad_dinero_transferir = parseInt(prompt(
        "\nTRANSFERENCIA DE DINERO:\nIngresa la cantidad de dinero que deseas transferir.\nLuego selecciona tu cuenta amiga.\n"
    ));

    if(cantidad_dinero_transferir > saldoCuenta){
        alert(
            "\nADVERTENCIA:\nNo tienes suficiente dinero en tu cuenta. Deposita y vuelve a intentarlo."  
        )
    }else{
        var cuenta_amiga = parseInt(prompt(
            "\nTU CUENTA AMIGA:\nIngresa el número de cuenta a la cual deseas realizar la transferencia.\n"
        ));

        if(cuenta_amiga === cuenta_amiga_1 || cuenta_amiga === cuenta_amiga_2){
            transferencia_exitosa();
        }else{
            alert("\nADVERTENCIA:\nCuenta amiga no encontrada. Vuelve a intentarlo."  );
        }
    }
    
    function transferencia_exitosa(){
        alert(
            `TRANSFERENCIA EXITOSA:\nHaz transferido $${cantidad_dinero_transferir} a la cuenta N°${cuenta_amiga}`
        );
        saldoCuenta -= cantidad_dinero_transferir;
        actualizarSaldoEnPantalla();
    }

}


function iniciarSesion() {

    if(codigo_cuenta == pass){
        alert(
            `\nBienvenido(a) Sr(a). ${nombreUsuario.toUpperCase()}.\nEmpieza a disfrutar de nuestros servicios.\n`
        );
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }else{
        alert(
            `\n¡ADVERTENCIA!:\nCódigo de cuenta no valido, tu dinero esta protegido. Vuelve a intentarlo.\n`
        )
        location.reload();
    }
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