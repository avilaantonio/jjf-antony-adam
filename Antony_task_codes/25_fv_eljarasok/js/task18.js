
function solveTask18() {
    let result = getResult();
    let resultMessageT18 = getResultMessageT18(result);
    
    document.getElementById("result18").innerHTML = resultMessageT18;
}

function getResultMessageT18(result) {
    let message = "";    
    result.forEach(item => {
        if (item == 0) {
            message += "fej; "
        } else if (item == 1){
            message += "írás; "
        }
    });
    return message;
}

function getResult() {
    let result = [];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 2)
        result.push(randomNumber);
    }
    return result;
}