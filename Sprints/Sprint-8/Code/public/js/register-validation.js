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
    
    if(el.name == 'nombre'){
      if(el.value.length < 3){
        createMessage(el, 'El nombre debe contener al menos 3 caracteres');
      } else{
        validateValue(el);
      }
    }
    if(el.name == 'apellido'){
      if(el.value.length < 3){
        createMessage(el, 'El apellido debe contener al menos 3 caracteres');
      } else{
        validateValue(el);
      }
    }
    if(el.name == 'email'){
     const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if(!emailRegex.test(el.value)){
        createMessage(el, 'Debe ingresar un email válido');
      } else{
        validateValue(el);
      }
    }
    if (el.name == 'file'){ 
      if(el.files.length == 0){
          createMessage(el, "Se debe agregar un archivo de tipo .png o .jpeg")
      }
      else if((el.files[0].type !== 'image/png') || (el.files[0].type !== 'image/jpg') || (el.files[0].type !== 'image/jpeg')){
          createMessage(el, "Se debe agregar un archivo de tipo .png o .jpeg")
          console.log(el.files[0].type)
      } 
      else 
      {
        validateValue(el)
      }
      }
      if(el.name == 'password'){
        if(el.value.length < 8){
          createMessage(el, 'La contraseña debe contener un mínimo de 8 caracteres');
        } else{
          validateValue(el);
        }
      }
      if(el.name == 'password-verify'){
        const firstPassword = document.querySelector('#password')
        if(el.value != firstPassword.value){
          createMessage(el, 'Las contraseñas no coinciden');
        } 
        else{
          validateValue(el)
        }
      }

    if(el.value.length < 1){
      createMessage(el, 'El campo está vacío');
    }

  }
  // if(errores.length >=1){
    
  // }
})
function createMessage(el, mes){
  let div = el.parentElement;
  if(div.querySelector('span')){
    return;
  }
  let mensajeError = document.createElement('span');
  mensajeError.innerText = mes;
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
