var ForagerBee = function(age, color, food, job, canFly) {
  Bee.call(this, age, color, food, job);
  this.canFly = canFly;
  this.treasureChest = [];
};

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// var fBuzz = new ForagerBee(10, yellow, jelly, 'find pollen', true)

