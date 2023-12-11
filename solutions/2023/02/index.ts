export const parseInput = (input: any) => input.split("\n");

export const part1 = (input: string[]) => {
  const redCubes = 12;
  const greenCubes = 13;
  const blueCubes = 14;

  let total = 0;

  input.forEach((line: string, index: number) => {
    const rounds = line.match(/(\d+\s\w+(?:,\s\d+\s\w+)*)/g);
    if (rounds) {
      const anyRoundNotPossible = rounds.some((round) => {
        const values = round.split(/,\s|\s/);
        for (let i = 0; i < values.length; i += 2) {
          switch (values[i + 1]) {
            case "red":
              if (parseInt(values[i]) > redCubes) {
                return true;
              }
              break;
            case "green":
              if (parseInt(values[i]) > greenCubes) {
                return true;
              }
              break;
            case "blue":
              if (parseInt(values[i]) > blueCubes) {
                return true;
              }
              break;
          }
        }
        return false;
      });

      if (!anyRoundNotPossible) {
        total += index + 1;
      }
    }
  });
  return total;
};

export const part2 = (input: string[]) => {
  return;
};
