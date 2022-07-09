window.addEventListener('load',() => {
    // Evento submit
const formBtn = document.querySelector('#btn-form');
    formBtn.addEventListener('click', (evento)=> {
    evento.preventDefault();     
    inputs.map(el => {
      createMessage(el);
    })
    if(errores < 1){
      formBtn.submit();
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
    let errorMessage = div.querySelector('span');
    errorMessage.remove();
    errores--;
  }
}
errores = Object.keys(errores);
console.log(errores);
})
