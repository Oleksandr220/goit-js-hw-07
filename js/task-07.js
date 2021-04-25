const fontSizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

const onFontSizeChange = (event) => {
    text.style.fontSize = `${fontSizeControl.value}px`;
}


fontSizeControl.addEventListener('change', onFontSizeChange)