export const parseInput = (input) => input.split("\n");

export const part1 = (input) => {
  let total = 0;
  input.forEach((line) => {
    let firstNumber = 0;
    let lastNumber = 0;
    //get first number
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i])) {
        firstNumber = line[i];
        break;
      }
    }
    //get last number
    for (let i = line.length - 1; i >= 0; i--) {
      if (!isNaN(line[i])) {
        lastNumber = line[i];
        break;
      }
    }
    //add to total
    total += parseInt(firstNumber + lastNumber);
  });
  return total;
};

export const part2 = (input) => {
  return;
};
