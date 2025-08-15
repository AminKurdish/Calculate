// CALCULATOR JS PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

// Function to delete the number in the display
function clearDisplay() {
    display.value = "";
}

function calculate() {
    // Using try-catch to handle any errors during evaluation
    try{
         display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}