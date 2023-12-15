import { parseInput, part1, part2 } from "./index";
// @ts-ignore
import { getInput } from "../../../lib.ts";

test("part 1 example", async () => {
  expect(
    part1(
      parseInput(
        await getInput({
          year: "2023",
          day: "05",
          fileName: "example",
        })
      )
    )
  ).toBe(0);
});

test("part 1 data", async () => {
  expect(
    part1(
      parseInput(
        await getInput({
          year: "2023",
          day: "05",
          fileName: "input",
        })
      )
    )
  ).toBe(0);
});

test("part 2 example", async () => {
  expect(
    part2(
      parseInput(
        await getInput({
          year: "2023",
          day: "05",
          fileName: "example",
        })
      )
    )
  ).toBe(0);
});

test("part 2 data", async () => {
  expect(
    part2(
      parseInput(
        await getInput({
          year: "2023",
          day: "05",
          fileName: "input",
        })
      )
    )
  ).toBe(0);
});
