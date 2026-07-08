/*
=====================================================
    ANIMATIONS.JS

    Animaciones avanzadas

    Revelación de género
    Luzmairis & Miguel

=====================================================
*/





document.addEventListener(
    "DOMContentLoaded",
    ()=>{






        /*
        -------------------------------------------------
        Intersection Observer

        Animaciones al aparecer
        -------------------------------------------------
        */


        const animatedElements =
            document.querySelectorAll(
                "[data-animation]"
            );







        const observer =
            new IntersectionObserver(

                entries=>{


                    entries.forEach(
                        entry=>{


                            if(
                                entry.isIntersecting
                            ){



                                const animation =
                                    entry.target
                                    .dataset
                                    .animation;





                                entry.target.classList.add(
                                    animation
                                );





                                observer.unobserve(
                                    entry.target
                                );



                            }



                        }

                    );


                },

                {

                    threshold:
                        .15


                }

            );







        animatedElements.forEach(
            element=>{


                observer.observe(
                    element
                );


            }

        );












        /*
        -------------------------------------------------
        Parallax del fondo
        -------------------------------------------------
        */


        const moon =
            document.querySelector(
                ".moon"
            );



        const clouds =
            document.querySelectorAll(
                ".cloud"
            );



        const stars =
            document.querySelectorAll(
                ".star"
            );







        window.addEventListener(
            "scroll",
            ()=>{





                const scroll =
                    window.scrollY;






                if(moon){



                    moon.style.transform =
                    `translateY(${scroll * .08}px)`;



                }







                clouds.forEach(
                    (cloud,index)=>{



                        const movement =
                            scroll *
                            (0.03 + index * .02);





                        cloud.style.transform =
                        `translateX(${movement}px)`;




                    }

                );







                stars.forEach(
                    (star,index)=>{



                        star.style.transform =
                        `translateY(${scroll * .02}px)`;



                    }

                );





            }

        );









        /*
        -------------------------------------------------
        Efecto brillo en elementos
        -------------------------------------------------
        */


        const shineElements =
            document.querySelectorAll(
                ".shine"
            );






        shineElements.forEach(
            element=>{



                element.addEventListener(
                    "mouseenter",
                    ()=>{


                        element.classList.add(
                            "active"
                        );



                    }

                );





                element.addEventListener(
                    "mouseleave",
                    ()=>{


                        element.classList.remove(
                            "active"
                        );



                    }

                );



            }

        );









        /*
        -------------------------------------------------
        Efecto escritura para textos
        -------------------------------------------------
        -------------------------------------------------

        Uso:
        <span class="typing">
        Texto
        </span>

        -------------------------------------------------
        */


        const typingElements =
            document.querySelectorAll(
                ".typing"
            );







        typingElements.forEach(
            element=>{


                const text =
                    element.textContent;



                element.textContent =
                    "";



                let index =
                    0;






                function type(){



                    if(
                        index < text.length
                    ){



                        element.textContent +=
                            text.charAt(
                                index
                            );



                        index++;



                        setTimeout(
                            type,
                            100
                        );



                    }



                }





                type();



            }

        );









        /*
        -------------------------------------------------
        Prevenir problemas en móviles
        -------------------------------------------------
        */


        window.addEventListener(
            "resize",
            ()=>{


                document.body.style.width =
                    window.innerWidth + "px";



                setTimeout(()=>{


                    document.body.style.width =
                        "";


                },100);



            }

        );








        console.log(
            "✨ Animaciones cargadas correctamente"
        );




    }

);