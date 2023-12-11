export const parseInput = (input: any) => input.split("\n");

export const part1 = (input: string[]) => {
  const symbols = /[^a-zA-Z0-9.]/g;
  const numbers = /[0-9]/g;
  let partNumberSum = 0;
  input.forEach((line: string, index: number) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i].match(symbols)) {
        let partNumber = 0;
        for (let j = i - 1; j <= i + 2; j++) {
          if (input[index - 1][j].match(numbers)) {
            partNumber += parseInt(input[index - 1][j]);
            partNumberSum += partNumber;
          }
        }
        for (let j = i - 1; j <= i + 2; j++) {
          if (input[index + 1][j].match(numbers)) {
            partNumber += parseInt(input[index + 1][j]);
            partNumberSum += partNumber;
          }
        }
      }
    }
  });
  return partNumberSum;
};

export const part2 = (input: string[]) => {
  return;
};
