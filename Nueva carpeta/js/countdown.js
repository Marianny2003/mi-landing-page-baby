/*
=====================================================
    COUNTDOWN.JS

    Cuenta regresiva del evento

    Revelación de género
    Luzmairis & Miguel

=====================================================
*/





document.addEventListener(
    "DOMContentLoaded",
    ()=>{



        /*
        -------------------------------------------------
        Fecha del evento
        -------------------------------------------------
        */


        const eventDate =
            new Date(
                "July 12, 2026 15:00:00"
            );







        /*
        -------------------------------------------------
        Elementos HTML
        -------------------------------------------------
        */


        const days =
            document.getElementById(
                "days"
            );



        const hours =
            document.getElementById(
                "hours"
            );



        const minutes =
            document.getElementById(
                "minutes"
            );



        const seconds =
            document.getElementById(
                "seconds"
            );








        /*
        -------------------------------------------------
        Validación
        -------------------------------------------------
        */


        if(
            !days ||
            !hours ||
            !minutes ||
            !seconds
        ){


            console.warn(
                "Elementos del contador no encontrados"
            );


            return;


        }










        /*
        -------------------------------------------------
        Actualizar contador
        -------------------------------------------------
        */


        function updateCountdown(){





            const now =
                new Date()
                .getTime();




            const distance =
                eventDate.getTime()
                -
                now;








            /*
            Cuando llega la fecha
            */


            if(distance <= 0){



                showEventStarted();



                clearInterval(
                    countdownInterval
                );



                return;


            }








            /*
            Conversiones
            */


            const totalSeconds =
                Math.floor(
                    distance / 1000
                );



            const totalMinutes =
                Math.floor(
                    totalSeconds / 60
                );



            const totalHours =
                Math.floor(
                    totalMinutes / 60
                );



            const totalDays =
                Math.floor(
                    totalHours / 24
                );







            const remainingHours =
                totalHours % 24;



            const remainingMinutes =
                totalMinutes % 60;



            const remainingSeconds =
                totalSeconds % 60;









            /*
            Mostrar datos
            */


            days.textContent =
                formatNumber(
                    totalDays
                );



            hours.textContent =
                formatNumber(
                    remainingHours
                );



            minutes.textContent =
                formatNumber(
                    remainingMinutes
                );



            seconds.textContent =
                formatNumber(
                    remainingSeconds
                );



        }










        /*
        -------------------------------------------------
        Formato 01,02,03...
        -------------------------------------------------
        */


        function formatNumber(number){



            return number
                .toString()
                .padStart(
                    2,
                    "0"
                );



        }









        /*
        -------------------------------------------------
        Evento iniciado
        -------------------------------------------------
        */


        function showEventStarted(){



            const container =
                document.querySelector(
                    ".countdown-container"
                );



            if(container){



                container.innerHTML = `


                    <div class="event-started">


                        <h2>
                            🎉
                        </h2>


                        <p>
                            ¡El gran día llegó!
                        </p>


                        <span>
                            Gracias por acompañarnos
                        </span>


                    </div>


                `;


            }







            if(
                typeof confetti === "function"
            ){



                confetti({

                    particleCount:
                        150,


                    spread:
                        120,


                    origin:{
                        y:.6
                    }


                });



            }



        }










        /*
        -------------------------------------------------
        Ejecutar contador
        -------------------------------------------------
        */


        updateCountdown();




        const countdownInterval =
            setInterval(
                updateCountdown,
                1000
            );







    }

);