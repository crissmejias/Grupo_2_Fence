window.addEventListener('load',() => {
 
    // Evento submit
const formBtn = document.querySelector('#btn-form');
    formBtn.addEventListener('click', (evento)=> {
      const formulario = document.querySelector('.formulario-login');
      evento.preventDefault();     

      document.getElementById('email').addEventListener('input', function() {
        campo = e.target;
        valido = document.getElementById('emailOK');
        console.log("válido",valido);
            
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(campo.value)) {
                    valido.innerText = "válido";
          errores--
        } else {
          valido.innerText = "incorrecto";
          errores++  }
    })

      inputs.map(el => {
        if(el.value.length < 1){
          createMessage(el) 
          }
        })
        if(errores < 1){
      formulario.submit();
      }
});
// Map de inputs con evento onblur
let errores = 0;

let inputs = document.querySelectorAll('input');
inputs = [...inputs];
inputs.map(el => {
el.onblur = () => {
  if(el.value.length < 1){
    createMessage(el);
  }
  validateValue(el);
  // console.log(errores);

}
// if(errores.length >=1){
  
// }
})
function createMessage(el){
let div = el.parentElement;
if(div.querySelector('span')){
  return;
}
let mensajeError = document.createElement('span');
mensajeError.innerText = "El campo está vacío";
el.parentElement.append(mensajeError);
errores++; 
}
function validateValue(el){
  let div = el.parentElement;
  if(el.value.length >= 1){
    let errorMessage = div.querySelector('span');
    errorMessage?
    errorMessage.remove() 
    : null; 
    errores--;
  }
}
errores = Object.keys(errores);
// console.log(errores);
})