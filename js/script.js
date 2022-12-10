import { validacion } from "./validaciones.js";
import { contenido } from "./formulario.js";

const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".contacto__contactarme__enviar"); 

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validacion(input.target);
  });
});

btn.addEventListener("click", contenido);

