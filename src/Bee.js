var Bee = function(age, color, food, job) {
  Grub.call(this, age, color, food);
  this.age = age;
  this.color = color;
  this.job = job //'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// var buzz = new Bee(5, yellow, jelly, 'keep on growing')

