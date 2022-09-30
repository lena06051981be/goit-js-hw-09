const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
console.log(refs.startBtn);
console.log(refs.stopBtn);

refs.startBtn.addEventListener('click', startChangeColorBody);

function startChangeColorBody(evt) {
  let color = getRandomHexColor();
  //   let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(color);
  document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
