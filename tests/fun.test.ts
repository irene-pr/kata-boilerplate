import Rover from "../src/fun";

describe("Given a rover class", () => {
  it("should reproduce instance of Rover", () => {
    const roverInstance = new Rover();

    expect(roverInstance).toBeInstanceOf(Rover);
  });
  it("should execute given no input", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:N";

    expect(roverInstance.execute("")).toBe(expectedResult);
  });
  it("facing north when left command is provided, should rotate direction to west", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:W";

    expect(roverInstance.execute("L")).toBe(expectedResult);
  });
  it("facing north when right command is provided, should rotate direction to east", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:E";

    expect(roverInstance.execute("R")).toBe(expectedResult);
  });
  it("starting from the initial position, it should advance one position facing north", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:1:N";

    expect(roverInstance.execute("M")).toBe(expectedResult);
  });
  it("starting from the initial position, it should advance three positions facing north", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:3:N";

    expect(roverInstance.execute("MMM")).toBe(expectedResult);
  });
  it("starting from the initial position, it should advance wrap around the grid when going over the limit facing north", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:N";

    expect(roverInstance.execute("MMMMMMMMMM")).toBe(expectedResult);
  });
  it("starting from the initial position, it should advance wrap around the grid when going over the limit facing north", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:N";

    expect(roverInstance.execute("MMMMMMMMMM")).toBe(expectedResult);
  });
  it("starting from the initial position, it should rotate towards the left two times and land facing south ", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:S";

    expect(roverInstance.execute("LL")).toBe(expectedResult);
  });
  it("starting from the initial position, it should rotate towards the right two times and land facing south ", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:S";

    expect(roverInstance.execute("RR")).toBe(expectedResult);
  });
  it("starting from the initial position, it should rotate towards the left and give a complete rotation ", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:E";

    expect(roverInstance.execute("LLL")).toBe(expectedResult);
  });
  it("starting from the initial position, it should rotate towards the left and give a complete rotation ", () => {
    const roverInstance = new Rover();
    const expectedResult = "0:0:N";

    expect(roverInstance.execute("LLLL")).toBe(expectedResult);
  });
});
