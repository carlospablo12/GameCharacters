class Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
  }
  methodAttack(targetCharacter) {
    return (targetCharacter.healthPoints -=
      this.attackPoints - targetCharacter.defensePoints);
  }
}
// const play = new Character("Timóteo", 100, 45, 30);
// const play2 = new Character("Larissa", 100, 25, 30);
// console.log(play.methodAttack(play2));
module.exports = Character;
