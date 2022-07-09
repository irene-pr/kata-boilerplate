import fun from "../src/fun";

describe("Given a fun function", () => {
  describe("When passing a string not convertible to numbers", () => {
    it("should throw an error", () => {
      const string = "a";
      const expectedError = "Invalid string of characters";

      const result = () => fun(string);

      expect(result).toThrowError(expectedError);
    });
  });
  describe("When passing an empty string", () => {
    it("should return a 0", () => {
      const string = "";
      const expectedResult = 0;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a number typed as a string", () => {
    it("should return the number, typed as a number", () => {
      const string = "4";
      const expectedResult = 4;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a string of two numbers separated by commas", () => {
    it("should return the sum of the numbers", () => {
      const string = "4,3";
      const expectedResult = 7;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a string of numbers separated by commas", () => {
    it("should return the sum of the numbers", () => {
      const string = "4,3,5,1,7,6";
      const expectedResult = 26;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a string of numbers separated by commas and '\n'", () => {
    it("should return the sum of the numbers", () => {
      const string = "4,3,5\n1,7,6\n10";
      const expectedResult = 36;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a string of numbers it will ignore numbers greater than 1000", () => {
    it("should return the sum of the numbers", () => {
      const string = "2, 1003, 4";
      const expectedResult = 6;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a string of numbers alongside a custom separator\n'", () => {
    it("should return the sum of the numbers", () => {
      const string = "//;\n1;2";
      const expectedResult = 3;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When passing a string of numbers alongside a // withou it being a custom separator\n'", () => {
    it("should return the sum of the numbers", () => {
      const string = "//1,2";
      const expectedError = "Invalid string of characters";

      const result = () => fun(string);

      expect(result).toThrowError(expectedError);
    });
  });
  describe("When passing a string of numbers with negative numbers\n'", () => {
    it("throw an error naming the negatives", () => {
      const string = "1,-2,-3";
      const expectedError = "error: negatives not allowed: -2, -3";

      const result = () => fun(string);

      expect(result).toThrowError(expectedError);
    });
  });
  describe("When passing a string of numbers alongside a custom separator\n'", () => {
    it("should return the sum of the numbers", () => {
      const string = "//[***]\n1***2***3";
      const expectedResult = 6;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
    it("should return the sum of the numbers", () => {
      const string = "//[foo][bar]\n1foo2bar3";
      const expectedResult = 6;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
    it("should return the sum of the numbers", () => {
      const string = "//[*][%]\n1*2%3";
      const expectedResult = 6;

      const result = fun(string);

      expect(result).toBe(expectedResult);
    });
  });
});
