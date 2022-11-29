let estadoLicuadora ="apagada";
var sonidoLicuadora = document.getElementById("blender-sound");//Traigo mi id del html
var botonLicuadora = document.getElementById("blender-button_sound"); //Traigo mi id del html
var index = document.getElementById("blender"); //Guardo mi index(licuadora) en mi JS   

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerBrr();
        index.classList.add("active"); //Busca el active en el html gracias al blender de arriba en el get elementary
        /* console.log("Licuadora encendida"); */
    }else{
        estadoLicuadora ="apagada";
        hacerBrr();
        index.classList.remove("active"); //Para que deje de moverse la licuadora cuando este encendida
        /* console.log("Licuadora apagada"); */
    }
}


function hacerBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }
    else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime =0;
    }
}
