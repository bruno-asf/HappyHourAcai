/*============================================
             MENU HAMBURGUEER
==============================================*/

/* $(document).ready(function(){

    $("#menu--barras").click(function(){

        $("#nav--menu").toggleClass("nav--menu--ativo");
    })

}) */


let menu = document.getElementById("nav--menu");

function MostrarMenu(){

    console.log("Executou");
    
    if(getComputedStyle(menu).display != "none"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
}


/*============================================
             BUTTON LEARN MORRE
==============================================*/

function learnMore(id, elemento){
    elemento.style.display = "none";
    document.getElementById(id).style.display = "block";
}


/*============================================
             CARROSSEL SLIDE
==============================================*/

let slideAtual = 0;

let listaSlides = ["area5-banner1", "area5-banner2", "area5-banner3", "area5-banner4"];

setInterval(slide, 4000);

function slide(){

    console.log("SlideAtual", slideAtual);

    if(slideAtual > 0){
        document.querySelector("#carrossel").classList.remove(listaSlides[slideAtual-1]);
    }else if(slideAtual == 0){
        document.querySelector("#carrossel").classList.remove(listaSlides[ listaSlides.length - 1 ])
    }

    document.querySelector("#carrossel").classList.add(listaSlides[slideAtual]);

    slideAtual++;

    if(slideAtual > (listaSlides.length) - 1){
        slideAtual = 0;
    }
}