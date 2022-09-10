const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function disabledBtn(btn) {
  btn.disabled = true;
}

function anabledBtn(btn) {
  btn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnStartClick() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  disabledBtn(btnStartEl);
  anabledBtn(btnStopEl);
}

function onBtnStopClick() {
  clearInterval(timerId);
  anabledBtn(btnStartEl);
  disabledBtn(btnStopEl);
}

disabledBtn(btnStopEl);
