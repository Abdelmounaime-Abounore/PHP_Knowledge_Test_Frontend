class Quiz extends Questions {

    constructor(questions) {
        super();
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;  
    }
}


// -----------------------------------------------------

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];   // return question
}

// -----------------------------------------------------

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

// -----------------------------------------------------

Quiz.prototype.guess = function (answers) {
    for (var i = 0; i < 4; i++) {
        if (document.getElementsByName('questions')[i].checked == false){
            document.getElementById("sumbit-button").disabled == true;
        } else {
            this.questionIndex++;
        }
    }
}




