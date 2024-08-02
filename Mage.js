const Character = require("./Character");

class Mage extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, mage) {
    super(name, healthPoints, attackPoints, defensePoints);
    this.mage = mage;
  }
  methodAttack(targetCharacter) {
    if (this.attackPoints >= targetCharacter.defensePoints) {
      return (targetCharacter.healthPoints -=
        this.attackPoints + this.mage - targetCharacter.defensePoints);
    } else {
      targetCharacter.healthPoints;
    }
  }
  healMage() {
    return (this.healthPoints += this.mage * 2);
  }
}

module.exports = Mage;
