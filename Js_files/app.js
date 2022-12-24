
function populate() {
    if (quiz.isEnded()) {
        // showScore ();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;  // return the current question

        // show choices
        var choices = quiz.getQuestionIndex().choices;   // return the choices of current question 
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("answer" + i);
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


// function to show score

function showScore() {
    var gameOver =  "<h1> Result </h1>";
    gameOver += "<h2 id 'score'> Your score :" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver; 
};


var questions = [

    new Questions ("Q 1 - Using which of the following way can you embed PHP code in an HTML page?", ["A - &lt;?php PHP code goes here ?>","B - &lt;? PHP code goes here ?>","C - &lt;script language='php'> PHP code goes here &lt;/script>","D - All of the above."], "D - All of the above."),

    new Questions ("Q 2 - Which of the following is correct about constants vs variables in PHP?", ["A - There is no need to write a dollar sign ($) before a constant, where as in Variable one has to write a dollar sign.","B - Constants cannot be defined by simple assignment, they may only be defined using the define() function.","C - Both of the above.","D - None of the above."], "C - Both of the above."),
    
    new Questions ("Q 3 - Which of the following function is used to locate a string within a string?", ["A - search()", "B - locate()","C - strpos()", "D - None of the above."], "C - strpos()"),
    
    new Questions ("Q 4 - How will you concatenate two strings?", ["A - Using . operator.", "B - Using + operator.", "C - Using add() function", "D - Using append() function"], "A - Using . operator."),
    
    new Questions ("Q 5 - Which of the following is used to check if session variable is already set or not in PHP?", ["A - session_start() function", "B - $_SESSION[]", "C - isset() function", "D - session_destroy() function"], "C - isset() function"),
    
    new Questions ("Q 6 - Which of the following is an array containing information such as headers, paths, and script locations?", ["A - $GLOBALS", "B - $_SERVER", "C - $_COOKIE", "D - $_SESSION"], "B - $_SERVER"),
    
    new Questions ("Q 7 - Which of the following gives a string containing PHP script file name in which it is called?", ["A - $_PHP_SELF", "B - $php_errormsg", "C - $_COOKIE", "D - $_SESSION"], "A - $_PHP_SELF"),
    
    new Questions ("Q 8 - Which of the following method connect a MySql database using PHP?", ["A - mysql_connect()", "B - mysql_query()", "C - mysql_close()", "D - None of the above"], "A - mysql_connect()"),
    
    new Questions ("Q 9 - Which of the following variables is not a predefined variable?", ["A - $get", "B - $ask", "C - $request", "D - $post"], "B - $ask"),
    
    new Questions ("Q 10 - When you need to obtain the ASCII value of a character which of the following function you apply in PHP?", ["A - chr( );", "B - asc( );", "C - ord( );", "D - val( );"], "C - ord( );"),
    
    new Questions ("Q 11 - Which of the following method sends input to a script via a URL?", ["A - Post", "B - Get", "C - Both", "D - None of the above"], "B- Get"),
    
    new Questions ("Q 12 - Which of the following function returns a text in title case from a variable", ["A - ucwords($var)", "B - upper($var)", "C - toupper($var)", "D - ucword($var)"], "A - ucwords($var)"),
    
    new Questions ("Q 13 - Which of the following function returns the number of characters in a string variable?", ["A - count($variable)", "B - len($variable)", "C - strcount($variable)", "D - strlen($variable)"], "D - strlen($variable)"),
    
    new Questions ("Q 14 - What is the use of sprintf() function in PHP?", ["A - The sprintf() function is used to print the output of program", "B - The sprintf() function is used to send output to variable", "C - Both of the above", "D - None of the above"], "B - The sprintf() function is used to send output to variable"),
    
    new Questions ("Q 15 - Which of the following function is used to set cookie in PHP?", ["A - createcookie()", "B - makecookie()", "C - setcookie()", "D - None of the above"], "C - setcookie()")
];

    
var quiz = new Quiz(questions);

populate();

