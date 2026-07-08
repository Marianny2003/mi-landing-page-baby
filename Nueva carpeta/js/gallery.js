/*
=====================================================
    GALLERY.JS

    Galería de fotos con Swiper

    Revelación de género
    Luzmairis & Miguel

=====================================================
*/





document.addEventListener(
    "DOMContentLoaded",
    ()=>{





        /*
        -------------------------------------------------
        Verificar existencia de Swiper
        -------------------------------------------------
        */


        if(
            typeof Swiper === "undefined"
        ){


            console.warn(
                "Swiper no está cargado"
            );


            return;


        }







        /*
        -------------------------------------------------
        Inicializar galería
        -------------------------------------------------
        */


        const gallery =
            document.querySelector(
                ".gallery-slider"
            );





        if(!gallery){


            console.warn(
                "Galería no encontrada"
            );


            return;


        }









        const swiper =
            new Swiper(
                ".gallery-slider",
                {



                /*
                -----------------------------
                Efecto visual
                -----------------------------
                */


                effect:
                    "coverflow",




                grabCursor:
                    true,




                centeredSlides:
                    true,





                slidesPerView:
                    "auto",





                loop:
                    true,






                coverflowEffect:{


                    rotate:
                        20,


                    stretch:
                        0,


                    depth:
                        150,


                    modifier:
                        1,


                    slideShadows:
                        false


                },








                /*
                -----------------------------
                Autoplay
                -----------------------------
                */


                autoplay:{


                    delay:
                        3500,


                    disableOnInteraction:
                        false


                },








                /*
                -----------------------------
                Navegación
                -----------------------------
                */


                navigation:{


                    nextEl:
                        ".swiper-button-next",



                    prevEl:
                        ".swiper-button-prev"


                },








                /*
                -----------------------------
                Paginación
                -----------------------------
                */


                pagination:{


                    el:
                        ".swiper-pagination",



                    clickable:
                        true


                },








                /*
                -----------------------------
                Responsive
                -----------------------------
                */


                breakpoints:{


                    320:{


                        slidesPerView:
                            1,


                    },



                    768:{


                        slidesPerView:
                            2,


                    },



                    1024:{


                        slidesPerView:
                            3,


                    }


                }




            });









        /*
        -------------------------------------------------
        Pausar autoplay al tocar
        -------------------------------------------------
        */


        gallery.addEventListener(
            "mouseenter",
            ()=>{


                swiper.autoplay.stop();



            }

        );








        gallery.addEventListener(
            "mouseleave",
            ()=>{


                swiper.autoplay.start();



            }

        );









    }

);