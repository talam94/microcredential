//Login MODAL
const loginBtn = document.querySelector('#login')
const closeloginModal = document.querySelector('#closeloginModal')
const loginWindow = document.querySelector('.loginWindow')

loginBtn.addEventListener('click', function(){
  loginWindow.style.display = 'block';
})

closeloginModal.addEventListener('click',function(){
  loginWindow.style.display = 'none';
})

//STORAGE
const firstName = document.querySelector('#firstN').value
const lastName = document.querySelector('#lastN').value
const customerEmail = document.querySelector('#customerEmail').value
const customerPhone = document.querySelector('#customerPhone').value
const submitForm = document.querySelector('.customerSubmit')

submitForm.addEventListener('click', function(){
  localStorage.setItem('UN',userName);
  sectionstorage.setItem('PW', passCode);
})

const loginInput = document.querySelector('.loginInput').value
const loginInput2 = document.querySelector('.loginInput2').value
const loginSubmit = document.querySelector('.loginSubmit')

loginSubmit.addEventListener('click', function(){
  localStorage.setItem('FN',firstName);
  sectionstorage.setItem('LN', lastName);
})


//viewPassword

const mySecurityCode = document.querySelector('#mySecurityCode');
const viewSecurityCode = document.querySelector('#viewSecurityCode')
viewSecurityCode.addEventListener('click', function(){
  const secret = mySecurityCode.getAttribute('type')==='password' ? 'text':'password';
  mySecurityCode.setAttribute('type', secret)

})

const myPassCode = document.querySelector('#myPassCode');
const viewPassCode = document.querySelector('#viewPassCode')
viewPassCode.addEventListener('click', function(){
  const secret = myPassCode.getAttribute('type')==='password' ? 'text':'password';
  myPassCode.setAttribute('type', secret)

})


//Manual Slideshow
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1;
let numberSlides = slides.length;
slideshow(currentSlide);

prev.addEventListener('click',function(){
  slideshow(currentSlide--)
})
next.addEventListener('click',function(){
  slideshow(currentSlide++)
})

function slideshow(n){
  if (currentSlide>numberSlides){currentSlide = 1;}
  if (currentSlide<1){currentSlide = numberSlides;}
  for(let eachSlides = 0; eachSlides<numberSlides; eachSlides++){
    slides[eachSlides].style.display = 'none';
  }
  slides[currentSlide-1].style.display = 'block';
}


//Modal Window
const cart = document.querySelector('#cart')
const closeModal = document.querySelector('#closeModal')
const modalWindow = document.querySelector('.modalWindow')

cart.addEventListener('click', function(){
  modalWindow.style.display = 'block';
})

closeModal.addEventListener('click',function(){
  modalWindow.style.display = 'none';
})

const cart2 = document.querySelector('#cart2')
const closeModal2 = document.querySelector('#closeModal2')
const modalWindow2 = document.querySelector('.modalWindow2')

cart2.addEventListener('click', function(){
  modalWindow2.style.display = 'block';
})

closeModal2.addEventListener('click',function(){
  modalWindow2.style.display = 'none';
})

const cart3 = document.querySelector('#cart3')
const closeModal3 = document.querySelector('#closeModal3')
const modalWindow3 = document.querySelector('.modalWindow3')

cart3.addEventListener('click', function(){
  modalWindow3.style.display = 'block';
})

closeModal3.addEventListener('click',function(){
  modalWindow3.style.display = 'none';
})

const cart4 = document.querySelector('#cart4')
const closeModal4 = document.querySelector('#closeModal4')
const modalWindow4 = document.querySelector('.modalWindow4')

cart4.addEventListener('click', function(){
  modalWindow4.style.display = 'block';
})

closeModal4.addEventListener('click',function(){
  modalWindow4.style.display = 'none';
})

const cart5 = document.querySelector('#cart5')
const closeModal5 = document.querySelector('#closeModal5')
const modalWindow5 = document.querySelector('.modalWindow5')

cart5.addEventListener('click', function(){
  modalWindow5.style.display = 'block';
})

closeModal5.addEventListener('click',function(){
  modalWindow5.style.display = 'none';
})

const cart6 = document.querySelector('#cart6')
const closeModal6 = document.querySelector('#closeModal6')
const modalWindow6 = document.querySelector('.modalWindow6')

cart6.addEventListener('click', function(){
  modalWindow6.style.display = 'block';
})

closeModal6.addEventListener('click',function(){
  modalWindow6.style.display = 'none';
})


//MOUSEOVER AND OUT addEventListener

function setNewImage()
{
  document.getElementById("img1").src ="thumbnail3.jpg";
}

function setOldImage()
{
  document.getElementById("img1").src ="thumbnail1.jpg";
}

function setNewImage2()
{
  document.getElementById("img2").src ="mouseOverHeels.jpg";
}

function setOldImage2()
{
  document.getElementById("img2").src ="greenheels.jpg";
}

function setNewImage3()
{
  document.getElementById("img3").src ="mouseOverWatch.jpg";
}

function setOldImage3()
{
  document.getElementById("img3").src ="watch.jpg";
}

//Auto Slideshow
const slideAuto = document.querySelectorAll('.card')
let indexSlide = 0;
slideshowAuto()
function slideshowAuto(){
  let numSlides = slideAuto.length;
  if(indexSlide>=numSlides){indexSlide=0}
  if(indexSlide<0){indexSlide=numSlides-1;}
  for(let eachIndex = 0; eachIndex<numSlides; eachIndex++){
    slideAuto[eachIndex].style.display = 'none'
  }
  slideAuto[indexSlide].style.display ='block'
  setTimeout(slideshowAuto,3000);
  indexSlide++
}
