abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Абстрактний метод для обчислення річного бонусу
    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    // Річний бонус для розробника - 10% від зарплати
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    // Реалізація методу pay з інтерфейсу Payable
    pay(): void {
        console.log(`${this.name} отримав(ла) зарплату ${this.salary} та бонус ${this.getAnnualBonus()}`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    // Річний бонус для менеджера - 20% від зарплати
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    // Реалізація методу pay з інтерфейсу Payable
    pay(): void {
        console.log(`${this.name} отримав(ла) зарплату ${this.salary} та бонус ${this.getAnnualBonus()}`);
    }
}

// Масив співробітників
const employees: Employee[] = [
    new Developer("John", 30, 50000),
    new Developer("Jane", 25, 60000),
    new Manager("Alice", 40, 80000),
    new Manager("Bob", 50, 90000),
];

// Підрахунок загальної річної суми бонусів
let totalBonuses = 0;

for (const employee of employees) {
    totalBonuses += employee.getAnnualBonus();

    // Перевірка наявності методу pay у об'єкта
    if ('pay' in employee) {
        (employee as Payable).pay();
    } else {
        console.error(`${employee['name']} не може отримати оплату, оскільки не реалізує Payable.`);
    }
}

console.log(`Загальна річна сума бонусів для всіх співробітників: ${totalBonuses}`);
