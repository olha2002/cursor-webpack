/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _js_01_hw_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/01-hw-index.js */ \"./src/js/01-hw-index.js\");\n/* harmony import */ var _js_01_hw_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_01_hw_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_02_hw_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/02-hw-index.js */ \"./src/js/02-hw-index.js\");\n/* harmony import */ var _js_02_hw_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_02_hw_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_03_hw_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/03-hw-index.js */ \"./src/js/03-hw-index.js\");\n/* harmony import */ var _js_03_hw_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_03_hw_index_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_04_hw_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/04-hw-index.js */ \"./src/js/04-hw-index.js\");\n/* harmony import */ var _js_04_hw_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_04_hw_index_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_05_hw_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/05-hw-index.js */ \"./src/js/05-hw-index.js\");\n/* harmony import */ var _js_05_hw_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_05_hw_index_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_06_hw_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/06-hw-index.js */ \"./src/js/06-hw-index.js\");\n/* harmony import */ var _js_06_hw_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_06_hw_index_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://cursor-webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/01-hw-index.js":
/*!*******************************!*\
  !*** ./src/js/01-hw-index.js ***!
  \*******************************/
/***/ (() => {

eval("//variables\nvar applesPrice = 15.678;\nvar meatPrice = 123.965;\nvar oilPrice = 90.2345;\nvar applesPriceInt = Math.floor(applesPrice); //Int Price\n\nvar meatPriceInt = Math.floor(meatPrice); //Int Price\n\nvar oilPriceInt = Math.floor(oilPrice);\nvar clientSum = 500;\nvar clientChange = clientSum - itemsSum(applesPrice, meatPrice, oilPrice);\nvar priceAverage = (itemsSum(applesPrice, meatPrice, oilPrice) / 3).toFixed(2);\nvar userPrice = Number(prompt(\"Enter your price: \", 260.66));\n\nif (userPrice) {\n  userPrice = userPrice.toFixed(2);\n} else {\n  userPrice = 260.66;\n}\n\nvar userDiscount = userPrice * getRandomDiscount(100) / 100;\nvar userDiscountPersentage = Math.round(userDiscount * 100 / userPrice);\nvar cost = Math.floor(userPrice) / 2;\nvar pureProfit = cost - userDiscount; //functions\n\nfunction itemsSum(a, b, c) {\n  return a + b + c;\n}\n\nfunction checkEvenOrOdd() {\n  return itemsSum(applesPrice, meatPrice, oilPrice) % 2 === 0 ? true : false;\n}\n\nfunction getRandomDiscount(max) {\n  return Math.floor(Math.random() * max);\n} //Advanced\n\n\nvar result = \"<p>Max Price: \".concat(Math.max(applesPrice, meatPrice, oilPrice), \"</p>\\n     <p>Min Price: \").concat(Math.min(applesPrice, meatPrice, oilPrice), \"</p>   \\n     <p>Prices Sum: \").concat(itemsSum(applesPrice, meatPrice, oilPrice), \"</p>\\n     <p>Int Apples Price: \").concat(applesPriceInt, \"</p> \\n     <p>Int Meat Price: \").concat(meatPriceInt, \"</p> \\n     <p>Int Oil Price: \").concat(oilPriceInt, \"</p> \\n     <p>Int Sum: \").concat(Math.floor(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt)), \"</p>\\n     <p>Round Sum: \").concat(Math.round(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt) / 100) * 100, \"</p>\\n     <p>Is it Even Int Sum(229) - \").concat(checkEvenOrOdd(), \"</p>\\n     <p>Client's change: \").concat(clientChange, \"</p>\\n     <p>Average Price: \").concat(priceAverage, \"</p>\\n     <p>Start price: \").concat(userPrice, \"</p>\\n     <p>User Discount in Persentage: \").concat(userDiscountPersentage, \"%</p>\\n     <p>Customer pays less on \").concat(userDiscount, \"</p>\\n     <p>Pure profit: \").concat(pureProfit, \"</p>\");\nvar container = document.querySelector(\".hw-one\");\ncontainer.innerHTML = result;\n\n//# sourceURL=webpack://cursor-webpack/./src/js/01-hw-index.js?");

/***/ }),

/***/ "./src/js/02-hw-index.js":
/*!*******************************!*\
  !*** ./src/js/02-hw-index.js ***!
  \*******************************/
