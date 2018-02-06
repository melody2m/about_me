
"use strict";

//introductions
alert('welcome to my guessing game');
alert('these questions might not be strictly about me, but you should learn a bit about me through answering them, nonetheless.');

//get username
var userName = prompt('First off, what\'s your name?');
alert('Okay, great, thanks for being here... ' + userName + '.');
console.log ('asked for a name, received ' + userName);

//instructions
alert('now for the questions. please answer in the format y/n or yes/no');

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

//fifth and final question
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

//end

alert('thanks for answering these questions, ' + userName + '! I really and truly appreciate it.')
alert('you answered: ' + ans1 + ' ' + ' ' + ans2 + ' ' + ans3 + ' ' + ans4 + ' ' + ans5);