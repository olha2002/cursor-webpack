const BAD_WORDS = ["shit", "fuck"];

// Function 1. Gets the random array
const getRandomArray = (length, min, max) => {
  const randomArr = [];

  if (min > max) {
    return "the value min must be lower than max!";
  }

  for (let index = 0; index < length; index++) {
    randomArr.unshift(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return randomArr;
};

// Function 2. Gets the array moda.
const getModa = (...numbers) => {
  const filteredModaArray = numbers.filter(
    (value) => typeof value === "number" && parseInt(value) === value
  );
  const occurencesObj = {};
  filteredModaArray.forEach((element) => {
    if (!occurencesObj[element]) occurencesObj[element] = 0;
    occurencesObj[element]++;
  });

  let resultArr = [];
  let maxValue = 0;

  for (let key in occurencesObj) {
    if (occurencesObj[key] > maxValue) {
      resultArr = [key];
      maxValue = occurencesObj[key];
    } else if (occurencesObj[key] === maxValue) {
      resultArr.push(key);
    }
  }

  if (Object.keys(occurencesObj).length === resultArr.length) {
    resultArr = [];
  }

  return resultArr.join(",");
};

// Function 3. Gets the average value
function getAverage(...numbers) {
  const filteredAverageArr = numbers.filter(
    (value) => typeof value === "number" && parseInt(value) === value
  );
  const sumOfArrayElements = filteredAverageArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return Number(sumOfArrayElements / filteredAverageArr.length);
}

// Function 4. Gets numbers median
function getMedian(...numbers) {
  const filteredMedianArr = numbers.filter(
    (value) => Number(value) && parseInt(value) === value
  );
  const filteredNumbers = filteredMedianArr.sort((a, b) => a - b);

  for (let index = 0; index < filteredNumbers.length; index++) {
    if (filteredNumbers.length % 2 !== 0) {
      return filteredNumbers[Math.floor(filteredNumbers.length / 2)];
    } else if (filteredNumbers.length % 2 === 0) {
      return (
        (filteredNumbers[filteredNumbers.length / 2 - 1] +
          filteredNumbers[filteredNumbers.length / 2]) /
        2
      );
    } else {
      return [];
    }
  }
}

// Function 5. Filters even numbers
const filterEvenNumbers = (...numbers) => {
  return numbers.filter(
    (value) => typeof value === "number" && value % 2 !== 0
  );
};

// Function 6. Counts positive numbers
const countPositiveNumbers = (...numbers) => {
  const positiveNumbersArray = numbers.filter(
    (value) => typeof value === "number" && value > 0
  );
  return positiveNumbersArray.length;
};

// Function 7. Gets divided by 5 numbers
const getDividedByFive = (...numbers) => {
  return numbers.filter((value) => Number(value) && value % 5 === 0);
};

// Function 8. Replaces bad word by ****
const replaceBadWords = (string, addYourBadWord) => {
  if (addYourBadWord) {
    BAD_WORDS.push(addYourBadWord);
  }

  const result = string
    .toLowerCase()
    .split(" ")
    .map((el) => {
      BAD_WORDS.forEach((badWord) => {
        if (el.includes(badWord)) {
          el = el.replaceAll(
            badWord,
            new Array(badWord.length).fill("*").join("")
          );
        }
      });

      return el;
    });

  return result.join("");
};

// Function 9. Divides word by three parts
function divideByThree(word) {
  if (word !== "" && typeof word === "string") {
    return String(word)
      .toLowerCase()
      .replaceAll(" ", "")
      .match(/.{1,3}/g);
  } else {
    return "Please enter your word!";
  }
}

// Function 10. Generates word combinations.
const generateCombinations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  } else if (string.length >= 10) {
    return "Enter your string up to 10 characters!";
  }

  const combinationsArray = [];

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (string.indexOf(character) != i) continue;

    const remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of generateCombinations(remainingChars)) {
      combinationsArray.push(character + permutation);
    }
  }

  return combinationsArray;
};

const randomArray = getRandomArray(8, 5, 10);
const modaValues = getModa(4.5, 4.5, 0, 0, 3, 3, 2, 2, 5);
const averageArray = getAverage(
  6,
  2,
  0,
  6.5,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);

const median = getMedian(1, 2, 3, 4, 5, 6, 8, 8.6, "j");
const filterEvenNumbersArray = filterEvenNumbers(
  1,
  2,
  3,
  true,
  4,
  5,
  true,
  false,
  8,
  9
);
const countPositiveNumbersArr = countPositiveNumbers(
  false,
  -2,
  true,
  -4,
  -5,
  6,
  -1
);
const dividedByFiveArray = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
const replacedBadWords = replaceBadWords(
  "HolyShitfuckFuckFucking bitch",
  "bitch"
);
const dividedByThreeArray = divideByThree("Commander");
const combinations = generateCombinations("man");

const result = `
<p>My Random Array: ${randomArray}</p
<p>Moda values: ${modaValues}</p
<p>My getAverage num: ${averageArray}</p
<p>My Median: ${median}</p
<p>Filtered with EvenNumbers Array: ${filterEvenNumbersArray}</p
<p>Positives numbers: ${countPositiveNumbersArr}</p
<p>Divided by 5 numbers: ${dividedByFiveArray}</p
<p>Replaced Bad words: ${replacedBadWords}</p
<p>Divided by 3 Array: ${dividedByThreeArray}</p
<p>Combinations of word: ${combinations}</p
`;
const container = document.querySelector(".hw-five");
container.innerHTML = result;
