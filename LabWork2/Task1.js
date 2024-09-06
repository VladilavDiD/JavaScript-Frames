var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.move = function () {
        console.log('${this.name} ходить на лапах.');
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age) {
        this.canFly = true;
        this.name = name;
        this.age = age;
    }
    Bird.prototype.move = function () {
        console.log('${this.name} летить.');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, age) {
        this.canSwim = true;
        this.name = name;
        this.age = age;
    }
    Fish.prototype.move = function () {
        console.log('${this.name} пливе.');
    };
    return Fish;
}());
var cat = {
    name: "Myrsick",
    age: 2,
    move: function () {
        console.log("Кіт ходить.");
    },
};
var bird = {
    name: "Kesha",
    age: 1,
    canFly: true,
    move: function () {
        console.log("Птах летить.");
    },
};
var fish = {
    name: "Nori",
    age: 0.4,
    canSwim: true,
    move: function () {
        console.log("Рибка пливе.");
    },
};
