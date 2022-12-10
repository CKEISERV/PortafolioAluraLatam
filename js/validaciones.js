export function validacion(input){

    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){

        input.parentElement.classList.remove("input-container--invalid"); 
        input.parentElement.querySelector(".contacto__contactarme__error").innerHTML = "";
    } else{
        input.parentElement.classList.add("input-container--invalid"); 
        input.parentElement.querySelector(".contacto__contactarme__error").innerHTML = mostrarMensajesErorr(tipoDeInput,input);
    }
}

const tipoDeError = [

    "valueMissing",
    "typeMismatch",
    "patternMismatch",

]; 

const mensajesDeError = {

    nombre: {
        valueMissing: "El campo no puede estar vacío",
    }, 

    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
      },

    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es numerico",
    }
}

function mostrarMensajesErorr(tipoDeInput, input){

    let mensaje = ""; 
    tipoDeError.forEach((error) =>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}