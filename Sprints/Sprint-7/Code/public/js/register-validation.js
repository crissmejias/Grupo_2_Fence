window.addEventListener('load',() => {
    // Evento submit
const formBtn = document.querySelector('#btn-form');
    formBtn.addEventListener('click', (evento)=> {
    evento.preventDefault();     
});
// Map de inputs con evento onblur
const errores = {};

let inputs = document.querySelectorAll('input');
    inputs = [...inputs];
      inputs.map(el => {
        el.onblur = () => {
            if(el.value.length < 1){
            createMessage(el);
            }
        }
      })
      function createMessage(el){
        let div = el.parentElement;
        if(div.querySelector('span')){
            return;
        }
      let mensajeError = document.createElement('span');
      mensajeError.innerText = "El campo está vacío";
      el.parentElement.append(mensajeError); 
    }

    })
