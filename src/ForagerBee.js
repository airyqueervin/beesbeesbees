var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.canFly = true;
  this.job = 'find pollen';
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};



// var fBuzz = new ForagerBee(10, yellow, jelly, 'find pollen', true)

