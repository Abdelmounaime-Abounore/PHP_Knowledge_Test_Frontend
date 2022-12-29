var questions = [

    new Questions ("Using which of the following way can you embed PHP code in an HTML page?", ["A - &lt;?php PHP code goes here ?>","B - &lt;? PHP code goes here ?>","C - &lt;script language='php'> PHP code goes here &lt;/script>","D - All of the above."], "D - All of the above."),

    new Questions ("Which of the following is correct about constants vs variables in PHP?", ["A - There is no need to write a dollar sign ($) before a constant, where as in Variable one has to write a dollar sign.","B - Constants cannot be defined by simple assignment, they may only be defined using the define() function.","C - Both of the above.","D - None of the above."], "C - Both of the above."),
    
    new Questions ("Which of the following function is used to locate a string within a string?", ["A - search()", "B - locate()","C - strpos()", "D - None of the above."], "C - strpos()"),
    
    new Questions ("How will you concatenate two strings?", ["A - Using . operator.", "B - Using + operator.", "C - Using add() function", "D - Using append() function"], "A - Using . operator."),
    
    new Questions ("Which of the following is used to check if session variable is already set or not in PHP?", ["A - session_start() function", "B - $_SESSION[]", "C - isset() function", "D - session_destroy() function"], "C - isset() function"),
    
    new Questions ("Which of the following is an array containing information such as headers, paths, and script locations?", ["A - $GLOBALS", "B - $_SERVER", "C - $_COOKIE", "D - $_SESSION"], "B - $_SERVER"),
    
    new Questions ("Which of the following gives a string containing PHP script file name in which it is called?", ["A - $_PHP_SELF", "B - $php_errormsg", "C - $_COOKIE", "D - $_SESSION"], "A - $_PHP_SELF"),
    
    new Questions ("Which of the following method connect a MySql database using PHP?", ["A - mysql_connect()", "B - mysql_query()", "C - mysql_close()", "D - None of the above"], "A - mysql_connect()"),
    
    new Questions ("Which of the following variables is not a predefined variable?", ["A - $get", "B - $ask", "C - $request", "D - $post"], "B - $ask"),
    
    new Questions ("When you need to obtain the ASCII value of a character which of the following function you apply in PHP?", ["A - chr( );", "B - asc( );", "C - ord( );", "D - val( );"], "C - ord( );"),
    
    new Questions ("Which of the following method sends input to a script via a URL?", ["A - Post", "B - Get", "C - Both", "D - None of the above"], "B- Get"),
    
    new Questions ("Which of the following function returns a text in title case from a variable", ["A - ucwords($var)", "B - upper($var)", "C - toupper($var)", "D - ucword($var)"], "A - ucwords($var)"),
    
    new Questions ("Which of the following function returns the number of characters in a string variable?", ["A - count($variable)", "B - len($variable)", "C - strcount($variable)", "D - strlen($variable)"], "D - strlen($variable)"),
    
    new Questions ("What is the use of sprintf() function in PHP?", ["A - The sprintf() function is used to print the output of program", "B - The sprintf() function is used to send output to variable", "C - Both of the above", "D - None of the above"], "B - The sprintf() function is used to send output to variable"),
    
    new Questions ("Which of the following function is used to set cookie in PHP?", ["A - createcookie()", "B - makecookie()", "C - setcookie()", "D - None of the above"], "C - setcookie()")
];



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

shuffleArray(questions);


function populate() {
    if (quiz.isEnded()) {
        showScore ();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestion().text;  // return the current question

        // show choices
        var choices = quiz.getQuestion().choices;   // return the choices of current question  

        for (var i = 0; i < choices.length; i++) {        
            document.getElementsByName('questions')[i].checked = false;    
            var element = document.getElementById("answer" + i);
            var ans = document.getElementById("ans" + i);
            ans.setAttribute("value", choices[i])
            element.innerHTML = choices[i];
            guess("sumbit-button", choices[i]);
        }
        // show progress 
        showProgress ();
    }
};


// function to pass to next question

function guess(id, answers) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(answers);
       
        populate();
    }    
}


// function to show progress

function showProgress() {
   var currentQuestionIndex = quiz.questionIndex + 1;
   var element = document.getElementById("progress");
   element.innerHTML = currentQuestionIndex + "/" + quiz.questions.length;
};


var myButton = document.getElementById("sumbit-button");

myButton.addEventListener("click", function(){

    
    const p = this.parentElement.parentElement;

    const answers = p.querySelectorAll(".answer input");

    let choice = "";

    answers.forEach(answer => {

          if(answer.checked){
            choice = answer.value;
          }

    });

    let answer = quiz.getQuestion().answer;
    if (quiz.correctAnswer(choice, answer)) {
        quiz.score++;
    }
})


// function to show score

function showScore() {
    var gameOver =  "<h1> Result </h1>";
    gameOver += "<h2 id 'score'> You have answered " + quiz.score + " questions correctly</h2>";
    gameOver += "<button id = 'btn'><a href='quiz.html'>Try Again</a></button>";

    var element = document.getElementById("quiz");
    element.innerHTML = gameOver; 
    var result = document.getElementById('result');
    result.className = "active";

};

var quiz = new Quiz(questions);

populate();

