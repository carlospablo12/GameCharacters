const Character = require("./Character");

class Thief extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    super(name, healthPoints, attackPoints, defensePoints);
  }

  methodAttack(targetCharacter) {
    if (this.attackPoints >= targetCharacter.defensePoints) {
      return (targetCharacter.healthPoints -=
        (this.attackPoints - targetCharacter.defensePoints) * 2);
    } else {
      return targetCharacter.healthPoints;
    }
  }
}
module.exports = Thief;
