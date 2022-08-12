const randomNum = document.getElementById('randomNum')

const randomNumberGenerator =()=> {
  const randomNumber = Math.floor(Math.random()*10000+1);
  randomNum.textContent = randomNumber;
};



randomNumberGenerator();
