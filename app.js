function populate(){
    if(quiz.isEnded()){
        showscores();
    }
    else{
        //show question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        //show choices

        var choices=quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
            var element=document.getElementById("choice" + i);
            element.innerHTML= choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button=document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber= quiz.questionIndex + 1;
    var element= document.getElementById("progress");
    element.innerHTML= " Question " +  currentQuestionNumber +  " of "  +  quiz.questions.length;
}

function showscores(){
    var gameoverHTML="<h1>Result</h1>";
    gameoverHTML += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
    var element=document.getElementById("quiz" );
    element.innerHTML=gameoverHTML ;
};


var questions=[
    new Question("Which is the Capital of Nepal?", ["Kathmandu", "Pokhara", "Bhaktapur", "Lalitpur"], "Kathmandu"),
    new Question("Which is the Capital of India?", ["Kathmandu", "Mumbai", "Bhaktapur", "NewDelhi"], "NewDelhi"),
    new Question("Which is the Capital of Germany?", ["Kathmandu", "Berlin", "Kiel", "Lalitpur"], "Berlin"),
    new Question("Which is the Capital of France?", ["Kathmandu", "Pokhara", "Paris", "Lalitpur"], "Paris"),
    new Question("Which is the Capital of USA?", ["Kathmandu", "New York", "Washington DC", "Lalitpur"], "Washington DC")
];

var quiz= new Quiz(questions);

populate();