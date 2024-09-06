var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 \u043B\u0430\u043F\u0430\u0445."));
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
        console.log("".concat(this.name, " \u043B\u0435\u0442\u0438\u0442\u044C."));
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
        console.log("".concat(this.name, " \u043F\u043B\u0438\u0432\u0435."));
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
console.log("Скрипт виконується!");
cat.move();
fish.move();
bird.move();
