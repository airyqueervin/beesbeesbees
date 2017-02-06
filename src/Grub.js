var Grub = function(age, color, food) {
  this.age = age;
  this.color = color;
  this.food = food;
};

Grub.prototype.eat = function() {
  console.log('eat something');
};

// var grubby = new Grub(0, 'pink', 'jelly');
// grubby.eat();
