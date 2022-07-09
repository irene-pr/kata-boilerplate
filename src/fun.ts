const isPositive = (num: number): boolean => num >= 0;
const isAnInteger = (num: number): boolean => Number.isInteger(num);
const isMultipleOf3 = (num: number): boolean => num % 3 === 0;
const isMultipleOf5 = (num: number): boolean => num % 5 === 0;

export default function fizzbuzz(num: number): string {
  if (!isPositive(num)) throw Error("non positive value");
  if (!isAnInteger(num)) throw Error("not an integer value");
  if (isMultipleOf3(num) && isMultipleOf5(num)) return "FizzBuzz";
  if (isMultipleOf3(num)) return "Fizz";
  if (isMultipleOf5(num)) return "Buzz";

  return `${num}`;
}
