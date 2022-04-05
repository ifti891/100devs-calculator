// required abilities of a calculator
//accept users inputs of number, operator and another number
//should accpet decimal numbers
//store inputs
//recognise inputs and perform calculations
//return results
//optional featires:
//should accept longer arthmetic operations
//display the inputs as they being typed(inputed)
//store previus total as start of next operations.
//clear button should clear all entries
//should prevent invalid inputs (operatores next to each other, two decimal points)

const keys = document.querySelector(".calculator-buttons");
keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;

  if (!target.matches("button")) {
    return;
  } else {
    //pass to parse method
    calculator.parseInput(value);
    // console.log(target)
  }
});

const calculator = {
  displayText: "0",
  prevTotal: null,

  parseInput(value) {
   

    // have any of the "special buttons" been clicked
    switch (value) {
      case "=":
        // calculate the answer
        break;
      case "AC":
        //clear screen and stored value
        break;
      case ".":
        if (this.displayText == 0) {
          //pass '0.' into add text method
        } else {
          //add value to text string
        }
        break;
      default:
        //add value to text string
        break;
    }
  },
  addText(value) {
    if (this.displayText === "0") {
      this.displayText = " ";
    }
  },
};
