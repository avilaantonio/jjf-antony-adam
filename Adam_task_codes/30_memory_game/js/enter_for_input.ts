class InputHandler {
    public inputElement: HTMLElement;

    constructor(elementId: string) {
        this.inputElement = document.getElementById(elementId) as HTMLElement;
        this.inputElement.onkeydown = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event: KeyboardEvent): void {
        const input = event.target as HTMLInputElement;
        if (event.code === "Enter") {
            if ((<HTMLInputElement> document.getElementById("executeBtn")).disabled){
                return;
            }
            console.log(`Entert nyomtam: ${input.value}`);
            imgArrayUpload();
        }
        console.log(`Input value: ${event.code}`);
    }
}