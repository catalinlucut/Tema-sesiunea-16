// EXERCITIUL 1

let number = 1;
let functie = (a, b) => {
  for (let i = 1; i <= b; i++) {
    number = number * a;
  }
  return number;
};

console.log(functie(3, 2));

let functie1 = (a, b) => {
  a = a ** b;
  return a;
};

console.log(functie1(3, 2));

console.log(Math.pow(3, 2));

//  EXERCITIUL 2

let numbers1 = [10, 12, 1, 3, 5, 1, 7, 3, 10, 12];

let functie2 = (numbers) => {
  let numbersDuplicate = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        numbersDuplicate.push(numbers[i]);
      }
    }
  }
  return numbersDuplicate;
};

console.log(functie2(numbers1));

let functie21 = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        delete numbers[i];
      }
    }
  }
  return numbers;
};

console.log(functie21(numbers1));

// EXERCITIU 3

let countries = ["Romania", "Italia", "Peru", "Madagascar"];

let functie3 = (strings) => {
  let lungimeMaxima = 0;
  let stringulCelMaiLung = "";

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > lungimeMaxima) {
      lungimeMaxima = strings[i].length;
      stringulCelMaiLung = strings[i];
    }
  }

  return stringulCelMaiLung;
};

console.log(functie3(countries)); // va afișa "Madagascar"

// EXERCITIUL 4
const numarRoman = "XXXVIII";
let functie4 = (romanNumeral) => {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let retult = 0;
  let priviousValue = 0;
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    let currentValue = romanSymbols[romanNumeral[i]];
    if (currentValue < priviousValue) {
      retult -= currentValue;
    } else {
      retult += currentValue;
    }
    priviousValue = currentValue;
  }
  return retult;
};

console.log(functie4(numarRoman));

//  EXERCITIUL 5
const temperatureC = 30;
let functie5 = (x) => {
  x = x * 1.8 + 32;
  return x;
};

const temperatureF = functie5(temperatureC);

console.log(temperatureF);
