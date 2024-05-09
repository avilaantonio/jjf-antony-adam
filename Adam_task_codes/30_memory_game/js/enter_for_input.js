"use strict";
class InputHandler {
    constructor(elementId) {
        this.inputElement = document.getElementById(elementId);
        this.inputElement.onkeydown = this.handleKeyUp.bind(this);
    }
    handleKeyUp(event) {
        const input = event.target;
        if (event.code === "Enter") {
            if (document.getElementById("executeBtn").disabled) {
                return;
            }
            console.log(`Entert nyomtam: ${input.value}`);
            imgArrayUpload();
        }
        console.log(`Input value: ${event.code}`);
    }
}
