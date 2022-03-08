/**
 * Descrizione:
    Visualizzare in pagina 5 numeri casuali.
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    Consigli del giorno:
    Pensate prima in italiano.
    Dividete in piccoli problemi la consegna.
    Individuate gli elementi di cui avete bisogno per realizzare il programma.
 */

// Selecting numbers div container from DOM
const container = document.getElementById('numbers');
const result = document.getElementById('result');

window.onload = createNumBoxes();

let timeLeft = 30;
let counter = document.getElementById('counter');
var timer = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timer);
        container.style.display = 'none';
    } else {
        counter.innerHTML = timeLeft + ' seconds remaining';
        console.log(counter);
        timeLeft--;
    }
}

// setTimeout(() => {
//         container.style.display = 'none';

//         // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//         const userInput = [];

//         for (let i = 0; i < userInput.length; i++) {
//             parseInt(prompt('Insert all the numbers you have memorized:')).split('',' ');
//         }

//         const nums = createNumsList(1, 5);
//     }, 30000);

function createNumBoxes() {

    for (let i = 1; i <= 5; i++) {
        let box = document.createElement('div');
        box.classList.add(
            'box',
            'rounded-3',
            'bg-secondary',
            'text-white',
            'display-3',
            'mx-3',
            'd-flex',
            'justify-content-center',
            'align-items-center'
            );
        container.appendChild(box);
        let numbers = createRandomNumbers(1,100);
        box.innerHTML = numbers;
    }
}

function createNumsList(nums, maxInt) {
    const numsList = [];
    for (let i = 0; i < nums; i++) {
        console.log(numsList);
        numsList.push(createRandomNumbers(numsList, 1, maxInt));
    }
    return numsList;
}

function createRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkInputNumbers() {}

// function timerDisplay() {
//     let startTime = 0;
// }
// Da lì parte un timer di 30 secondi.