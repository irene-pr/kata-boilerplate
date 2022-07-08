import fun from "../src/fun";

describe("Given a fun function", () => {
  it("should return a string passed by parameters", () => {
    const string = "patata";

    const result = fun(string);

    expect(result).toBe(string);
  });
});
