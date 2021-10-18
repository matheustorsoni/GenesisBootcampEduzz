let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector ('.yellow');
const blue = document.querySelector ('.green');
const blue = document.querySelector ('.red');
const blue = document.querySelector ('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.lenght] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
number = number * 500;
setTimeout(() => {
element.classList.add('selected')
}, tempo - 300 );

setTimeout(() => {
    element.classList.remove('selected')
});


}