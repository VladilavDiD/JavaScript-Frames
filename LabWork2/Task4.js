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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    // Річний бонус для розробника - 10% від зарплати
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    // Реалізація методу pay з інтерфейсу Payable
    Developer.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432(\u043B\u0430) \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443 ").concat(this.salary, " \u0442\u0430 \u0431\u043E\u043D\u0443\u0441 ").concat(this.getAnnualBonus()));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    // Річний бонус для менеджера - 20% від зарплати
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    // Реалізація методу pay з інтерфейсу Payable
    Manager.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432(\u043B\u0430) \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443 ").concat(this.salary, " \u0442\u0430 \u0431\u043E\u043D\u0443\u0441 ").concat(this.getAnnualBonus()));
    };
    return Manager;
}(Employee));
// Масив співробітників
var employees = [
    new Developer("John", 30, 50000),
    new Developer("Jane", 25, 60000),
    new Manager("Alice", 40, 80000),
    new Manager("Bob", 50, 90000),
];
// Підрахунок загальної річної суми бонусів
var totalBonuses = 0;
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    totalBonuses += employee.getAnnualBonus();
    // Перевірка наявності методу pay у об'єкта
    if ('pay' in employee) {
        employee.pay();
    }
    else {
        console.error("".concat(employee['name'], " \u043D\u0435 \u043C\u043E\u0436\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u0440\u0435\u0430\u043B\u0456\u0437\u0443\u0454 Payable."));
    }
}
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0440\u0456\u0447\u043D\u0430 \u0441\u0443\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u0456\u0432 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432: ".concat(totalBonuses));
