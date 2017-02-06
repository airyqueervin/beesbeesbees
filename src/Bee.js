var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing'; //'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// var buzz = new Bee(5, yellow, jelly, 'keep on growing')

