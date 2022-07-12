export default class Rover {
  X: number = 0;

  Y: number = 0;

  direction: string = "N";

  execute(moveCommand: string) {
    const moveCommandArray = moveCommand.split("");

    moveCommandArray.forEach((command) => {
      if (command === "M") {
        this.move();
      }
      if (command === "L") {
        this.rotateLeft();
      }
      if (command === "R") {
        this.rotateRight();
      }
    });

    return this.printPosition();
  }

  private move() {
    this.Y = (this.Y + 1) % 10;
  }

  private rotateLeft() {
    if (this.direction === "N") {
      this.direction = "W";
    } else if (this.direction === "W") {
      this.direction = "S";
    } else if (this.direction === "S") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "N";
    }
  }

  private rotateRight() {
    if (this.direction === "N") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "S";
    }
  }

  private printPosition() {
    return `${this.X}:${this.Y}:${this.direction}`;
  }
}
