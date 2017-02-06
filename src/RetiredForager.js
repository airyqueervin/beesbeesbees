var RetiredForagerBee = function(age, color, food, job, canFly) {
  ForagerBee.call(this, age, color, food, job, canFly)

};

RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// var oldBuzz = new RetiredForagerBee(40, grey, jelly, 'gamble', false)