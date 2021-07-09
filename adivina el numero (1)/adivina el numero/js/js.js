let randomnumber = Math.floor(Math.random()*1000)+1;
const intento = document.querySelector(".intentos");
const ultimoresult = document.querySelector(".resultado");
const pistahecha = document.querySelector(".pista");
const respuesta = document.querySelector(".cuadrorespuesta");
const boton = document.querySelector(".compruebaboton");
const intentoanterior=document.querySelector(".intentoanterior");
let contador=1;
let resetboton;


boton.addEventListener("click",check);

function onKeyUp(event) {
    var keycode = event.keyCode;
    if(keycode == '13'){
        check(); 
    }
}

function check(){
    let respuestausuario=Number(respuesta.value);
    let intentosresptantes = 10-contador;
    intento.textContent="Tienes "+intentosresptantes+" intentos";    
    intentoanterior.textContent+="("+respuestausuario+")↠";
    if(respuestausuario===randomnumber){
        ultimoresult.textContent="¡Felicitaciones! adivinaste el número mágico";
        pistahecha.textContent=" ";
        setgameover();
    }else if(contador===10){
        ultimoresult.textContent="Agotaste tus inentos";
        pistahecha.textContent=" ";
        setgameover();
    }else{
        ultimoresult.textContent=" ◉◉◉ Continua jugando ◉◉◉";
        if(respuestausuario > randomnumber){
            pistahecha.textContent="El número mágico es menor"
        }else{
            pistahecha.textContent="El número mágico es mayor"
        }
    }
    contador++;
    respuesta.value="";
    respuesta.focus();
}
setInterval(function(){                                 
    var tiempo = new Date();
    var hora = tiempo.getHours();            
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    if (hora < 10){
                    hora = "0" + hora;
    }
    if (minuto < 10){
                    minuto = "0" + minuto;
    }
    if (segundo < 10){
                    segundo = "0" + segundo;                    
    }
    var tiempoReal = hora + ":" + minuto + ":" + segundo;
    $("#reloj").html(tiempoReal);       
},1000);

function setgameover(){
    respuesta.disabled=true;
    boton.disabled=true;
    resetboton=document.createElement("button");
    resetboton.textContent="🗘";
    resetboton.className="btn btn-outline-warning letra fs-5";
    const textoañadido = document.getElementById("textoañadido");
    textoañadido.appendChild(resetboton);
    resetboton.addEventListener("click",resetgame);
}

function resetgame(){
    contador=1;
    intento.textContent="";
    ultimoresult.textContent="";
    pistahecha.textContent="";
    intentoanterior.textContent="";
    resetboton.parentNode.removeChild(resetboton)
    respuesta.disabled=false;
    boton.disabled=false;
    respuesta.value="";
    respuesta.focus();
    randomnumber=Math.floor(Math.random()*1000)+1;
}