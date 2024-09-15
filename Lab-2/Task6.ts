interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean; // Властивість, що вказує на те, чи позичено елемент

    borrow(): void; // Метод для позначення елементу як позиченого
}

class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    pages: number; // Специфічна властивість для книг - кількість сторінок

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} позичено.`);
        } else {
            console.log(`${this.title} вже позичено.`);
        }
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    issueNumber: number; // Специфічна властивість для журналів - номер випуску

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал ${this.title} (випуск №${this.issueNumber}) позичено.`);
        } else {
            console.log(`Журнал ${this.title} вже позичено.`);
        }
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    duration: number; // Специфічна властивість для DVD - тривалість у хвилинах

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD ${this.title} позичено.`);
        } else {
            console.log(`DVD ${this.title} вже позичено.`);
        }
    }
}

// Клас Library, що містить масив бібліотечних елементів
class Library {
    private items: LibraryItem[] = []; // Масив бібліотечних елементів

    // Метод для додавання елементів до бібліотеки
    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано елемент: ${item.title}`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        for (const item of this.items) {
            if (item.title === name) {
                return item;
            }
        }
        return undefined; // Якщо елемент не знайдено
    }

    // Метод для виведення списку доступних елементів
    listAvailableItems(): void {
        console.log("Доступні елементи в бібліотеці:");
        this.items.forEach(item => {
            if (!item.isBorrowed) {
                console.log(`${item.title} (Автор: ${item.author})`);
            }
        });
    }
}

// Створення бібліотеки
const library = new Library();

// Додавання різних елементів до бібліотеки
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const magazine1 = new Magazine("National Geographic", "John Doe", 100);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

// Виведення списку доступних елементів
library.listAvailableItems();

// Позичаємо книгу та DVD
book1.borrow();
dvd1.borrow();

// Спроба позичити ту саму книгу знову
book1.borrow();

// Пошук елемента за назвою
const foundItem = library.findItemByName("National Geographic");
if (foundItem) {
    console.log(`Знайдено елемент: ${foundItem.title}`);
} else {
    console.log("Елемент не знайдено.");
}

// Виведення оновленого списку доступних елементів
library.listAvailableItems();
