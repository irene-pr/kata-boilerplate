import fizzbuzz from "../src/fun";

describe("Given a fizzbuzz function", () => {
  describe("When passed a positive integer", () => {
    it("should return the number passed by parameters", () => {
      const number = 2;
      const expectedOutput = "2";

      const result = fizzbuzz(number);

      expect(result).toBe(expectedOutput);
    });
  });
  describe("When passed a positive multiple of 3", () => {
    it("should return `Fizz`", () => {
      const number = 18;
      const expectedOutput = "Fizz";

      const result = fizzbuzz(number);

      expect(result).toBe(expectedOutput);
    });
  });
  describe("When passed a positive multiple of 3 and not multiple of 5", () => {
    it("should contain `Fizz` in the retirned value", () => {
      const number = 3 * Math.floor(Math.random() * 100);
      const expectedOutput = "Fizz";

      const result = fizzbuzz(number);

      expect(result).toContain(expectedOutput);
    });
  });
  describe("When passed a positive multiple of 5", () => {
    it("should return `Buzz`", () => {
      const number = 50;
      const expectedOutput = "Buzz";

      const result = fizzbuzz(number);

      expect(result).toBe(expectedOutput);
    });
  });
  describe("When passed a positive multiple of 5 and not multipe of 3", () => {
    it("should contain `Buzz` in the returned value", () => {
      const number = 5 * Math.floor(Math.random() * 100);
      const expectedOutput = "Buzz";

      const result = fizzbuzz(number);

      expect(result).toContain(expectedOutput);
    });
  });
  describe("When passed a positive multiple of 5 and 3", () => {
    it("should return `FizzBuzz`", () => {
      const number = 15 * Math.floor(Math.random() * 100);
      const expectedOutput = "FizzBuzz";

      const result = fizzbuzz(number);

      expect(result).toBe(expectedOutput);
    });
  });
  describe("When passed a negative integer", () => {
    it("should throw an error", () => {
      const number = -2;

      const result = () => fizzbuzz(number);

      expect(result).toThrowError("non positive value");
    });
  });
  describe("When passed a non integer positive number", () => {
    it("should throw an error", () => {
      const number = 2.2;

      const result = () => fizzbuzz(number);

      expect(result).toThrowError("not an integer value");
    });
  });
});
