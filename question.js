function Question(text, choices, answer){             // constructor function
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.correctAnswer= function(choice){
    return choice===this.answer;
}
