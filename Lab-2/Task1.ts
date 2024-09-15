interface Animal{
    
    name: string;
    age: number;
    move(): void;
    canFly?: boolean; //опціональна властивість
    canSwim?: boolean; //опціональна властивість

}

class Cat implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} ходить на лапах.`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    canFly: boolean = true;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} летить.`);
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    canSwim: boolean = true;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} пливе.`);
    }
}

const cat: Animal = {
    name: "Myrsick",
    age: 2,
    move() {
        console.log("Кіт ходить.");
    },
};

const bird: Animal = {
    name: "Kesha",
    age: 1,
    canFly: true,
    move() {
        console.log("Птах летить.");
    },
};

const fish: Animal = {
    name: "Nori",
    age: 0.4,
    canSwim: true,
    move() {
        console.log("Рибка пливе.");
    },
};

console.log("Скрипт виконується!");

cat.move(); 
fish.move(); 
bird.move(); 

