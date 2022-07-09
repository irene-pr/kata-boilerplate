const isNumber = (num: number): boolean =>
  typeof num === "number" && !Number.isNaN(num);

const isNegative = (num: number): boolean => num < 0;

const isLesserThan1000 = (num: number) => num < 1001;

const splitAndFlatten = (strings: string[], separator: string): string[] =>
  strings.map((string) => string.split(separator)).flat();

const getInner = (
  str: string,
  opener: string,
  closer: string
): [string, string] | 1 | -1 => {
  const nextIndex = str.indexOf(opener, 0);
  if (nextIndex === -1) return 1;

  const closingIndex = str.indexOf(closer, nextIndex);
  if (closingIndex === -1) return -1;
  const innerString = str.slice(nextIndex + 2, closingIndex);
  const remainingString = str.slice(closingIndex + closer.length);

  return [innerString, remainingString];
};

const findCustomSeparator = (
  string: string,
  array: string[] = []
): [string, string[]] => {
  const result = getInner(string, "//", "\n");
  if (result === -1) {
    throw Error("Invalid string of characters");
  }
  if (result === 1) return [string, array];
  // eslint-disable-next-line prefer-const
  let [possibleSeparator, remainingString] = result;
  string = remainingString;

  const cleanedUpSeparators = splitAndFlatten(
    splitAndFlatten([possibleSeparator], "["),
    "]"
  ).filter((separator) => separator !== "");
  array.push(...cleanedUpSeparators);

  return [string, array];
};

export default function fun(string: string): number {
  if (!string) return 0;

  const stringAsNumber = +string;
  if (isNumber(stringAsNumber)) return stringAsNumber;

  const separators = [",", "\n"];
  const [newString, newSeparators] = findCustomSeparator(string);
  string = newString;
  separators.push(...newSeparators);

  let splitStrings = [string];
  for (const separator of separators) {
    splitStrings = splitAndFlatten(splitStrings, separator);
  }

  const splitNumbers = splitStrings.map((splitString) => +splitString);
  if (!splitNumbers.every(isNumber))
    throw new Error("Invalid string of characters");
  if (splitNumbers.some(isNegative)) {
    const negatives = splitNumbers.filter(isNegative);
    const formattedNegatives = negatives.join(", ");
    throw new Error(`error: negatives not allowed: ${formattedNegatives}`);
  }

  return splitNumbers
    .filter(isLesserThan1000)
    .reduce((previous, current) => previous + current, 0);
}
