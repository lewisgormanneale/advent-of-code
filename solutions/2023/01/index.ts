export const parseInput = (input: any) => input.split("\n");

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

const getMatchedWrittenNumber = (str: string) => {
  const matchedWord = Object.keys(writtenNumbers).find((word) =>
    str.includes(word)
  );
  return matchedWord ? matchedWord : null;
};

export const part1 = (input: string[]) => {
  let total = 0;
  input.forEach((line: string) => {
    const numbers = line.match(/\d/g);
    numbers
      ? (total += parseInt(numbers[0] + numbers[numbers.length - 1]))
      : (total += 0);
  });
  return total;
};

export const part2 = (input: string[]) => {
  let total = 0;
  input.forEach((line: string) => {
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
