/*
=====================================================
    FORM.JS

    Confirmación por WhatsApp

    Luzmairis & Miguel

=====================================================
*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        const button =
            document.getElementById(
                "whatsappConfirmation"
            );



        if(!button){

            console.warn(
                "Botón WhatsApp no encontrado"
            );

            return;

        }



        const phone =
            "5804120546170"; 
            

        /*
        Cambiar por número real

        Ejemplo:
        584121234567

        Sin +
        Sin espacios

        */






        const message =
        encodeURIComponent(
`Hola Luzmairis y Miguel

Quiero confirmar mi asistencia a la revelación de género de su bebé

Muchas felicidades`
        );






        button.href =
        `https://wa.me/${phone}?text=${message}`;



    }

);