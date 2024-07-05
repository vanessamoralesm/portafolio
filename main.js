import menuHamburguer from "./js/hamburguer.js";
import { cards_container } from "./js/habilidades.js";
import { proyecto_container } from "./js/proyectos.js";



const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const errorDisplay = document.getElementById(`error-${element.id}`);
  errorDisplay.textContent = message;
  element.classList.add("error");
  element.classList.remove("success");
};

const setSuccess = (element) => {
  const errorDisplay = document.getElementById(`error-${element.id}`);
  errorDisplay.innerText = " ";
  element.classList.add("success");
  element.classList.remove("error");
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const asuntoValue = asunto.value.trim();
  const mensajeValue = mensaje.value.trim();

  if (nombreValue === "") {
    setError(nombre, "El campo nombre está vacío");
  } else if (nombreValue.length > 50) {
    setError(nombre, "El nombre no debe tener más de 50 caracteres");
  } else {
    setSuccess(nombre);
  }

  if (emailValue === "") {
    setError(email, "El campo email está vacío");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Ingrese un email válido");
  } else {
    setSuccess(email);
  }

  if (asuntoValue === "") {
    setError(asunto, "El campo asunto está vacío");
  } else if (asuntoValue.length > 50) {
    setError(asunto, "El asunto no debe tener más de 50 caracteres");
  } else {
    setSuccess(asunto);
  }

  if (mensajeValue === "") {
    setError(mensaje, "El campo mensaje está vacío");
  } else if (mensajeValue.length > 300) {
    setError(mensaje, "El mensaje no debe tener más de 300 caracteres");
  } else {
    setSuccess(mensaje);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  menuHamburguer();
  cards_container();
  proyecto_container();
});
