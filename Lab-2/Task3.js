var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, batteryCapacity) {
        var _this = _super.call(this, "Tesla", model, year) || this; // Виклик конструктора батьківського класу
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    Tesla.prototype.displayInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, ", \u0420\u0456\u043A: ").concat(this.year, ", \u0404\u043C\u043D\u0456\u0441\u0442\u044C \u0431\u0430\u0442\u0430\u0440\u0435\u0457: ").concat(this.batteryCapacity, " \u043A\u0412\u0442-\u0433\u043E\u0434."));
    };
    return Tesla;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, engineType) {
        var _this = _super.call(this, "BMW", model, year) || this; // Виклик конструктора батьківського класу
        _this.engineType = engineType;
        return _this;
    }
    BMW.prototype.displayInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, ", \u0420\u0456\u043A: ").concat(this.year, ", \u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ").concat(this.engineType, "."));
    };
    return BMW;
}(Car));
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, year, hybrid) {
        var _this = _super.call(this, "Toyota", model, year) || this; // Виклик конструктора батьківського класу
        _this.hybrid = hybrid;
        return _this;
    }
    Toyota.prototype.displayInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, ", \u0420\u0456\u043A: ").concat(this.year, ", \u0413\u0456\u0431\u0440\u0438\u0434: ").concat(this.hybrid ? "Так" : "Ні", "."));
    };
    return Toyota;
}(Car));
// Створення екземплярів Tesla
var teslaModelS = new Tesla("Model S", 2023, 100);
var teslaModel3 = new Tesla("Model 3", 2022, 75);
// Створення екземплярів BMW
var bmwX5 = new BMW("X5", 2021, "бензин");
var bmwI3 = new BMW("i3", 2020, "електро");
// Створення екземплярів Toyota
var toyotaCamry = new Toyota("Camry", 2019, false);
var toyotaPrius = new Toyota("Prius", 2021, true);
teslaModelS.displayInfo();
teslaModel3.displayInfo();
bmwX5.displayInfo();
bmwI3.displayInfo();
toyotaCamry.displayInfo();
toyotaPrius.displayInfo();
