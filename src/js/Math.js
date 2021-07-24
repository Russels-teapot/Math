export default class Math {
  getAttack(cellNumber) {
    if (cellNumber <= 5) {
      this.attack -= this.attack * ((cellNumber - 1) / 10);
    }
    if (cellNumber > 5) {
      this.attack = 0;
    }
    return this.attack;
  }

  getStoned(cellNumber) {
    if (cellNumber <= 5) {
      this.attack -= Math.round(Math.log2(cellNumber)) * 5;
    }
    if (cellNumber > 5) {
      this.attack = 0;
    }
    return this.attack;
  }
}
