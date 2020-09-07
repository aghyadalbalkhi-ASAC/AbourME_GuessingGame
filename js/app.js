'use strict';

// Asking User To Enter His Name and showing a agreeting windows using alert

var VisiterName = prompt('Welcome to Our Website , Plz Tell Us Your Name');

alert('Hello ' + VisiterName + ' Your in The guessing game about The Own Site \n Plz Make Sure To Answer With These Value \n 1-  y or yes \n 2- n or no \n Either in UpperCase or SmallCase');


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


var OwnerName = prompt('The First Question is , Is The Name Of OwnerSite Mohammed ?');
//console.log(checkAnswer(OwnerName));

if (checkAnswer(OwnerName) === 'y' || checkAnswer(OwnerName) === 'yes') {
  alert('Your Answer Is Wrong');
} else {
  alert('Your Answer Is Right');

}



var OwnerAge = prompt('The Seconde Question is , Is The Age Of OwnerSite 35 ?');
//console.log(checkAnswer(OwnerAge));

if (checkAnswer(OwnerAge) === 'y') {
  alert('Your Answer Is Wrong');
} else {
  alert('Your Answer Is Right');
}


var OwnerCountry = prompt('The Third Question is , Is The Country Of OwnerSite Jordan ?');
//console.log(checkAnswer(OwnerCountry));

if (checkAnswer(OwnerCountry) === 'y') {
  alert('Your Answer Is Wrong');
} else {
  alert('Your Answer Is Right');
}

var OwnerLocation = prompt('The Fourth Question is , Is The Amman City That Owner Site Live Now ?');

//console.log(checkAnswer(OwnerLocation));

if (checkAnswer(OwnerLocation) === 'y') {
  alert('Your Answer Is Wrong');
} else {
  alert('Your Answer Is Right');
}

var OwnerDegree = prompt('The Fifth Question is , Is the Software Engineering the Degree Of WebSite Owner ?');

//console.log(checkAnswer(OwnerDegree));
if (checkAnswer(OwnerDegree) === 'y') {
  alert('Your Answer Is Wrong');
} else {
  alert('Your Answer Is Right');
}

alert('Nice Back and Weclome To Our Site again'+OwnerName);



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
