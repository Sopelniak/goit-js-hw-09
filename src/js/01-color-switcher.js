const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', onBtnStartClick);
// btnStopEl.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnStartClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(bodyEl.style.backgroundColor);
}
