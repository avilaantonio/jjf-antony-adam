function solveTask07() {
   create52ResultsOf52Weeks(52);
}

function create52ResultsOf52Weeks(numInputs) {
    // find the element where we will create the numbers
    var container = document.getElementById('lotteryContainer');   

    // clear previous content
    container.innerHTML = '';

    // create header
    var h4 = document.createElement('h4');
    h4.textContent = "Az 52 hét lottószámai: ";
    container.appendChild(h4);

    // create ol
    let ol = document.createElement('ol');
    
    for (var i = 1; i <= numInputs; i++) {
        // create li
        var li = document.createElement('li');
        li.textContent = ' hét: ' + generateLotteryNumbersT07();
        
        // add li to ol
        ol.appendChild(li);        
    }   
    // add ol to the countainer
    container.appendChild(ol);
}

function generateLotteryNumbersT07() {
    let lotteryNumbers = [];
    do {
        let randomNumber = Math.floor(Math.random() * (90-1+1))+1;
        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber)
        }        
    } while (lotteryNumbers.length != 5);
    return lotteryNumbers;
}

