const DOLLAR_CURRENCY = 29.36;

//Task 1. GetMaxDigit function
function getMaxDigit(number) {
  number = number.toString();

  let maxNumber = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] > maxNumber) {
      maxNumber = number[i];
    }
  }

  return Number(maxNumber);
}

//Task 2. Pow function
const calcNumberPow = function (x, n) {
  let result = x;

  if (!n) {
    result = 1;
  } else if (n < 0) {
    for (let i = 1; i < Math.abs(n); i++) {
      result *= x;
    }
    result = 1 / result;
  } else {
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  }

  return result;
};

//Task 3. GetFirstLetterUpperCase
const getFirstLetterUpperCase = (name) => {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
};

//Task 4. CalcSalaryWithNoFee
export const calcSalaryWithNoFee = (salary) => salary - (salary * 19.5) / 100;

//Task 5. GetRandomNumber function
const getRandomNumber = (numberN, numberM) =>
  Math.ceil(Math.random() * (numberM - numberN) + numberN);

//Task 6. CountLetter function
function countLetter(letter, word) {
  let counter = 0;
  letter = letter.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    const result = word[i].toLowerCase();
    if (result === letter) {
      counter++;
    }
  }
  return counter;
}

//Task 7-8. ConvertCurrency function
function convertCurrency(value) {
  const signUah = value.substring(0, value.length - 3);
  const sign$ = value.substring(0, value.length - 1);

  if (
    (value.endsWith("UAH") || value.endsWith("uah")) &&
    !isNaN(parseInt(value))
  ) {
    value = Math.round(signUah / DOLLAR_CURRENCY) + "$";
  } else if (value.endsWith("$") && !isNaN(parseInt(value))) {
    value = Math.round(sign$ * DOLLAR_CURRENCY) + "UAH";
  } else {
    value = "Enter number please or add the $ currency or UAH(uah)";
  }
  return value;
}

//Task 9-10. GetRandomPassword   при 1 і 2
function getRandomPassword(passwordLength = 8) {
  let randomNum = "";
  for (let i = 0; i < passwordLength; i++) {
    randomNum += Math.floor(Math.random() * 10);
  }

  return randomNum;
}

//Task 11. DeleteLetters function
function deleteLetters(letter, word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      word = word.replace(letter, "");
    }
  }
  return word;
}

//Task 12. Palyndrom function
function isPalyndrom(sentence) {
  let str = deleteLetters(" ", sentence).toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

//Task 13. Delete dublicate letters function.
function deleteDublicateLetters(sentence) {
  if (sentence === "" || Number(sentence)) {
    return "Enter sentence please!";
  }

  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i].toLowerCase();
    if (countLetter(element, sentence) === 1) {
      result += element;
    }
  }
  return result;
}

const result = `<p>Result function #1:
         getMaxDigit(385) - ${getMaxDigit(385)}</p>
         <p>Result function #2:
         calcNumberPow(2, 3) - ${calcNumberPow(2, 3)}</p>
         <p>Result function #3:
         getFirstLetterUpperCase('bOb') - ${getFirstLetterUpperCase("bOb")}</p>
         <p>Result function #4:
         calcSalaryWithNoFee(1000) - ${calcSalaryWithNoFee(1000)}</p>
         <p>Result function #5:
         getRandomNumber(2, 30) - ${getRandomNumber(2, 30)}</p>
         <p>Result function #6:
         countLetter('a', 'AAblablabla') - ${countLetter(
           "A",
           "AAblablabla"
         )}</p>
         <p>Result function #7-8:
         convertCurrency('3560UAH') - ${convertCurrency("3560UAH")}</p>
         <p>Result function #9-10: 
         getRandomPassword(4) - ${getRandomPassword(4)}</p>
         <p>Result function #11:
         deleteLetters('a', 'blablabla') - ${deleteLetters(
           "a",
           "blablabla"
         )}</p>
         <p>Result function #12:
         isPalyndrom('never odd or even') - ${isPalyndrom(
           "never odd or even"
         )}</p>
         <p>Result function #13: 
         deleteDublicateLetters('bob was cold outside') - ${deleteDublicateLetters(
           "bob was cold outside"
         )}</p>
    `;

const container = document.querySelector(".hw-three");
container.innerHTML = result;
