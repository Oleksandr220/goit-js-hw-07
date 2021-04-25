const counter = document.querySelector('#value')

let counterValue = 0;

const btnDecrement = document.querySelector('[data-action = "decrement"]')
const btnIncrement = document.querySelector('[data-action = "increment"]')
const btnOverload = document.querySelector('[data-action = "overload"]')


function increment(event)  {
    counterValue += 1
    value.textContent = counterValue;
};
function decrement(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
