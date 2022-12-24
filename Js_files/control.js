
// this file contains the scores, the number of questions


class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;  
    }
}

// -----------------------------------------------------

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];   // return question
}

// -----------------------------------------------------

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

// -----------------------------------------------------

Quiz.prototype.guess = function (answers) {
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnwer(answers)) {
        this.score ++;
    }
}