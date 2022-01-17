let order = [];
let clickedOrder = [];
let score = 0;


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Funcao que cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        turnOn(elementColor, Number(i) + 1);
    }
}

//Funcao que acende a proxima cor
let turnOn = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Funcao que checa se os botoes clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nParabéns! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Funcao que recebe o clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nGame Over!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    newGame();
}

//Funcao de inicio do jogo
let newGame = () => {
    alert('Bem vindo! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


newGame();