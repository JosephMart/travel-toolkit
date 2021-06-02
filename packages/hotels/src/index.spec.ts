import { strictEqual } from "assert";
import Hotels from "./";

describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    strictEqual(true, true);
  });
  it("should return 2+2", () => {
    strictEqual(new Hotels().add(2, 2), 4);
  });
});
