const board =
document.getElementById('gameBoard');
console.log(board);
const letters = 'AABBCCDDEEFFGGHH' .split('');
let shuffled = letters.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;

shuffled.forEach(letter => {
    const card = document.createElement('div');
    card.classList.add('card');

    const inner = document.createElement('div');
    inner.classList.add('inner');

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = 'flip'

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = letter;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => {
        if (lockBoard || card.classList.contains('flipped')) return;

        card.classList.add('flipped');

        if (!firstCard) {
            firstCard = card;
            return;
        }

        secondCard = card;
        lockBoard = true;

        const firstLetter = 
        firstCard.querySelector('.back').textContent;
        const secondLetter =
        secondCard.querySelector('.back').textContent;

        if (firstLetter === secondLetter){
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            }, 1000);
            }
        });
        board.appendChild(card);
    });
