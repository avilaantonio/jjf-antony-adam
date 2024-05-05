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
    document.getElementById("startButton").disabled = true;
    return numberOfCards;
}
// 37. 
let images = ['img/01a.jpg', 'img/01b.jpg', 'img/02a.jpg', 'img/02b.jpg'];

function generatedCards(numberOfCards, randomPictures) {
    let randomPic = [];
    do {
        let randomNumber = Math.floor(Math.random() * (numberOfCards)) + 1;
        if (!randomPic.includes(randomNumber)) {
            randomPic.push(randomNumber)
        }
    } while (randomPic.length != numberOfCards);
    console.log(randomPic);

    for (let i = 0; i < numberOfCards; i++) {

        let div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('mb-3');

        /*
        function randomImg(numbers, img) {
            img = [];
            for (let i = 0; i < numbers.length; i++) {
                img.push("img/img" + numbers[i] + ".jpg");
            }
            return img;
        }
        */

        let div2 = document.createElement('div');
        div2.classList.add('square');
        div2.classList.add('rounded');
        div2.classList.add('d-none');
        // classList.remove('d-flex');




        div2.textContent = `p${randomPic[i]}`;
        div.appendChild(div2);

        document.querySelector('.row').appendChild(div);
    }
}

//------------------------------------

document.getElementsByClassName("selectCard").addEventListener("click", showImage);

let counter = 0;
function showImage() {
    counter++;
    if (counter == 2) {
        // comparison
         
        if (condition) {
            
        }
        counter = 0;
    }
}


