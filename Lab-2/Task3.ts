abstract class Car {
    protected make: string; 
    protected model: string; 
    protected year: number; 

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Абстрактний метод для виведення опису автомобіля
    abstract displayInfo(): void;
}

class Tesla extends Car {
    private batteryCapacity: number; // Ємність батареї в кВт-год

    constructor(model: string, year: number, batteryCapacity: number) {
        super("Tesla", model, year); // Виклик конструктора батьківського класу
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo(): void {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Рік: ${this.year}, Ємність батареї: ${this.batteryCapacity} кВт-год.`);
    }
}

class BMW extends Car {
    private engineType: string; // Тип двигуна (бензин, дизель, електро)

    constructor(model: string, year: number, engineType: string) {
        super("BMW", model, year); // конструктора батьківського класу
        this.engineType = engineType;
    }

    displayInfo(): void {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Рік: ${this.year}, Тип двигуна: ${this.engineType}.`);
    }
}

class Toyota extends Car {
    private hybrid: boolean; // Чи є автомобіль гібридом

    constructor(model: string, year: number, hybrid: boolean) {
        super("Toyota", model, year); // конструктора батьківського класу
        this.hybrid = hybrid;
    }

    displayInfo(): void {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Рік: ${this.year}, Гібрид: ${this.hybrid ? "Так" : "Ні"}.`);
    }
}

// Створення екземплярів Tesla
const teslaModelS = new Tesla("Model S", 2023, 100);
const teslaModel3 = new Tesla("Model 3", 2022, 75);

// BMW
const bmwX5 = new BMW("X5", 2021, "бензин");
const bmwI3 = new BMW("i3", 2020, "електро");

// Toyota
const toyotaCamry = new Toyota("Camry", 2019, false);
const toyotaPrius = new Toyota("Prius", 2021, true);


teslaModelS.displayInfo();
teslaModel3.displayInfo();

bmwX5.displayInfo();
bmwI3.displayInfo();

toyotaCamry.displayInfo();
toyotaPrius.displayInfo();

