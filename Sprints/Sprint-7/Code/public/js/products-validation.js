console.log('form bien llamado')
window.addEventListener('load',() => {

    // Toma el boton de submit de la vista register, lo pone a 
    // escuchar para q al hacer click se evite q el formulario se
    // envie, salvo q la variable errores, q es un array, tenga un
    // largo menor a 1. Se define variable formulario, para tomarlo y
    // ejecutar el submit
    const formBtn = document.querySelector('#btn-form');
    formBtn.addEventListener('click', (evento)=> {
    const formulario = document.querySelector('.np-new-product-form')
    evento.preventDefault();
    inputs.map(el => {
    if(el.value.length < 1){
    createMessage(el);
    }
    })
    if (
        //(errores < 1) && 
        (erroresText.length == 0)) {
    formulario.submit() && console.log('formulario enviado')
    }
    });
    
    // Definicion de variable errores, q comienza vacia
    //let errores = 0;
    let erroresText = [];
    
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
            if(el.name == 'nombre') {
            if(el.value.length < 5) { createMessage(el, "El campo debe contener 5 caracteres") }
            else { validateValueShort5(el) }
            }
        else if (el.name == 'descripcion') {
            if(el.value.length < 20) { createMessage(el, "El campo debe contener 20 caracteres") }
            else { validateValueShort20(el) }
            }  
            else if (el.name == 'file'){ 
            if(el.files.length == 0){
                createMessage(el, "Se debe agregar un archivo de tipo .png o .jpeg")
            }
            else if(el.files[0].type !== 'image/png'){
                createMessage(el, "Se debe agregar un archivo de tipo .png o .jpeg")
            }
            }
            else{
            el.value.length < 1
            ? createMessage(el,"El campo no puede estar vacío")
            : validateValue(el);}          


//     validateValue(el);
     //validateValueShort5(el);
     //validateValueShort20(el);
    // console.log(errores);
     console.log(erroresText);
     }
    })
    
    // Funcion q en caso de identificar q el campo esta vacio, inserta el
    // error como span en el div; y coloca el error en la variable
    // errores
    function createMessage(el, mensaje){
     let div = el.parentElement;
     if(div.querySelector('span')){
     return;
     }
     let mensajeError = document.createElement('span');
     mensajeError.innerText = mensaje;
     el.parentElement.append(mensajeError);
    // errores++;
     //erroresText.push("El campo <<" + el.name + ">> está vacío") 
     erroresText.push('error')
    }
    

    function createMessageShort5(el){
        let div = el.parentElement;
        if(div.querySelector('span')){
        return;
        }
        let mensajeError = document.createElement('span');
        mensajeError.innerText = "El campo debe contener al menos 5 caracteres";
        el.parentElement.append(mensajeError);
       // errores++;
        //erroresText.push("El campo <<" + el.name + ">> está vacío") 
        erroresText.push('error')
       }

    
       function createMessageShort20(el){
        let div = el.parentElement;
        if(div.querySelector('span')){
        return;
        }
        let mensajeError = document.createElement('span');
        mensajeError.innerText = "El campo debe contener al menos 20 caracteres";
        el.parentElement.append(mensajeError);
       // errores++;
        //erroresText.push("El campo <<" + el.name + ">> está vacío") 
        erroresText.push('error')
       }


    // Funcion q en caso de identificar q el campo no esta vacio, borra el
    // mensaje de error del span en el div; y borra el error en la variable
    // errores
    function validateValue(el){
    let div = el.parentElement;
    if(el.value.length >= 1){
     let errorMessage = div.querySelector('span');
     errorMessage?
     errorMessage.remove() 
     : null;
    // errores--;
    erroresText?
    erroresText.pop() 
    : null
     }
    }

    function validateValueShort5(el){
    let div = el.parentElement;
    if(el.value.length >= 5){
    let errorMessage = div.querySelector('span');
    errorMessage?
    errorMessage.remove() 
    : null;
    // errores--;
    erroresText?
    erroresText.pop() 
    : null
    }
    }

    function validateValueShort20(el){
    let div = el.parentElement;
    if(el.value.length >= 20){
    let errorMessage = div.querySelector('span');
    errorMessage?
    errorMessage.remove() 
    : null;
    // errores--;
    erroresText?
    erroresText.pop() 
    : null
    }
    }


   // errores = Object.keys(errores);
   // console.log(errores);
    console.log(erroresText);
    })