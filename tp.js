let menu1 = "Bienvenido al SIMULADOR de Cajero Automático\n                   de la red FIORENTINO \n\n"
let user = ""
let clave = ""
let op = ""
let menu2 = "ATM \n1 -> DEPOSITAR \n2 -> RETIRAR \n3 -> CONSULTAR SALDO \n4 -> CONSULTAR MOVIMIENTOS \n5 -> FINALIZAR \n"
/* let res = "" */
let saldo = 0
let retiro = 0
let mov = ""
let mje = ""

bienvenida()
login()
validar(user, clave)

do {
    
    op = prompt( menu1 + menu2)
    switch (op) {
        case "1":
            depositar()
            informar(mje)
            break;
        case "2":
            retirar()
            informar(mje)
            break;
        case "3":
            mje = "Su saldo es de : "+ saldo
            informar(mje)
            break;
        case "4":
            mje = "Sus Movimientos :\n Ingresos       Retiros"+ mov +"\n----------------------------\nSu saldo:  "+saldo
            informar(mje)
            break;
                
        default:
            break;
    }
} while (op != 5);

function bienvenida(menu1) {
    alert(menu1)
}

function validar(user, clave) {
    while ((user != "juanca") || (clave =! "juanca")) {
    alert("Usuario y/o clave inválidas\nIntente nuevamente > ")
    login()
    }
}

function login() {
    user = prompt("Ingresa tu usuario (juanca) > ")
    clave = prompt("Ingresa tu Clave (juanca) > ")
    return user, clave
}

function depositar(params) {
    depo = Number(prompt("Cuanto dinero desea ingresar? > "))
    saldo = saldo + depo
    mov = mov +"\n +"+depo
    mje = "Ud. ha ingresado : "+ depo + " AR$\nSu saldo es de " + saldo + " AR$\n"
    return mje
}

function retirar() {
    retiro = Number(prompt("Cuanto dinero desea Retirar? > "))
    saldo = saldo - retiro
    mov = mov + "\n                  -"+ retiro
    mje = "Ud. ha retirado : "+ retiro + " AR$\nSu saldo es de " + saldo
    return mje
}

function informar(mje) {
    alert(mje)
}