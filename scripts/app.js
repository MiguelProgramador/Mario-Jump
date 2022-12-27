/* Criações de variáveis */

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const over = document.querySelector('.perder');
const repeat = document.querySelector('.repetir');
const score = document.querySelector('.pontos');
const scoreFinal = document.querySelector('.scoreFinal')

let count = 0 /* Fim das variáveis */


/* Config da animação para pular  */
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


/* Config de pontos, posições, score, colisões e estilo */
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        cloud.style.animation = 'none';
        
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        
        over.style.visibility = 'visible';
        over.style.opacity = '1';
        
        scoreFinal.innerHTML = `Você obteve: ${count} pontos`

        clearInterval(loop);

        count = 0;

    }
    
    
    /* Contador */
    count ++;
    score.innerHTML = `SCORE: ${count}`;
}, 10);


/* Evento para quando clicar em alguma tecla o boneco pular */
document.addEventListener('keydown', jump);