export default class MathCharacter {
  getAttack(cellNumber) {
    if (cellNumber <= 5) {
      this.modAttack = this.attack - this.attack * ((cellNumber - 1) / 10);
    }
    if (cellNumber > 5) {
      this.modAttack = 0;
    }
    return this.modAttack;
  }

  getStoned(cellNumber) {
    if (cellNumber <= 5) {
      this.modAttack -= Math.round(Math.log2(cellNumber)) * 5;
    }
    if (cellNumber > 5) {
      this.modAttack = 0;
    }
    return this.modAttack;
  }
}
