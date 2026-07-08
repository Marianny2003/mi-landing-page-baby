/*
=====================================================
    APP.JS
    Configuración principal de la invitación

    Proyecto:
    Revelación de género
    Luzmairis & Miguel

=====================================================
*/


// =====================================================
// ESPERAR CARGA COMPLETA
// =====================================================


window.addEventListener("load", () => {



    /*
    -------------------------------------------------
    Inicializar AOS
    Animaciones al hacer scroll
    -------------------------------------------------
    */


    AOS.init({

        duration: 1200,

        once: true,

        offset: 80,

        easing: "ease-in-out"


    });







    /*
    -------------------------------------------------
    Ocultar pantalla de carga
    -------------------------------------------------
    */


    const loader = document.getElementById("loader");



    if(loader){


        setTimeout(() => {


            loader.classList.add("hide");



        },1500);



    }





    /*
    -------------------------------------------------
    Preparar elementos generales
    -------------------------------------------------
    */


    initializeExperience();



});









// =====================================================
// EXPERIENCIA GENERAL
// =====================================================


function initializeExperience(){



    console.log(
        "✨ Invitación Luzmairis & Miguel iniciada correctamente"
    );





    /*
    Evitar problemas con imágenes
    */


    const images = document.querySelectorAll("img");



    images.forEach(image => {



        image.addEventListener(
            "error",
            ()=>{


                console.warn(
                    "Imagen no encontrada:",
                    image.src
                );


            }

        );



    });





    /*
    Agregar clase cuando
    la página empieza a interactuar
    */


    document.body.classList.add(
        "loaded"
    );



}









// =====================================================
// FUNCIÓN DE SCROLL SUAVE
// =====================================================


function scrollToSection(id){



    const section =
        document.getElementById(id);




    if(section){


        section.scrollIntoView({

            behavior:
                "smooth"


        });



    }



}









// =====================================================
// FUNCIÓN PARA MOSTRAR ALERTAS
// USADA POR OTROS ARCHIVOS
// =====================================================


function showMessage(
    title,
    text,
    icon="success"
){



    Swal.fire({

        title:title,

        text:text,

        icon:icon,

        confirmButtonText:
            "Aceptar",


        background:
            "#FFFDF8",


        confirmButtonColor:
            "#C7A96B"


    });



}









// =====================================================
// EFECTO DE ENTRADA
// =====================================================


function revealElement(element){



    if(!element)
        return;




    element.classList.add(
        "show"
    );



}