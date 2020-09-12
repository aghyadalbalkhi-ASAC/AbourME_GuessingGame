'use strict';

// Asking User To Enter His Name and showing a agreeting windows using alert
var score = 0;
var VisiterName = prompt('Welcome to Our Website , Plz Tell Us Your Name');

alert('Hello ' + VisiterName + ' Your in The guessing game about The Own Site \n Plz Make Sure To Answer With These Value \n 1-  y or yes \n 2- n or no \n Either in UpperCase or SmallCase');

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSven();
bonus();

///////////////////////////////////////////////////////////////////////////////////////////

/*
In This Section WE Ask The User To Answer  Questions
about The OnwerSite and Guess It Usnig guessing

- There are Five Question with Yes Or No Answers
- User should be Insert the Answer in a Promot Windows Using prompt() Function
- User should Enter Specifs Value Such as y/n or Yes/No Either In smallLetter or upperLatter
- Checking the answer using CheckAnswer Fucation and convert answer to LowerLatter
- using If Steatment to Check the User answer with Ownersite info
- Showing the alert Window That Tell the User The Answers
*/

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
/*
Lab: 03 - Extend your 'About Me' and guessing game

>> What's New

- Adding Additonal Functionality
- Modifying ReadMe.md Files with The New Features

*/

function questionOne() {
  var OwnerName = prompt('The First Question is , Is The Name Of OwnerSite Mohammed ?');
  //console.log(checkAnswer(OwnerName));

  if (checkAnswer(OwnerName) === 'y' || checkAnswer(OwnerName) === 'yes') {
    alert('Your Answer Is Wrong');
  } else {
    alert('Your Answer Is Right');
    score++;
  }
}

function questionTwo() {
  var OwnerAge = prompt('The Seconde Question is , Is The Age Of OwnerSite 35 ?');
  //console.log(checkAnswer(OwnerAge));

  if (checkAnswer(OwnerAge) === 'y') {
    alert('Your Answer Is Wrong');
  } else {
    alert('Your Answer Is Right');
    score++;
  }
}

function questionThree() {
  var OwnerCountry = prompt('The Third Question is , Is The Country Of OwnerSite Jordan ?');
  //console.log(checkAnswer(OwnerCountry));

  if (checkAnswer(OwnerCountry) === 'y') {
    alert('Your Answer Is Wrong');
  } else {
    alert('Your Answer Is Right');
    score++;
  }
}

function questionFour() {
  var OwnerLocation = prompt('The Fourth Question is , Is The Amman City That Owner Site Live Now ?');

  //console.log(checkAnswer(OwnerLocation));

  if (checkAnswer(OwnerLocation) === 'y') {
    alert('Your Answer Is Wrong');
  } else {
    alert('Your Answer Is Right');
    score++;
  }
}
function questionFive() {
  var OwnerDegree = prompt('The Fifth Question is , Is the Software Engineering the Degree Of WebSite Owner ?');

  //console.log(checkAnswer(OwnerDegree));
  if (checkAnswer(OwnerDegree) === 'y') {
    alert('Your Answer Is Wrong');
  } else {
    alert('Your Answer Is Right');
    score++;
  }


  alert('Nice Back and Weclome To Our Site again ' + VisiterName + '\n \n Your Score Until Now Is : ' + score);
}

/*

////Extra Lab-03 Adding 6th question That ask the user about my vlounteering Work Hours Of SiteOwner

- Adding Two question

*/

//////// First question to ask the Visitor about Volunteer Works Hours That SiteOwner Has.
function questionSix() {
  // alert window to tell Visitor about game
  alert('Guess How Many Volunteer Works Hours That SiteOwner Has , You Have 4 attempts');

  var Vh; // To Store User Input

  var answer = [];    //Sotre all UserIput to Show it in The End Of the Game

  // Loop With 4 iteration To give the user 4 attempts To guess
  for (var i = 1; i <= 4; i++) {

    Vh = prompt('Enter your answer , You spend ' + i + ' Of Your opportunities *-*');    //Get Input From User
    Vh = Number(Vh); // Converting value To Number
    answer.push(Vh);  //adding answer to Array 

    //Checking user Input
    if (Vh < 3000) {

      alert('Tooooooo Low');
    } else if (Vh > 3000) {

      alert('Tooooooo High');

    } else {
      alert('Your are Right ^_^ I have 3000 Volunteer Hours');
      score++;
      break;
    }

  } // End Loop

  // Showing The Correct Answer and User Input as a Alert Window
  alert('The Correct Answer is : 3000 Volunteer Hours *-^ \n Your Answer \n 1- ' + answer[0] + ' \n 2-' + answer[1] + ' \n 3- ' + answer[2] + ' \n 4- ' + answer[3]);
}



/*
The 7th question will be about the Favorite Cars 0f The SiteOwner

- asking Visitor To Guess The Car Names and Compare it with AN Array That Store Yhe Cars Names
*/
function questionSven() {
  alert('I Know You Hate Me Now But Tell That To Out instructor ^-^  , I hope This Will Be The Final question -_- \n Guess The Names Of Favorite Cars That SiteOwn liked');

  var Cars = ['bmw', 'audi', 'volkswagen', 'mercedes', 'maserati', 'cadillac', 'porsche', 'lexus'];

  var UserCarInput;

  //loop for 6 Time 

  for (var j = 1; j <= 6; j++) {

    UserCarInput = prompt('Enter The Car Name ^_8 , This The' + j + 'Attempt').toLocaleLowerCase();   //Getting Answer and Convert It To LowerCase

    if (CheckInsidArray(UserCarInput,Cars)) {    //Check The Condition By Calling CheckInsidArray To Know If The User Insert The Correct answer that be in array
      score++;
      alert('You got it *-^ \n The Correct Answer \n 1- ' + Cars[0] + ' \n 2-' + Cars[1] + ' \n 3- ' + Cars[2] + ' \n 4- ' + Cars[3] + '\n 5- ' + Cars[4] + '\n 6-' + Cars[5]);
      break;
    }

  }
}

function bonus() {
  var Bonus = confirm('Dear ' + VisiterName + '\n Your Score Is ' + score + '\n What About Some Bonus ? Do You Want ^_* ?');

  if (Bonus === true) {
    alert('This Is My IBAN NUMBER Of My Bank Account JO45BJOR0530000013050454222006 Transfer an amount based on the below offer \n 1- 10$ for 1 Bonus \n 2- 100$ For 20 Bouns \n 3- 150$ For 50 Bonus \n 4- 1000$ Choose what you like  ');
  } else {
    alert('Your are Not A good User -_- , Try To Click Ok ^_*');
  }
}

// Checking UserInput with Array Value

function CheckInsidArray(answer,Cars) {

  var CheckResult = false;    //result Return

  // Loops To check array items
  for (var i = 0; i < Cars.length; i++) {

    if (Cars[i] === answer) {
      CheckResult = true;
      break;
    }

  }
  return CheckResult;

}

function checkAnswer(answer) {

  var result;
  switch (answer.toLowerCase()) {

  case 'y':
    result = 'y';
    break;

  case 'n':
    result = 'n';
    break;

  case 'yes':
    result = 'y';
    break;

  case 'no':
    result = 'n';
    break;

  default:
    alert('Your are Not Entered a Correct Valuer : y/n or yes/no');
    break;
  }
  return result;

}
