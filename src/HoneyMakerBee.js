var HoneyMakerBee = function(age, color, food, job, honeyPot) {
  Bee.call(this, age, color, food, job);
  this.honeyPot = honeyPot;
};

HoneyMakerBee.prototype.makeHoney = function(honeyPot) {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(honeyPot) {
  this.honeyPot--;
}

// var hBuzz = new HoneyMakerBee(10, yellow, jelly, 'make honey', 0)
