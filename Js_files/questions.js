 class Questions {
    
    constructor(text, choices, answer) {   

       this.text = text;  
       this.choices = choices;
       this.answer = answer;

    }

}

Questions.prototype.correctAnswer = function(choice, answer) { 
    
return choice === answer;

}

