const Character = require("./Character");

class Warrior extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints) {
    super(name, healthPoints, attackPoints, defensePoints);
    this.shieldPoints = shieldPoints;
    this.position = "attacking";
  }

  methodAttack(targetCharacter) {
    if (this.position === "attacking") {
      return this.methodAttack;
    } else {
      return console.log(
        `Defesa:${targetCharacter.healthPoints + targetCharacter.defensePoints}`
      );
    }
  }
  switchAttackToDefense() {
    if (this.position === "attacking") {
      this.position = "defense";
      this.healthPoints += this.defensePoints;
    } else {
      this.position === "attacking";
    }
  }
}
module.exports = Warrior;
