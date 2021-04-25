const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

const changeName = (event) => {
    if (input.value === '') {
        output.textContent = 'незнакомец'
        return
    }
    output.textContent = event.currentTarget.value
}

input.addEventListener('input', changeName)