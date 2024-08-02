const Character = require("./Character.js");
const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const timoteo = new Mage("Timóteo", 90, 15, 23, 10);
const larissa = new Thief("Larissa", 89, 12, 18);
const pete = new Warrior("Pete", 70, 30, 45, 5);

console.table({ timoteo, larissa, pete });

timoteo.methodAttack(pete);
// timoteo.healMage();
pete.switchAttackToDefense();
larissa.methodAttack(timoteo);
console.table({ timoteo, larissa, pete });
