const $formulario = document.getElementById("formulario");
const $nombre = document.getElementById("nombre");
const $correo = document.getElementById("correo");
const $genero = document.getElementById("genero");
const $asunto = document.getElementById("asunto");
const $mensaje = document.getElementById("mensaje");

$formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let regexText = /^[A-Za-z]+$/;
    let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    let entrada = false;

    //Validacion del nombre
    if ($nombre.value.length < 3 || !regexText.test($nombre.value)) {
        $nombre.style.outline = "2.5px solid red";
        entrada = true;
    } else {
        $nombre.style.borderColor = "green";
        $nombre.reset();
    }

    //Validacion del correo
    if (!regexEmail.test($correo.value)) {
        $correo.style.outline = "2.5px solid red";
        entrada = true;
    } else {
        $correo.style.outline = "2.5px solid green";
        $correo.reset();
    }

    //Validacion del genero
    if ($genero.value == "") {
        $genero.style.outline = "2.5px solid red";
        entrada = true;
    } else {
        $genero.style.outline = "2.5px solid green";
        $genero.reset();
    }

    //Validacion del asunto
    if ($asunto.value.length > 30 || $asunto.value == "") {
        $asunto.style.outline = "2.5px solid red";
        entrada = true;
    } else {
        $asunto.style.borderColor = "green";
        $asunto.reset();
    }

    //Validacion del mensaje
    if ($mensaje.value.length > 300 || $mensaje.value == "") {
        $mensaje.style.outline = "2.5px solid red";
        entrada = true;
    } else {
        $mensaje.style.borderColor = "green";
        $mensaje.reset(); 
    }

    if (entrada) {
        alert("Rellene bien los campos del formulario")
    } else {
        alert("SU FORMULARIO HA SIDO ENVIADO CON ÉXITO")
    }
});