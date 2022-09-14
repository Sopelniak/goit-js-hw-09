import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  fontSize: '20px',
  width: '400px',
  position: 'center-center',
});

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');

let timerId = null;
let ms = 0;
let selectedDate;

timerEl.style.display = 'flex';
timerEl.style.justifyContent = 'space-evenly';
timerEl.style.textShadow = '2px 2px 5px #ffffff';
timerEl.style.fontSize = '40px';

btnEl.addEventListener('click', onBtnStartClick);

disabledBtn(btnEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function disabledBtn(btn) {
  btn.disabled = true;
}

function anabledBtn(btn) {
  btn.disabled = false;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
      // window.alert('Please choose a date in the future!');
    } else {
      Notiflix.Notify.success('👍👍👍👍👍👍👍👍👍👍👍👍');

      selectedDate = selectedDates[0];
      anabledBtn(btnEl);
    }
  },
};

flatpickr(inputEl, options);

function onBtnStartClick() {
  timerId = setInterval(() => {
    ms = selectedDate.getTime() - new Date().getTime();
    if (ms > 0) {
      timerEl.style.backgroundColor = getRandomHexColor();

      const timeToEndObject = convertMs(ms);
      for (let key in timeToEndObject) {
        document.querySelector(`[data-${key}]`).textContent = addLeadingZero(
          timeToEndObject[key]
        );
      }
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
