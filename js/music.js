/*
=====================================================
    MUSIC.JS

    Control de música de fondo

    Revelación de género
    Luzmairis & Miguel

=====================================================
*/






document.addEventListener(
    "DOMContentLoaded",
    ()=>{





        /*
        -------------------------------------------------
        Elementos
        -------------------------------------------------
        */


        const music =
            document.getElementById(
                "backgroundMusic"
            );



        const button =
            document.getElementById(
                "musicButton"
            );



        const icon =
            document.getElementById(
                "musicIcon"
            );







        /*
        -------------------------------------------------
        Validar elementos
        -------------------------------------------------
        */


        if(
            !music ||
            !button ||
            !icon
        ){


            console.warn(
                "Elementos de música no encontrados"
            );


            return;


        }








        /*
        -------------------------------------------------
        Configuración inicial
        -------------------------------------------------
        */


        music.volume =
            0.35;






        let playing =
            false;










        /*
        -------------------------------------------------
        Botón música
        -------------------------------------------------
        */


        button.addEventListener(
            "click",
            ()=>{



                if(playing){


                    pauseMusic();



                }else{


                    playMusic();



                }



            }

        );









        /*
        -------------------------------------------------
        Reproducir música
        -------------------------------------------------
        */


        function playMusic(){



            music.play()

            .then(()=>{



                playing =
                    true;




                updateButton();



                sessionStorage.setItem(
                    "music",
                    "on"
                );




            })

            .catch(error=>{



                console.log(
                    "No se pudo iniciar música:",
                    error
                );



            });



        }










        /*
        -------------------------------------------------
        Pausar música
        -------------------------------------------------
        */


        function pauseMusic(){



            music.pause();



            playing =
                false;




            updateButton();




            sessionStorage.setItem(
                "music",
                "off"
            );



        }









        /*
        -------------------------------------------------
        Cambiar icono
        -------------------------------------------------
        */


        function updateButton(){



            if(playing){



                icon.textContent =
                    "⏸";



                button.classList.add(
                    "playing"
                );



            }else{



                icon.textContent =
                    "🎵";



                button.classList.remove(
                    "playing"
                );



            }



        }









        /*
        -------------------------------------------------
        Intentar recuperar estado
        -------------------------------------------------
        */


        const savedMusic =
            sessionStorage.getItem(
                "music"
            );





        if(savedMusic === "on"){



            playMusic();



        }









        /*
        -------------------------------------------------
        Activación por interacción
        -------------------------------------------------
        */


        document.addEventListener(
            "click",
            firstInteraction,
            {
                once:true
            }
        );





        function firstInteraction(){



            if(!playing){


                playMusic();



            }



        }









    }

);