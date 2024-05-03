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
     for (let i = 0; i < numberOfCards; i++) {

        let div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('mb-3');

        let div2 = document.createElement('div');
        div2.classList.add('square');
        div2.classList.add('rounded');
        
        div2.textContent = `Div ${i + 1}`;
        div.appendChild(div2);

        document.querySelector('.row').appendChild(div);
    }
}