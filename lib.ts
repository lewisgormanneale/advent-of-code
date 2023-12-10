import fs from "fs";
import path from "path";

export const getInput = async ({ year, day, fileName }: any) =>
  fs
    .readFileSync(
      path.resolve(
        process.env.NODE_PATH || "",
        `inputs/${year}/${day}/${fileName}.txt`
      )
    )
    .toString();
