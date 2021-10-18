let order = [];
let clickedOrder = [];
let score = 0;

// 0 = vermelho
// 1 = verde
// 2 = azul
// 3 = amarelo

const blue = document.querySelector ('.yellow');
const blue = document.querySelector ('.green');
const blue = document.querySelector ('.red');
const blue = document.querySelector ('.blue');

//Cria ordem aleatorias das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.lenght] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//ascender a proxima cor
let lightColor = (element, number) => {
number = number * 500;
setTimeout(() => {
element.classList.add('selected');
}, number -  250);
setTimeout(() => {
    element.classList.remove('selected');
});
}

//checa se os botoes clicados sao os que ascenderam
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert("Pontuação: ${score}\nVoce acertou PARABENS!\nIniciando proximo nível!");
        nextLevel();
    }
}

//funçao para clicar nas cores
let click = (color) => {
clickedOrder[clickedOrder.length] = color;
createColorElement(color).classList.add('selected');

setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
},250);
}

//funçao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return red;
    } else if(color == 1){
        return green;
    } else if(color == 2){
        return blue;
    } else if(color == 3){
        return yellow;
    }
}

//funçao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funçao de game over
let lose = () => {
    alert("Pontuação: ${score}!\nVoce perdeu!\n Clique em OK para inicar novamente!");
    order = [];
    clickedOrder = [];

    playGame();
}

//funçao para começar o jogo

let playGame = () => {
    alert('Bem vindo ao Jogo Gênesis! Feito Por Matheus Torsoni de Campos');
    score = 0;
    
    nextLevel();
}

//eventos de click das cores
red.onclick = () => click(0)
green.onclick = () => click(1)
blue.onclick = () => click(2)
yellow.onclick = () => click(3)


//inicio do jogo
playGame();