const imgHolderDiv = document.getElementById('imgHolderDiv');
function startGame() {
    let numberOfCards = getNumberOfCards();
    let randomPictures = generateRandomPicArrangement(numberOfCards);

    generatedCards(numberOfCards, randomPictures);
}

const images = ['img/01a.jpg', 'img/01b.jpg', 'img/02a.jpg', 'img/02b.jpg'];
function generateRandomPicArrangement(numberOfCards) {
    let pictures = [];
    do {
        let randomNumber = Math.floor(Math.random() * (numberOfCards));
        if (!pictures.includes(images[randomNumber])) {
            pictures.push(images[randomNumber])
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
    document.getElementById("startButton").disabled = true;
    return numberOfCards;
}

function generatedCards(numberOfCards, randomPictures) {
    imgHolderDiv.innerHTML = "";
    for (let i = 0; i < numberOfCards; i++) {
        //-------------- 2. -----------------
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="col mb-3">`,
            `   <div class="rounded">`,
            `       <img id="${randomPictures[i]}" class="w-100" src="${randomPictures[i]}" alt="${randomPictures[i]}">`,
            '   </div>',
            '</div>'
        ].join('');
        imgHolderDiv.append(wrapper);
    }
}

//------------- next ---------------
// Select a card
/*
document.getElementsByClassName("selectCard").addEventListener("click", showImage);

let counter = 0;
function showImage() {
    counter++;
    if (counter == 2) {
        // comparison
        // classList.remove('d-flex'); 
        if (condition) {
            
        }
        counter = 0;
    }
}
    
}
*/