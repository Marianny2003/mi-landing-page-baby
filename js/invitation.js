/*
=====================================================
    INVITATION.JS

    Control de apertura de invitación

    Proyecto:
    Revelación de género
    Luzmairis & Miguel

=====================================================
*/






document.addEventListener(
    "DOMContentLoaded",
    ()=>{



        const envelope =
            document.getElementById(
                "envelope"
            );



        const openButton =
            document.getElementById(
                "openInvitation"
            );





        /*
        -------------------------------------------------
        Verificar elementos
        -------------------------------------------------
        */


        if(!envelope || !openButton){

            console.warn(
                "Elementos de invitación no encontrados"
            );


            return;

        }








        /*
        -------------------------------------------------
        Evento abrir invitación
        -------------------------------------------------
        */


        openButton.addEventListener(
            "click",
            openInvitation

        );








        function openInvitation(){





            /*
            Evitar doble apertura
            */


            if(
                envelope.classList.contains(
                    "opened"
                )
            ){

                return;

            }





            /*
            Animación del sobre
            */


            envelope.classList.add(
                "open"
            );


            envelope.classList.add(
                "opened"
            );






            /*
            Cambiar texto del botón
            */


            openButton.innerHTML =
                "✨ Invitación abierta";




            openButton.disabled =
                true;








            /*
            Efecto celebración
            */


            launchOpeningConfetti();







            /*
            Activar música
            */


            activateMusic();








            /*
            Esperar animación
            */


            setTimeout(()=>{



                scrollToStory();



            },1200);






        }










        /*
        -------------------------------------------------
        Scroll hacia historia
        -------------------------------------------------
        */


        function scrollToStory(){



            const story =
                document.querySelector(
                    ".story"
                );




            if(story){



                story.scrollIntoView({

                    behavior:
                        "smooth"



                });



            }



        }









        /*
        -------------------------------------------------
        Confeti inicial
        -------------------------------------------------
        */


        function launchOpeningConfetti(){



            if(
                typeof confetti !== "function"
            ){

                return;

            }






            confetti({

                particleCount:
                    80,


                spread:
                    90,


                origin:{
                    y:.6
                },


                colors:[

                    "#F8DDEB",

                    "#D9EAFD",

                    "#C7A96B",

                    "#FFFDF8"

                ]

            });




        }










        /*
        -------------------------------------------------
        Activar música después
        de interacción del usuario
        -------------------------------------------------
        */


        function activateMusic(){



            const music =
                document.getElementById(
                    "backgroundMusic"
                );




            if(!music){

                return;

            }





            music.volume =
                0.35;





            music.play()
            .catch(()=>{


                console.log(
                    "El navegador requiere interacción para reproducir audio"
                );


            });



        }






    }
);