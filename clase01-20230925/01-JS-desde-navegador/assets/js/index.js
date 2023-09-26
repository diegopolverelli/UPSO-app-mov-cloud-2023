console.log('hola2')

let imagen=document.createElement('img')
imagen.src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=1200&quality=60'
imagen.width=400
document.body.append(imagen)

let usuarios=['Diego','Jimena', 'Carlos']
let ul=document.createElement('ul')
let ulHtml=''

usuarios.forEach(usuario=>{
    ulHtml+=`<li>${usuario}</li>`
})

ul.innerHTML=ulHtml
document.body.append(ul)

let inputNombre=document.getElementById('nombre')
let inputEmail=document.getElementById('email')
let btnSubmit=document.querySelector('#btnSubmit')

let divErrorNombre=document.getElementById('errorNombre')

btnSubmit.addEventListener('click',(evento)=>{
    evento.preventDefault()
    
    if(inputNombre.value.trim().length===0){
        // alert('ingrese nombre')
        divErrorNombre.innerHTML='<span style="color:red; font-weight: bolder;">Complete el nombre</span>'
        return
    }else{
        divErrorNombre.innerHTML=''
    }
    
    console.log(inputNombre.value)

})