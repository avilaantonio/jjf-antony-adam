function startGame() {
    let numberOfCards = getNumberOfCards();
    let randomPictures = generateRandomPicArrangement(numberOfCards);
    generatedCards(numberOfCards, randomPictures);             
}

function generateRandomPicArrangement(numberOfCards) {
    let pictures = [];
    do {
        let randomNumber = Math.floor(Math.random() * (numberOfCards)) + 1;
        if (!pictures.includes(randomNumber)) {
            pictures.push(randomNumber)
        }
    } while (pictures.length != numberOfCards);
    return pictures;
}

function getNumberOfCards() {
    let difficultyLevel = Number(document.getElementById("difficultyLevel").value);            
            
    let numberOfCards;
    switch (difficultyLevel) {        
        case 1: numberOfCards = 4;
            break;
        case 2: numberOfCards = 8;
            break;
        default: alert("Wrong data!!!");
            break;
    }
    return numberOfCards;
}

function  generatedCards(numberOfCards, randomPictures) {
    let randomPic = [];
    do {
        let randomNumber = Math.floor(Math.random() * (numberOfCards-1+1))+1;
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber)
        }        
    } while (randomPic.length != numberOfCards);
    console.log(randomPic);

     for (let i = 0; i < numberOfCards; i++) {

        let div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('mb-3');

        let div2 = document.createElement('div');
        div2.classList.add('square');
        div2.classList.add('rounded');
        
        div2.textContent = `Picture -  ${randomPic[i]}`;
        div.appendChild(div2);

        document.querySelector('.row').appendChild(div);
    }
}

//------------- later ---------------
    // Select a card
    /*
    document.getElementsByClassName("selectCard").addEventListener("click", showImage);
    
    function showImage(){
        
    }
    */