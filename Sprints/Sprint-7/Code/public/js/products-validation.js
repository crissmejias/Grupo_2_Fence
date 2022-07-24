console.log('prueba de products front')

window.addEventListener('load',() => {

        // Toma el boton de submit de la vista register, lo pone a 
        // escuchar para q al hacer click se evite q el formulario se
        // envie, salvo q la variable errores, q es un array, tenga un
        // largo menor a 1
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
    
    // Definicion de variable errores, q comienza vacia
    let errores = 0;
    
    // Definicion de variable inputs, q toma todos los inputs de cada
    // campo. Spread operator convierte los nodos en objetos para poder
    // manipularlos
    let inputs = document.querySelectorAll('input');
    inputs = [...inputs];
    
    
    // Map para aplicar a cada campo funciones para colocar o quitar
    // mensajes de error al falidar; y ademas completar la variable
    // errores
    inputs.map(el => {
      el.onblur = () => {
        if(el.value.length < 1){
          createMessage(el);
        }
        validateValue(el);
        console.log(errores);
      }
    })
    
    
    // Funcion q en caso de identificar q el campo esta vacio, inserta el
    // error como span en el div; y coloca el error en la variable
    // errores
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
    
    // Funcion q en caso de identificar q el campo no esta vacio, borra el
    // mensaje de error del span en el div; y borra el error en la variable
    // errores
    function validateValue(el){
      let div = el.parentElement;
      if(el.value.length >= 1){
        let errorMessage = div.querySelector('span');
        errorMessage.remove();
        errores--;
      }
    }
    
    
      // convierte en un array de strings a la variable errores
    errores = Object.keys(errores);
    console.log(errores);
    })