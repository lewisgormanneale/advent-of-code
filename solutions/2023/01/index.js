export const parseInput = (input) => input.split("\n");

const writtenNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const getMatchedWrittenNumber = (str) => {
  const matchedWord = Object.keys(writtenNumbers).find((word) =>
    str.includes(word)
  );
  return matchedWord ? matchedWord : null;
};

export const part1 = (input) => {
  let total = 0;
  input.forEach((line) => {
    let firstNumber = 0;
    let lastNumber = 0;
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i])) {
        firstNumber = line[i];
        break;
      }
    }
    for (let i = line.length - 1; i >= 0; i--) {
      if (!isNaN(line[i])) {
        lastNumber = line[i];
        break;
      }
    }
    total += parseInt(firstNumber + lastNumber);
  });
  return total;
};

export const part2 = (input) => {
  let total = 0;
  input.forEach((line) => {
    let firstNumber = 0;
    let firstNumberCheckedLetters = "";
    let lastNumber = 0;
    let lastNumberCheckedLetters = "";

    for (let i = 0; i < line.length; i++) {
      firstNumberCheckedLetters += line[i];
      const matchedNumber = getMatchedWrittenNumber(firstNumberCheckedLetters);
      if (matchedNumber) {
        firstNumber = writtenNumbers[matchedNumber];
        break;
      }
      if (!isNaN(line[i])) {
        firstNumber = line[i];
        break;
      }
    }

    for (let i = line.length - 1; i >= 0; i--) {
      lastNumberCheckedLetters = line[i] + lastNumberCheckedLetters;
      const matchedNumber = getMatchedWrittenNumber(lastNumberCheckedLetters);
      if (!isNaN(line[i])) {
        lastNumber = line[i];
        break;
      }
      if (matchedNumber) {
        lastNumber = writtenNumbers[matchedNumber];
        break;
      }
    }

    total += parseInt(firstNumber + "" + lastNumber);
  });
  return total;
};
