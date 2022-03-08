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

window.onload = createNumBoxes();
let startTime = 0;

function createNumBoxes() {
    // Selecting numbers div container from DOM
    const container = document.getElementById('numbers');

    for (let i = 1; i <= 5; i++) {
        let box = document.createElement('div');
        box.classList.add(
            'rounded-3',
            'bg-secondary',
            'text-white',
            'p-3'
            );
        container.appendChild(box);
        let numbers = createRandomNumbers(1,100);
        box.innerHTML = numbers;
    }
}

function createRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function timerDisplay() {
    let startTime = 0;
}
// Da lì parte un timer di 30 secondi.