const btnSubmitEl = document.querySelector('.form button');

btnSubmitEl.addEventListener('submit', onBtnSubmitEl());

function onBtnSubmitEl(event) {
  timerId = setInterval(() => {
    event.preventDefault();
    const {
      elements: { delay, step, amount },
    } = event.currentTarget;

    const promiseValues = {};
    promiseValues[delay.name] = delay.value;
    promiseValues[step.name] = step.value;
    promiseValues[amount.name] = amount.value;

    createPromise(position, delay);
  }, 1000);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
