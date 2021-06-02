import { strictEqual } from "assert";
import Maps from "./";

describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    strictEqual(true, true);
  });
  it("should return 2+2", () => {
    strictEqual(new Maps().add(2, 2), 4);
  });
});
