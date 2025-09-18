


//creaamos las constantes globales para los elementos principales 
 const input = document.getElementById("to-do-input")
 const addBtn = document.getElementById("add-btn")
 const toDoList= document.getElementById("cont-to-do-list")
 const completedList = document.getElementById("cont-completed-list")


// Creamos la funcion que nos permite crear una nueva tarea a travez del formulario 
// tod etiqueta que vamos a crear es apartir d ela maqueta html pre-existente 

function createToDoItem(textoItem){
 // creamos el nodo o elemento padre   
const item = document.createElement("div");
item.classList.add ("item-to-do");

 // creamos el nodo hijo y agregamos el type    
const checkbox = document.createElement("input");
checkbox.type = "checkbox"

 // creamos el siguiente nodo hijo parrafo 
 //  a este parrafo le asigno el valor del argunmento de la funcion  es decir lo q escribe el usuario en el campo 
const p = document.createElement("p");
p.textContent = textoItem

// creamos el ultimo nodo hijo, el boton de eliminar 

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
 

// ensamblamos dentro del nodo padre sus nodos hijos, es decir la estrutura de la tarea 
item.appendChild(checkbox);
item.appendChild(p);
item.appendChild(deleteBtn);


// Utilizamos el return para dar respuesta al elemento creado ya que lo usaremos mas adelante 
return item; 


}


// detectamos el evento click sobre el boton agregar con un evento de escucha
//para que apartir de este evento se agregue la tarea dentro el contenedor cont- to do list 

addBtn.addEventListener('click', ()=>{

const textoItem = input.value.trim()
if (textoItem =="") {
    alert("no se puede crear una tarea vacia");
}else{
    const newItem = createToDoItem(textoItem);
    toDoList.appendChild(newItem);
    eventsToItems(newItem);
    input.value="";
}



}) 

// la siguiente funcion nos permitira agregar el funcionamiento sobre las tareas es decir marca la tarea como completada o en dado caso eliminarla 


function eventsToItems(item){
    // utilizados el query selector para capturar el input y button que esten dentro del item 
    const checkbox = item.querySelector ('input')
    const deleteBtn = item.querySelector('button')


    // completar la tarea 
    checkbox.addEventListener('change', ()=> {
        if(checkbox.checked){
            completedList.appendChild(item);
        }else{

            toDoList.appendChild(item);
        }
    }) 
    

    //evento de eliminar 

    deleteBtn.addEventListener('click', () =>{
        item.remove();
    })

    
}
const btnStyles = document.getElementById('change-styles')
    btnStyles.addEventListener('click' , ()=>{
        
        const linkCss = document.getElementById ('enlace-estilos');

        if(linkCss.getAttribute('href') === 'css/styles.css'){
            linkCss.setAttribute('href' , 'css/styles-noche.css');
            btnStyles.textContent = 'modo noche'
        
        }else{
            linkCss.setAttribute('href' , 'css/styles.css');
            btnStyles.textContent = 'modo dia'
        }
    


    

    })
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
addBtn.click()
    }      
       
});


    
