import Notiflix from 'notiflix';

Notiflix.Notify.init({
  fontSize: '20px',
  width: '400px',
  position: 'center-bottom',
  timeout: 5000,
});

const formEl = document.querySelector('.form');
const btnSubmitEl = document.querySelector('.form button');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  const promiseValues = {};
  promiseValues[delay.name] = delay.value;
  promiseValues[step.name] = step.value;
  promiseValues[amount.name] = amount.value;

  let delayX = Number(delay.value);

  for (let index = 1; index <= amount.value; index++) {
    if (index === 1) {
      createPromise(index, delay.value);
    } else {
      delayX = delayX + Number(step.value);
      createPromise(index, delayX);
    }
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(response => Notiflix.Notify.success(response))
    .catch(err => Notiflix.Notify.failure(err));
}
