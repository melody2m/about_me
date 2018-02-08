
"use strict";

//initialize counter for correct answers (4 answers are always correct)
var numRight = 4; 

//introductions
alert('welcome to my guessing game');
alert('these questions might not be strictly about me, but you should learn a bit about me through answering them, nonetheless.');

//get username
var userName = prompt('First off, what\'s your name?');
alert('Okay, great, thanks for being here... ' + userName + '.');
console.log ('asked for a name, received ' + userName);

//instructions
alert('now for the questions. please answer these first five in the format y/n or yes/no');

//first question loop
var doneQ = false;

while (doneQ === false) {
    var ans1 = prompt('Question 1. Is Kermit the best frog?').toLowerCase().trim();

    if (ans1 === 'y' || ans1 === 'yes') {
        alert('Heck yeah, ' + userName + '!');
        doneQ = true;
    }
    else if (ans1 === 'n' || ans1 === 'no') {
        alert('You\'re right, ' + userName + '-- with all the trillions of frogs out there, how could we possibly identify Kermit as the unequivocal best?');
        doneQ = true;
    }
    else{
        alert('please answer with either y/n or yes/no');
    }
}
console.log ('asked for an answer to question 1, received ' + ans1);

//second question
doneQ = false;

while (doneQ === false) {
    var ans2 = prompt('Question 2. Is a shark a fish?').toLowerCase().trim();

    if (ans2 === 'y' || ans2 === 'yes') {
        alert('Heck yeah, ' + userName + '! It swims like a fish, it is a darn fish!');
        doneQ = true;
    }
    else if(ans2 === 'n' || ans2 === 'no') {
        alert('Of course, ' + userName + '! They\'re totally different! What a crazy question!');
        doneQ = true;
    }
    else{
        alert('please answer with either y/n or yes/no');
    }
}
console.log ('asked for answer to question 2, received ' + ans2);

//third question
doneQ = false;

while (doneQ === false) {
    var ans3 = prompt('Question 3. Are you a success, in life?').toLowerCase().trim();

    if (ans3 === 'y' || ans3 === 'yes') {
        alert('Heck yeah, ' + userName + ', rock on!');
        numRight++;
        doneQ = true;
    }
    else if (ans3 === 'n' || ans3 === 'no') {
        alert('WRONG, ' + userName + '! you are a ROCK STAR!');
        doneQ = true;
    }
    else{
        alert('please answer with either y/n or yes/no')
    }
}
console.log ('asked for answer to question 3, received ' + ans3);

//fourth question
doneQ = false;
while (doneQ === false) {
    var ans4 = prompt('Question 4. Is math fun?').toLowerCase().trim();

    if (ans4 === 'y' || ans4 === 'yes') {
        alert('YES, ' + userName + ', math is super fun. so   much   fun');
        doneQ = true;
    }
    else if (ans4 === 'n' || ans4 === 'no') {
        alert('you\'re right, ' + userName + ', math can be a drag');
        doneQ = true;
    }
    else{
        alert('please answer with either y/n or yes/no')
    }
}
console.log ('asked for answer to question 4, received ' + ans4);

//fifth question
doneQ = false;

while (doneQ === false) {
    var ans5 = prompt('Question 5. Are drugs bad?' ).toLowerCase().trim();

    if (ans5 === 'y' || ans3 === 'yes' ) {
        alert('You nailed it, ' + userName + '! Of course they are bad!');
        doneQ = true;
    }
    else if (ans5 === 'n' || ans5 === 'no') {
        alert('You\'re right, ' + userName + ', to say drugs are bad in such an unequivocal manner is narrow-minded!');
        doneQ = true;
    }
    else{
        alert('please answer with either y/n or yes/no');
    }
}
console.log('asked for answer to question 5, received ' + ans5);

//new directions

alert('the yes/no part is over, ' + userName + '. You\'ll have to answer the next question as a number.')

//sixth question, guess a number in 4 attempts

//initialize a guess counting variable and a variable storing the correct answer

var guessCount = 0;
var correctNum = 6;

// loop for guessing the right answer

while (guessCount < 4){
    var ans6 = prompt('How much is too much?').trim();
    var ans6Num = parseInt(ans6)

    if (ans6Num > correctNum){
        alert('Your guess, ' + ans6Num + ', is more than too much. Try again.');
        guessCount++;
        alert ((4 - guessCount) + ' guess(es) remaining.');
    }
    else if (ans6Num < correctNum){
        alert('Your guess, ' + ans6Num + ', is less than too much. Try again.');
        guessCount++;
        alert ((4 - guessCount) + ' guess(es) remaining.');
    }
    else if (ans6Num === correctNum) {
        alert('Correct! your guess, ' + ans6Num + ', is exactly too much!');
        alert ('You guessed it in ' + (guessCount + 1) + ' guess(es).');
        numRight++;
        break;
    }
    else {
        alert('What? You just lost a guess.')
        guessCount++;
        alert ((4 - guessCount) + ' guess(es) remaining.');
    }
}
// transition to the next question

if (ans6Num === correctNum) {
    alert ('Super job, ' + userName + ', now for the next question.');
    var gotQuestion6 = 'excellent';
}
else {
    alert ('Too bad ' + userName + ', you couldn\'t guess it. Time to move on. The right answer was ' + correctNum + ', by the way');
    gotQuestion6 = 'bad';
}

console.log('user receives a grade of ' + gotQuestion6 + ' on this question.');

//final question, number 7

// reset guessCount and make an array for correct guesses. also initialize another var to break the loop with

var guessCount = 0;
var correctGuesses = ["money","fame","sex","lambo","gucci","goose","dancin","gettin swole"];
var q7Right = false;

while (guessCount < 6){
    
    var ans7 = prompt('What really matters in life? You only have to guess one thing out of 8 I thought of so this should be easy.');

    for (var i = 0; i < correctGuesses.length; i++){
        console.log (i)
        if (correctGuesses[i] === ans7){
            alert('you know your stuff, ' + userName + '. ' + ans7 + ' is fantastic.');
            alert('you got something right in ' + (guessCount + 1) + ' guess(es).');
            q7Right = true;
            numRight++;
        }
    }

    if (q7Right === true){
        break;    
    }
    else {
        guessCount++;
        alert('nah... try again.');
        if (guessCount === 6){
            alert('actually, you\'re done.')
        }
        alert((6 - guessCount) + ' guess(es) remaining.');
    }
}


if (q7Right === true) {
    alert('cool, you got it.');
    console.log(userName + ' got question 6 right.');
}
else{
    alert('maybe you\'ll understand one day.');
}

// share correct answers

alert('here are the correct answers. 8 of them.')

for (var i = 0; i < correctGuesses.length; i++){
    alert('number ' + (i +1) + ': ' + correctGuesses[i]);
}

console.log('numRight is ' + numRight);

//end

var goodEnd = false;

if (numRight === 7){
    goodEnd = true;
}

alert('That\s all the questions! Thanks for answering, ' + userName + '! I really and truly appreciate it.');

if (goodEnd === true){
    alert('you got all the questions right. fantastic. :)))');
}
else{
    alert('you got ' + numRight + ' out of 7 questions right. Feel free to try for perfect by hitting refresh.');
}