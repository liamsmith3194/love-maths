


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});
/**
 * The main game "loop" called dskf udgh fhgfff sf ggf
 * i hgdfh gfhgdfhg h d 
 */

function runGame() {

    let num1 = Math.floor(Math.random() *25)+1;
    let mum2 = Math.floor(Math.random() *25)+1;

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubstractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivisionQuestion() {
    
}