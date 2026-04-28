function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myBtn = document.querySelector('.change-color');
const mySpan = document.querySelector('.color');
myBtn.addEventListener('click',()=>{
  const newColor = getRandomHexColor()
  document.body.style.backgroundColor = newColor;
  mySpan.textContent = newColor;
})