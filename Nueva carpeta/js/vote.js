/*
=====================================================
    VOTE.JS

    Sistema de votación Team Niño / Team Niña

    Google Sheets + Apps Script

    Revelación de género
    Luzmairis & Miguel

=====================================================
*/



document.addEventListener(
    "DOMContentLoaded",
    ()=>{



        /*
        -------------------------------------------------
        URL GOOGLE APPS SCRIPT
        -------------------------------------------------
        */


        const API_URL = 
        "https://script.google.com/macros/s/AKfycbzL8yKDtW1yRQKJRSMs85Yj7wDEh-9jmIS-Cl5zuNLavwNZa6_VKU5RjlQiYS_FVRaL/exec";







        /*
        -------------------------------------------------
        ELEMENTOS
        -------------------------------------------------
        */


        const boyButton =
            document.getElementById(
                "voteBoy"
            );


        const girlButton =
            document.getElementById(
                "voteGirl"
            );



        const boyVotes =
            document.getElementById(
                "boyVotes"
            );


        const girlVotes =
            document.getElementById(
                "girlVotes"
            );



        const boyPercentage =
            document.getElementById(
                "boyPercentage"
            );


        const girlPercentage =
            document.getElementById(
                "girlPercentage"
            );



        const boyBar =
            document.getElementById(
                "boyBar"
            );


        const girlBar =
            document.getElementById(
                "girlBar"
            );









        if(
            !boyButton ||
            !girlButton
        ){

            console.warn(
                "Botones de votación no encontrados"
            );

            return;

        }










        /*
        -------------------------------------------------
        VERIFICAR SI YA VOTÓ
        -------------------------------------------------
        */


        const userVote =
            localStorage.getItem(
                "babyVote"
            );



        if(userVote){

            disableVoting();

        }










        /*
        -------------------------------------------------
        EVENTOS
        -------------------------------------------------
        */


        boyButton.addEventListener(
            "click",
            ()=>{

                sendVote(
                    "niño"
                );

            }
        );




        girlButton.addEventListener(
            "click",
            ()=>{

                sendVote(
                    "niña"
                );

            }
        );











        /*
        -------------------------------------------------
        ENVIAR VOTO
        -------------------------------------------------
        */


        async function sendVote(team){



            if(
                localStorage.getItem(
                    "babyVote"
                )
            ){

                showMessage(
                    "Ya votaste 💕",
                    "Solo puedes participar una vez",
                    "info"
                );

                return;

            }






            try{


                const response =
                await fetch(
                    API_URL,
                    {

                        method:"POST",


                        headers:{
                            "Content-Type":
                            "text/plain;charset=utf-8"
                        },


                        body:
                        JSON.stringify({

                            action:
                            "vote",


                            team:
                            team

                        })

                    }
                );






                const result =
                    await response.json();







                if(result.success){



                    localStorage.setItem(
                        "babyVote",
                        team
                    );



                    showMessage(
                        "¡Gracias por votar! 🎉",
                        "Tu predicción fue registrada",
                        "success"
                    );



                    disableVoting();



                    // actualizar inmediatamente
                    loadVotes();



                }





            }
            catch(error){


                console.error(
                    "Error enviando voto:",
                    error
                );


                showMessage(
                    "Error",
                    "No se pudo registrar tu voto",
                    "error"
                );


            }



        }









        /*
        -------------------------------------------------
        DESACTIVAR BOTONES
        -------------------------------------------------
        */


        function disableVoting(){


            boyButton.disabled =
            true;


            girlButton.disabled =
            true;



            boyButton.style.opacity =
            ".5";


            girlButton.style.opacity =
            ".5";


        }









        /*
        -------------------------------------------------
        OBTENER VOTOS
        -------------------------------------------------
        */


        async function loadVotes(){



            try{


                const response =
                await fetch(
                    API_URL +
                    "?action=getVotes"
                );




                const data =
                await response.json();





                updateResults(
                    data
                );



            }
            catch(error){


                console.error(
                    "Error cargando votos:",
                    error
                );


            }



        }









        /*
        -------------------------------------------------
        ACTUALIZAR BANNER
        -------------------------------------------------
        */


        function updateResults(data){



            const boy =
                Number(data.niño) || 0;



            const girl =
                Number(data.niña) || 0;





            const total =
                boy + girl;





            let boyPercent = 0;

            let girlPercent = 0;






            if(total > 0){


                boyPercent =
                Math.round(
                    (boy / total) * 100
                );



                girlPercent =
                Math.round(
                    (girl / total) * 100
                );

            }








            if(boyVotes){

                boyVotes.textContent =
                boy + " votos";

            }





            if(girlVotes){

                girlVotes.textContent =
                girl + " votos";

            }








            if(boyPercentage){

                boyPercentage.textContent =
                boyPercent + "%";

            }






            if(girlPercentage){

                girlPercentage.textContent =
                girlPercent + "%";

            }







            if(boyBar){

                boyBar.style.width =
                boyPercent + "%";

            }






            if(girlBar){

                girlBar.style.width =
                girlPercent + "%";

            }





        }









        /*
        -------------------------------------------------
        CARGA INICIAL
        -------------------------------------------------
        */


        loadVotes();





        /*
        -------------------------------------------------
        ACTUALIZACIÓN EN TIEMPO REAL
        Cada 5 segundos
        -------------------------------------------------
        */


        setInterval(
            loadVotes,
            5000
        );





    }

);