/***/ (() => {

eval("var numberN;\nvar numberM;\nvar userDecision;\nvar numberSum = 0;\n\ndo {\n  numberN = +prompt('Enter n: ', 1);\n  numberM = +prompt('Enter m: ', 10);\n} while (!numberN || !numberM || numberN >= numberM || !Number.isInteger(numberN) || !Number.isInteger(numberM));\n\nuserDecision = confirm('Do you want to skip Even Numbers?');\n\nfor (var i = numberN; i <= numberM; i++) {\n  if (userDecision) {\n    if (i % 2 === 0) continue;\n    numberSum += i;\n  } else {\n    numberSum += i;\n  }\n}\n\nvar result = \"<p>You have entered n: \".concat(numberN, \"</p>\\n     <p>You have entered m: \").concat(numberM, \"</p>\\n     <p>Your decision to skip Even Numbers was: \").concat(userDecision, \"</p>\\n     <p>Result: \").concat(numberSum, \"</p>\");\nvar container = document.querySelector(\".hw-two\");\ncontainer.innerHTML = result;\n\n//# sourceURL=webpack://cursor-webpack/./src/js/02-hw-index.js?");

/***/ }),

/***/ "./src/js/03-hw-index.js":
/*!*******************************!*\
  !*** ./src/js/03-hw-index.js ***!
  \*******************************/
