const itemsByChild = document.querySelectorAll('.item');

const items = Array.from(itemsByChild)
console.log(`В списке ${items.length} категории`)

items.map(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`)
    });



