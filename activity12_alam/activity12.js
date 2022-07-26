//MODAL Window
const openItem1 = document.querySelector("#openItem1")
const closeModal = document.querySelector("#closeModal")
const modalWindow = document.querySelector('.modalWindow')

openitem1.addEventListener('click', function(){
  modalWindow.style.display = 'block';
})

closeModal.addEventListener('click',function(){
  modalWindow.style.display = 'none';
})



//STORAGE
const firstName = document.querySelector('#firstN').value
const lastName = document.querySelector('#lastN').value
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click',function(){
  localStorage.setItem('FN', firstName.value);
  sessionStorage.setItem('LN', lastName.value);
  firstName.value =""
  lastName.value =""
})
//FORMS
//VIEW Password

const myPassword = document.querySelector("#myPassword")
const viewPassword = document.querySelector("#viewPassword")

viewPassword.addEventListener('click', function(){
  const secret = myPassword.getAttribute('type')==='password' ?
  'text': 'password'
  myPassword.setAttribute('type', secret)

})

//AUTOMATIC SLIDESHOW
const slideAuto = document.querySelectorAll('.slideAuto')
let indexSlide = 0;
slideshowAuto()
function slideshowAuto(){
  let numSlides = slideAuto.length;
  if(indexSlide>=numSlides){indexSlide=0}
  if(indexSlide<0){indexSlide=numSlides - 1;}
  for(let eachIndex = 0; eachIndex<numSlides; eachIndex++){
    slideAuto[eachIndex].style.display = 'none'
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto, 3000); //the second argument is the time in millisecond
  indexSlide++
}



// MANUAL SLIDESHOW
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1; //slide's position
let numberSlides = slides.length;
slideshow(currentSlide);

prev.addEventListener('click', function(){
  slideshow(currentSlide--)
})
next.addEventListener('click', function(){
  slideshow(currentSlide++)
})
function slideshow(n){
  //when currentSlide reaches up to the number of slide, it will set back to 1, which is the first slides
if (currentSlide>numberSlides){currentSlide = 1;}
// when currentSlide reaches to the first slide, the next prev button will set to the last slide.
if (currentSlide<1){currentSlide= numberSlides;}
for(let eachSlides = 0; eachSlides<numberSlides; eachSlides++){
  slides[eachSlides].style.display = 'none';
}
  slides[currentSlide-1].style.display = 'block';
}
