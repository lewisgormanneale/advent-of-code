import { parseInput, part1, part2 } from "./index";
import { getInput } from "../../../lib";

test("part 1 example", async () => {
  expect(
    part1(
      parseInput(
        await getInput({
          year: "2023",
          day: "01",
          fileName: "example",
        })
      )
    )
  ).toBe(142);
});

test("part 1 data", async () => {
  expect(
    part1(
      parseInput(
        await getInput({
          year: "2023",
          day: "01",
          fileName: "input",
        })
      )
    )
  ).toBe(55090);
});

test("part 2 example", async () => {
  expect(
    part2(
      parseInput(
        await getInput({
          year: "2023",
          day: "01",
          fileName: "example2",
        })
      )
    )
  ).toBe(281);
});

test("part 2 data", async () => {
  expect(
    part2(
      parseInput(
        await getInput({
          year: "2023",
          day: "01",
          fileName: "input",
        })
      )
    )
  ).toBe(54845);
});