/***/ (() => {

eval("var DOLLAR_CURRENCY = 29.36; //Task 1. GetMaxDigit function\n\nfunction getMaxDigit(number) {\n  number = number.toString();\n  var maxNumber = number[0];\n\n  for (var i = 1; i < number.length; i++) {\n    if (number[i] > maxNumber) {\n      maxNumber = number[i];\n    }\n  }\n\n  return Number(maxNumber);\n} //Task 2. Pow function\n\n\nvar calcNumberPow = function calcNumberPow(x, n) {\n  var result = x;\n\n  if (!n) {\n    result = 1;\n  } else if (n < 0) {\n    for (var i = 1; i < Math.abs(n); i++) {\n      result *= x;\n    }\n\n    result = 1 / result;\n  } else {\n    for (var _i = 1; _i < n; _i++) {\n      result *= x;\n    }\n  }\n\n  return result;\n}; //Task 3. GetFirstLetterUpperCase\n\n\nvar getFirstLetterUpperCase = function getFirstLetterUpperCase(name) {\n  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();\n}; //Task 4. CalcSalaryWithNoFee\n\n\nvar calcSalaryWithNoFee = function calcSalaryWithNoFee(salary) {\n  return salary - salary * 19.5 / 100;\n}; //Task 5. GetRandomNumber function\n\n\nvar getRandomNumber = function getRandomNumber(numberN, numberM) {\n  return Math.ceil(Math.random() * (numberM - numberN) + numberN);\n}; //Task 6. CountLetter function\n\n\nfunction countLetter(letter, word) {\n  var counter = 0;\n  letter = letter.toLowerCase();\n\n  for (var i = 0; i < word.length; i++) {\n    var _result = word[i].toLowerCase();\n\n    if (_result === letter) {\n      counter++;\n    }\n  }\n\n  return counter;\n} //Task 7-8. ConvertCurrency function\n\n\nfunction convertCurrency(value) {\n  var signUah = value.substring(0, value.length - 3);\n  var sign$ = value.substring(0, value.length - 1);\n\n  if ((value.endsWith(\"UAH\") || value.endsWith(\"uah\")) && !isNaN(parseInt(value))) {\n    value = Math.round(signUah / DOLLAR_CURRENCY) + \"$\";\n  } else if (value.endsWith(\"$\") && !isNaN(parseInt(value))) {\n    value = Math.round(sign$ * DOLLAR_CURRENCY) + \"UAH\";\n  } else {\n    value = \"Enter number please or add the $ currency or UAH(uah)\";\n  }\n\n  return value;\n} //Task 9-10. GetRandomPassword   при 1 і 2\n\n\nfunction getRandomPassword() {\n  var passwordLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n  var randomNum = \"\";\n\n  for (var i = 0; i < passwordLength; i++) {\n    randomNum += Math.floor(Math.random() * 10);\n  }\n\n  return randomNum;\n} //Task 11. DeleteLetters function\n\n\nfunction deleteLetters(letter, word) {\n  for (var i = 0; i < word.length; i++) {\n    if (word[i] === letter) {\n      word = word.replace(letter, \"\");\n    }\n  }\n\n  return word;\n} //Task 12. Palyndrom function\n\n\nfunction isPalyndrom(sentence) {\n  var str = deleteLetters(\" \", sentence).toLowerCase();\n\n  for (var i = 0; i < str.length; i++) {\n    if (str[i] !== str[str.length - i - 1]) {\n      return false;\n    }\n  }\n\n  return true;\n} //Task 13. Delete dublicate letters function.\n\n\nfunction deleteDublicateLetters(sentence) {\n  if (sentence === \"\" || Number(sentence)) {\n    return \"Enter sentence please!\";\n  }\n\n  var result = \"\";\n\n  for (var i = 0; i < sentence.length; i++) {\n    var element = sentence[i].toLowerCase();\n\n    if (countLetter(element, sentence) === 1) {\n      result += element;\n    }\n  }\n\n  return result;\n}\n\nvar result = \"<p>Result function #1:\\n         getMaxDigit(385) - \".concat(getMaxDigit(385), \"</p>\\n         <p>Result function #2:\\n         calcNumberPow(2, 3) - \").concat(calcNumberPow(2, 3), \"</p>\\n         <p>Result function #3:\\n         getFirstLetterUpperCase('bOb') - \").concat(getFirstLetterUpperCase(\"bOb\"), \"</p>\\n         <p>Result function #4:\\n         calcSalaryWithNoFee(1000) - \").concat(calcSalaryWithNoFee(1000), \"</p>\\n         <p>Result function #5:\\n         getRandomNumber(2, 30) - \").concat(getRandomNumber(2, 30), \"</p>\\n         <p>Result function #6:\\n         countLetter('a', 'AAblablabla') - \").concat(countLetter(\"A\", \"AAblablabla\"), \"</p>\\n         <p>Result function #7-8:\\n         convertCurrency('3560UAH') - \").concat(convertCurrency(\"3560UAH\"), \"</p>\\n         <p>Result function #9-10: \\n         getRandomPassword(4) - \").concat(getRandomPassword(4), \"</p>\\n         <p>Result function #11:\\n         deleteLetters('a', 'blablabla') - \").concat(deleteLetters(\"a\", \"blablabla\"), \"</p>\\n         <p>Result function #12:\\n         isPalyndrom('never odd or even') - \").concat(isPalyndrom(\"never odd or even\"), \"</p>\\n         <p>Result function #13: \\n         deleteDublicateLetters('bob was cold outside') - \").concat(deleteDublicateLetters(\"bob was cold outside\"), \"</p>\\n    \");\nvar container = document.querySelector(\".hw-three\");\ncontainer.innerHTML = result;\n\n//# sourceURL=webpack://cursor-webpack/./src/js/03-hw-index.js?");

/***/ }),

