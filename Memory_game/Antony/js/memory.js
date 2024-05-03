function startGame() {
    let numberOfCards = getNumberOfCards();
    generatedCards(numberOfCards);   
    console.log(numberOfCards);               
}

function getNumberOfCards() {
    let difficultyLevel = Number(document.getElementById("difficultyLevel").value);            
    let _1x4 = 4;
    let _2x4 = 8;            
    let numberOfCards;

    switch (difficultyLevel) {
        case 0: alert("Choose a difficulty level");
            break;
        case 1: numberOfCards = _1x4;
            break;
        case 2: numberOfCards = _2x4;
            break;
        default: alert("Wrong data!!!");
            break;
    }
    return numberOfCards;
}

function  generatedCards(numberOfCards) {
     // Generates x number of div
     for (let i = 0; i < numberOfCards; i++) {
        // Create a new div
        let div = document.createElement('div');
        // Add Bootstrap classes to div
        div.classList.add('col');
        div.classList.add('mb-3');

        // Create inner div
        let div2 = document.createElement('div');
        div2.classList.add('square');
        
        // Set content
        div2.textContent = `Div ${i + 1}`;
        div.appendChild(div2);

        // Add the generated div to the row class
        document.querySelector('.row').appendChild(div);
    }
}