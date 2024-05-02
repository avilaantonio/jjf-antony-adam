
function solveTask13() {
    let radius = getInputNumberFromForm("radiusT13"); 
    let height = getInputNumberFromForm("heightT13");     
    let volume = getConeVolume(radius, height);
    let surface = getConeSurface(radius, height);
    document.getElementById("result13").innerHTML = "Az kocka térfogata: " + volume + " , felszíne: " + surface;
}

function getConeSurface(radius, height) {
    return Math.PI * (radius * (radius + (Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))));
}

function getConeVolume(radius, height) {
    return (Math.PI / 3) * Math.pow(radius, 2) * height;
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}