/***/ "./src/js/04-hw-index.js":
/*!*******************************!*\
  !*** ./src/js/04-hw-index.js ***!
  \*******************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar students = [\"Oleksandr\", \"Igor\", \"Olena\", \"Ira\", \"Oleksii\", \"Svitlana\"];\nvar themes = [\"Differential equation\", \"Theory of automata\", \"Algorithms and data structures\"];\nvar marks = [4, 5, 5, 3, 4, 5];\nvar studentsClone = [].concat(students);\nvar boysArray = studentsClone.filter(function (student) {\n  return !student.endsWith(\"a\");\n});\nvar girlsArray = studentsClone.filter(function (student) {\n  return student.endsWith(\"a\");\n}); // func that combines students\n\nfunction combineBoth(boysArray, girlsArray) {\n  return boysArray.map(function (boy, i) {\n    return [boy, girlsArray[i]];\n  });\n}\n\nvar combinedBoysGirls = combineBoth(boysArray, girlsArray); //func that get tasks to the array with pairs of students\n\nfunction getTasks(combinedStudents, themes) {\n  var newPair = combinedStudents.map(function (el) {\n    return el.join(\" and \");\n  });\n  return newPair.map(function (combinedStudents, i) {\n    return [combinedStudents, themes[i]];\n  });\n}\n\nvar pairsWithTasks = getTasks(combinedBoysGirls, themes); //func that gets student with his mark\n\nfunction studentsMarks(students, marks) {\n  return students.map(function (student, i) {\n    return [student, marks[i]];\n  });\n}\n\nvar studentsWithMarks = studentsMarks(studentsClone, marks); //func that calcs students with their marks for the project\n\nfunction studentsEvaluatedProjects(pairsWithTasksArr) {\n  return pairsWithTasksArr.map(function (pairsAndTheirTasks) {\n    return [].concat(_toConsumableArray(pairsAndTheirTasks), [Math.ceil(Math.random() * 5)]);\n  });\n}\n\nvar studentsEvaluatedProjectsArr = studentsEvaluatedProjects(pairsWithTasks);\nvar result = \"\\n<p>Boys list: \".concat(boysArray, \"</p\\n<p>Girls list: \").concat(girlsArray, \"</p\\n<p>Both boys and girls: \").concat(combinedBoysGirls, \"</p\\n<p>Pairs and their tasks: \").concat(pairsWithTasks, \"</p\\n<p>Student and his mark: \").concat(studentsWithMarks, \"</p\\n<p>Pairs of students that has their evaluated projects: \").concat(studentsEvaluatedProjectsArr, \"</p\\n\");\nvar container = document.querySelector(\".hw-four\");\ncontainer.innerHTML = result;\n\n//# sourceURL=webpack://cursor-webpack/./src/js/04-hw-index.js?");

/***/ }),

