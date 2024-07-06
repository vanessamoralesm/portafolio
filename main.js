import menuHamburguer from "./js/hamburguer.js";
import { cards_container } from "./js/habilidades.js";
import { proyecto_container } from "./js/proyectos.js";

const form = document.getElementById("form");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs(){
  const nombreValue= nombre.value.trim();
  const emailValue = email.value.trim();
  const asuntoValue =asunto.value.trim();
  const mensajeValue= mensaje.value.trim();

  if(nombreValue=== ""){
    setErrorFor(nombre," No dejar el campo nombre vacio");
  }else if (nombreValue.length>50){
    console.log(nombre.value);
    setErrorFor(nombre, "Debe contener como máximo 50 caracteres");
  }else{
    setSuccessFor(nombre);
  }

  if(emailValue===""){
    setErrorFor(email,"No dejar el campo email vacio");
  }else if(!isEmail(emailValue)){
    setErrorFor(email, "Ingrese un email válido");
  }else{
    setSuccessFor(email);
  }

  if(asuntoValue===""){
    setErrorFor(asunto, "No dejar el campo asunto vacío");
  }else if(asuntoValue.length>50){
    setErrorFor(asunto, "Debe contener como máximo 50 caracteres");
  }else{
    setSuccessFor(asunto);
  }

  if(mensajeValue===""){
    setErrorFor(mensaje, "No dejar el campo mensaje vacío");
  }else if(mensajeValue.length>50){
    setErrorFor(mensaje, "Debe contener como máximo 300 caracteres");
  }else{
    setSuccessFor(mensaje);
  }

}

function setErrorFor(input, mensaje){
  const formControl =input.parentElement;
  const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = mensaje;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
