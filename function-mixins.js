const humanFactory = function (obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },

    isCrying() {
      return isCrying;
    },
  });
};

const flyFactory = function (obj) {
  let isFlying = false;

  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },

    isFlying() {
      return isFlying;
    },
  });
};

const superman = humanFactory(flyFactory({}));

console.log(superman.fly().cry().isCrying()); //true
console.log(superman.fly().cry().isFlying()); //true
