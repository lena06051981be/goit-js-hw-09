const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
console.log(refs.startBtn);
console.log(refs.stopBtn);
console.log(refs.body);

refs.startBtn.addEventListener('click', startChangeColorBody);
refs.stopBtn.addEventListener('click', stopChangeColorBody);

function startChangeColorBody() {
  timerId = setInterval(() => {
    let color = getRandomHexColor();
    //   let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(color);
    document.body.style.backgroundColor = color;
    // return color;
  }, 1000);
}

// console.log(startChangeColorBody());

function stopChangeColorBody() {
  clearInterval(timerId);
  console.log(`notice: color change stopped, have a good day) `);
  //   function note() {
  //   let notice = null;
  if (stopChangeColorBody === true) {
    return;
  }
  notice = document.createElement('h2');
  notice.textContent = 'notice: color change stopped, have a good day)';

  refs.body.insertAdjacentHTML('beforeend', notice.textContent);
  console.log(document.body.h2);
}
//   return titleH1.append(`${title}: ${number}  `);
//   const notice = document.createElement('h2');
//   notice.textContent = 'notice: color change stopped, have a good day)';
//   //     refs.body.append(notice);
//   refs.body.insertAdjacentHTML('beforeend', notice.textContent);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
