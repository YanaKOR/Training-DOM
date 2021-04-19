var changeButton=document.querySelector('.change')
changeButton.addEventListener('click',function(){
  changeColor()
})

function changeColor () {
  var element=document.getElementById('paragraph')
  console.log('Clicked on button', 
 element.style
  )
element.style.color="red"
element.style.fontSize="24px"
element.style.border="1px solid green"

/* 
var elements=document.getElementsByClassName('article')
for(var i = 0; i < elements.length; i++) {
    elements[i].style.color = 'green'
  } */

var elem= document.querySelector('#container')
  elem.style.color="red"

  var elements=document.querySelectorAll('.article')
  for(i=0; i < elements.length; i++){
    elements[i].style.color="violet"
  }

  var element=document.querySelector('.description p')
  element.style.border="2px solid yellow"

  var elements=document.querySelectorAll('.container_check input[type="checkbox"]:checked')
  for(i=0; i < elements.length; i++){
    elements[i].parentElement.style.color="red"
  }

 var firstContainer = document.querySelector('.container1')
  var secondContainer = document.querySelector('.container2')
  var content = firstContainer.innerHTML.trim()
  console.log('content',content)

secondContainer.innerHTML=content


var elements= document.querySelectorAll(".drinks li")
var drinks=[]

for(var i=0; i< elements.length; i++){
  var content= elements[i].innerHTML.trim()
  console.log(content)
  drinks.push(content)
}
console.log(drinks)

}


var firstElement = document.querySelector('.firstElement')
var secondElement = document.querySelector('.secondElement')

firstElement.addEventListener('mouseover', function () {
  secondElement.style.display = 'block'
})

firstElement.addEventListener('mouseout', function () {
  secondElement.style.display = 'none'
})

var app = document.querySelector('.app')
var title = document.createElement('div')
console.log('title', title)
title.className="title"
title.innerHTML="Какой-то новый текст"
app.insertBefore(title, app.firstChild)//добавляет 
//app.appendChild(title)//добавляет в конец
//app.removeChild(app.firstChild) Удаляет элемент
title.remove()