
function solveTask12() {
    let edgeLength = getInputNumberFromForm("edgeLengthT12");    
    let volume = getCubeVolume(edgeLength);
    let surface = getCubeSurface(edgeLength);
    document.getElementById("result12").innerHTML = "Az kocka térfogata: " + volume + " , felszíne: " + surface;
}

function getCubeSurface(edgeLength) {
    return 6 * Math.pow(edgeLength, 2);
}

function getCubeVolume(edgeLength) {
    return Math.pow(edgeLength, 3);
}

function getInputNumberFromForm(id) {
    return Number(document.getElementById(id).value);
}