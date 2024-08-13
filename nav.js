window.onscroll=function(){
    var barra= document.getElementById("navbar");
    if(window.pageYOffset > 50){ /* window.pageyoffset devuelve cuanto se a dado scroll */
        barra.classList.add("pegada");
    }else{
        barra.classList.remove("pegada");
    }
}