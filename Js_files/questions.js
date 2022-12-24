 class Questions {
    
    constructor(text, choices, answer) {                          // constructor has three parameters, each parameter stored in variable
    this.text = text;  
    this.choices = choices;
    this.answer = answer;
    }

}

Questions.prototype.correctAnswer = function(choice) {                                      // choice parameter presents the user's answer
return choice === this.answer;
}