/***/ "./src/js/05-hw-index.js":
/*!*******************************!*\
  !*** ./src/js/05-hw-index.js ***!
  \*******************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar BAD_WORDS = [\"shit\", \"fuck\"]; // Function 1. Gets the random array\n\nvar getRandomArray = function getRandomArray(length, min, max) {\n  var randomArr = [];\n\n  if (min > max) {\n    return \"the value min must be lower than max!\";\n  }\n\n  for (var index = 0; index < length; index++) {\n    randomArr.unshift(Math.floor(Math.random() * (max - min + 1) + min));\n  }\n\n  return randomArr;\n}; // Function 2. Gets the array moda.\n\n\nvar getModa = function getModa() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  var filteredModaArray = numbers.filter(function (value) {\n    return typeof value === \"number\" && parseInt(value) === value;\n  });\n  var occurencesObj = {};\n  filteredModaArray.forEach(function (element) {\n    if (!occurencesObj[element]) occurencesObj[element] = 0;\n    occurencesObj[element]++;\n  });\n  var resultArr = [];\n  var maxValue = 0;\n\n  for (var key in occurencesObj) {\n    if (occurencesObj[key] > maxValue) {\n      resultArr = [key];\n      maxValue = occurencesObj[key];\n    } else if (occurencesObj[key] === maxValue) {\n      resultArr.push(key);\n    }\n  }\n\n  if (Object.keys(occurencesObj).length === resultArr.length) {\n    resultArr = [];\n  }\n\n  return resultArr.join(\",\");\n}; // Function 3. Gets the average value\n\n\nfunction getAverage() {\n  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    numbers[_key2] = arguments[_key2];\n  }\n\n  var filteredAverageArr = numbers.filter(function (value) {\n    return typeof value === \"number\" && parseInt(value) === value;\n  });\n  var sumOfArrayElements = filteredAverageArr.reduce(function (previousValue, currentValue) {\n    return previousValue + currentValue;\n  });\n  return Number(sumOfArrayElements / filteredAverageArr.length);\n} // Function 4. Gets numbers median\n\n\nfunction getMedian() {\n  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    numbers[_key3] = arguments[_key3];\n  }\n\n  var filteredMedianArr = numbers.filter(function (value) {\n    return Number(value) && parseInt(value) === value;\n  });\n  var filteredNumbers = filteredMedianArr.sort(function (a, b) {\n    return a - b;\n  });\n\n  for (var index = 0; index < filteredNumbers.length; index++) {\n    if (filteredNumbers.length % 2 !== 0) {\n      return filteredNumbers[Math.floor(filteredNumbers.length / 2)];\n    } else if (filteredNumbers.length % 2 === 0) {\n      return (filteredNumbers[filteredNumbers.length / 2 - 1] + filteredNumbers[filteredNumbers.length / 2]) / 2;\n    } else {\n      return [];\n    }\n  }\n} // Function 5. Filters even numbers\n\n\nvar filterEvenNumbers = function filterEvenNumbers() {\n  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    numbers[_key4] = arguments[_key4];\n  }\n\n  return numbers.filter(function (value) {\n    return typeof value === \"number\" && value % 2 !== 0;\n  });\n}; // Function 6. Counts positive numbers\n\n\nvar countPositiveNumbers = function countPositiveNumbers() {\n  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n    numbers[_key5] = arguments[_key5];\n  }\n\n  var positiveNumbersArray = numbers.filter(function (value) {\n    return typeof value === \"number\" && value > 0;\n  });\n  return positiveNumbersArray.length;\n}; // Function 7. Gets divided by 5 numbers\n\n\nvar getDividedByFive = function getDividedByFive() {\n  for (var _len6 = arguments.length, numbers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n    numbers[_key6] = arguments[_key6];\n  }\n\n  return numbers.filter(function (value) {\n    return Number(value) && value % 5 === 0;\n  });\n}; // Function 8. Replaces bad word by ****\n\n\nvar replaceBadWords = function replaceBadWords(string, addYourBadWord) {\n  if (addYourBadWord) {\n    BAD_WORDS.push(addYourBadWord);\n  }\n\n  var result = string.toLowerCase().split(\" \").map(function (el) {\n    BAD_WORDS.forEach(function (badWord) {\n      if (el.includes(badWord)) {\n        el = el.replaceAll(badWord, new Array(badWord.length).fill(\"*\").join(\"\"));\n      }\n    });\n    return el;\n  });\n  return result.join(\"\");\n}; // Function 9. Divides word by three parts\n\n\nfunction divideByThree(word) {\n  if (word !== \"\" && typeof word === \"string\") {\n    return String(word).toLowerCase().replaceAll(\" \", \"\").match(/.{1,3}/g);\n  } else {\n    return \"Please enter your word!\";\n  }\n} // Function 10. Generates word combinations.\n\n\nvar generateCombinations = function generateCombinations(string) {\n  if (!string || typeof string !== \"string\") {\n    return \"Please enter a string\";\n  } else if (string.length < 2) {\n    return string;\n  } else if (string.length >= 10) {\n    return \"Enter your string up to 10 characters!\";\n  }\n\n  var combinationsArray = [];\n\n  for (var i = 0; i < string.length; i++) {\n    var character = string[i];\n    if (string.indexOf(character) != i) continue;\n    var remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);\n\n    var _iterator = _createForOfIteratorHelper(generateCombinations(remainingChars)),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var permutation = _step.value;\n        combinationsArray.push(character + permutation);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  return combinationsArray;\n};\n\nvar randomArray = getRandomArray(8, 5, 10);\nvar modaValues = getModa(4.5, 4.5, 0, 0, 3, 3, 2, 2, 5);\nvar averageArray = getAverage(6, 2, 0, 6.5, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);\nvar median = getMedian(1, 2, 3, 4, 5, 6, 8, 8.6, \"j\");\nvar filterEvenNumbersArray = filterEvenNumbers(1, 2, 3, true, 4, 5, true, false, 8, 9);\nvar countPositiveNumbersArr = countPositiveNumbers(false, -2, true, -4, -5, 6, -1);\nvar dividedByFiveArray = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);\nvar replacedBadWords = replaceBadWords(\"HolyShitfuckFuckFucking bitch\", \"bitch\");\nvar dividedByThreeArray = divideByThree(\"Commander\");\nvar combinations = generateCombinations(\"man\");\nvar result = \"\\n<p>My Random Array: \".concat(randomArray, \"</p\\n<p>Moda values: \").concat(modaValues, \"</p\\n<p>My getAverage num: \").concat(averageArray, \"</p\\n<p>My Median: \").concat(median, \"</p\\n<p>Filtered with EvenNumbers Array: \").concat(filterEvenNumbersArray, \"</p\\n<p>Positives numbers: \").concat(countPositiveNumbersArr, \"</p\\n<p>Divided by 5 numbers: \").concat(dividedByFiveArray, \"</p\\n<p>Replaced Bad words: \").concat(replacedBadWords, \"</p\\n<p>Divided by 3 Array: \").concat(dividedByThreeArray, \"</p\\n<p>Combinations of word: \").concat(combinations, \"</p\\n\");\nvar container = document.querySelector(\".hw-five\");\ncontainer.innerHTML = result;\n\n//# sourceURL=webpack://cursor-webpack/./src/js/05-hw-index.js?");

/***/ }),

