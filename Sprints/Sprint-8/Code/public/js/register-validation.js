window.addEventListener('load',() => {
    // Evento submit
const formBtn = document.querySelector('#btn-form');
    formBtn.addEventListener('click', (evento)=> {
    const formulario = document.querySelector('.formulario-register')
    evento.preventDefault();    
    inputs.map(el => {
      if(el.value.length < 1){
      createMessage(el);
      }
    })
    if(errores < 1){
      formulario.submit()
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
    console.log(errores);

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
    errores--;
    let errorMessage = div.querySelector('span');
    errorMessage?
    errorMessage.remove()
    : null; 
  }
}
})
