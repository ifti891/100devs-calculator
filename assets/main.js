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
        this.calcAnswer(this.displayText);
        // calculate the answer
        break;
      case "AC":
        //clear screen and stored value
        this.clearAll();
        break;
      case ".":
        if (this.displayText == 0) {
          //pass '0.' into add text method
          this.addText("0.");
        } else {
          //add value to text string
          this.addText(value);
        }
        break;
      default:
        //add value to text string
        this.addText(value);
        break;
    }
  },
  addText(value) {
    if (this.displayText === "0") {
      this.displayText = " ";
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }
    /* check weather the last char in display AND the entered value are not numbers*/
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value;
    //output display text to screen
    this.outputText(this.displayText);
  },

  outputText(text) {
    document.querySelector(".calculator-screen").value = text;
  },

  calcAnswer(equation) {
    let result = Function("return " + equation)();
    this.outputText(result);
  },

  clearAll() {
    (this.displayText = "0"),
      (this.prevTotal = null),
      this.outputText(this.displayText);
  },
};
