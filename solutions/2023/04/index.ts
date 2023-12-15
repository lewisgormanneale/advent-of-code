export const parseInput = (input: any) => input.split("\n");

export const part1 = (input: string[]) => {
  let total = 0;
  input.forEach((line: string) => {
    if (!line.includes(":")) return;
    const numbers = line.split(":")[1];
    const [winningNumbers, heldNumbers] = numbers
      .split("|")
      .map((s) => s.split(" ").filter(Boolean).map(Number));
    let score = 0;
    winningNumbers.forEach((number) => {
      if (heldNumbers.includes(number)) {
        score === 0 ? ++score : (score *= 2);
      }
    });
    total += score;
  });
  return total;
};

export const part2 = (input: string[]) => {
  let totalProcessed = 0;
  let timesToProcess = Array(input.length).fill(1);
  input.forEach((line: string, index: number) => {
    if (!line.includes(":")) return;
    const numbers = line.split(":")[1];
    const [winningNumbers, heldNumbers] = numbers
      .split("|")
      .map((s) => s.split(" ").filter(Boolean).map(Number));
    for (let i = 0; i < timesToProcess[index]; i++) {
      totalProcessed++;
      let matches = 0;
      winningNumbers.forEach((number) => {
        if (heldNumbers.includes(number)) {
          matches++;
          timesToProcess[index + matches]++;
        }
      });
    }
  });
  return totalProcessed;
};