/***/ "./src/js/06-hw-index.js":
/*!*******************************!*\
  !*** ./src/js/06-hw-index.js ***!
  \*******************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar result = document.querySelector(\".hw-six\");\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}]; // Function #1 that gets the student's subjects\n\nfunction getSubjects(studentsArray) {\n  var result = Object.keys(studentsArray.subjects);\n  return result.map(function (subjectKey) {\n    return subjectKey[0].toUpperCase() + subjectKey.slice(1).toLowerCase().replaceAll(\"_\", \" \");\n  });\n} // Function #2 that gets student's average mark\n\n\nfunction getAverageMark(studentsArray) {\n  var splitedMarks = Object.values(studentsArray.subjects).flat();\n  var initialValue = 0;\n  var result = splitedMarks.reduce(function (previousSubjectValue, currentSubjectValue) {\n    return previousSubjectValue + currentSubjectValue;\n  }, initialValue);\n  return Number((result / splitedMarks.length).toFixed(2));\n} // Function #3 that gets information about specific student\n\n\nvar getStudentInfo = function getStudentInfo(studentsArray) {\n  return {\n    name: studentsArray.name,\n    course: studentsArray.course,\n    averageMark: getAverageMark(studentsArray)\n  };\n}; // Function #4 that gets Student Names\n\n\nvar getStudentsNames = function getStudentsNames(students) {\n  return students.map(function (student) {\n    return student[\"name\"];\n  }).sort();\n}; // Function #5 that gets best student\n\n\nvar getBestStudent = function getBestStudent(student) {\n  var maxMark = Math.max.apply(Math, _toConsumableArray(students.map(function (student) {\n    return getAverageMark(student);\n  })));\n\n  for (var index = 0; index < student.length; index++) {\n    if (getStudentInfo(student[index])[\"averageMark\"] === maxMark) {\n      return student[index][\"name\"];\n    }\n  }\n}; // Function #6 that calculates word letters and makes an oject of them\n\n\nfunction calculateWordLetters(string) {\n  var wordObj = {};\n\n  _toConsumableArray(string).forEach(function (element) {\n    if (!wordObj[element]) {\n      wordObj[element] = 0;\n    }\n\n    wordObj[element]++;\n  });\n\n  return wordObj;\n}\n\nstudents.forEach(function (student) {\n  result.insertAdjacentHTML(\"beforeend\", \"<p>Subjects of student \".concat(student.name, \" : \").concat(getSubjects(student), \"</p>\"));\n});\nstudents.forEach(function (student) {\n  result.insertAdjacentHTML(\"beforeend\", \"<p>Average mark of student \".concat(student.name, \" : \").concat(getAverageMark(student), \"</p>\"));\n});\nstudents.forEach(function (student) {\n  result.insertAdjacentHTML(\"beforeend\", \"<p>Info about \".concat(student.name, \" \").concat(getStudentInfo(student), \"</p>\"));\n});\nresult.insertAdjacentHTML(\"beforeend\", \"<p>Names of students in alphabetical order: \\n  \".concat(getStudentsNames(students), \"</p>\"));\nresult.insertAdjacentHTML(\"beforeend\", \"<p>The best student is: \\n  \".concat(getBestStudent(students), \"</p>\"));\nresult.insertAdjacentHTML(\"beforeend\", \"<p>Calculated Word Letters Object: \\n    \".concat(calculateWordLetters(\"test\"), \"</p>\"));\n\n//# sourceURL=webpack://cursor-webpack/./src/js/06-hw-index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background-color: rgb(51, 32, 32);\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#main {\\r\\n    color: coral;\\r\\n}\\r\\n\\r\\n.subheading {\\r\\n    text-decoration: underline;\\r\\n    margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.homework {\\r\\n    border: 3px solid coral;\\r\\n}\\r\\n\\r\\n.hw-task {\\r\\n    color: violet;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cursor-webpack/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cursor-webpack/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cursor-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;