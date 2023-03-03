const Ingreso = document.getElementById("ingreso")
const Display = document.getElementById("display")
const Boton = document.getElementById("boton")


Boton.addEventListener("click" ,()=>{
    cuentaRegresiva(Ingreso.value)
})



function cuentaRegresiva (cuenta){
    if(cuenta == 0){
        Display.textContent = cuenta;
        return cuenta
    }else{
        console.log(cuenta)
        Display.textContent = cuenta;
        return setTimeout(
            cuentaRegresiva,1000,cuenta-1)
    }
}
