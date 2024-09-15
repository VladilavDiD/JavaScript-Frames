// Клас Book, що імплементує інтерфейс LibraryItem
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("".concat(this.title, " \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
        else {
            console.log("".concat(this.title, " \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
    };
    return Book;
}());
// Клас Magazine, що імплементує інтерфейс LibraryItem
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B ".concat(this.title, " (\u0432\u0438\u043F\u0443\u0441\u043A \u2116").concat(this.issueNumber, ") \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
        else {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B ".concat(this.title, " \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
    };
    return Magazine;
}());
// Клас DVD, що імплементує інтерфейс LibraryItem
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("DVD ".concat(this.title, " \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
        else {
            console.log("DVD ".concat(this.title, " \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
    };
    return DVD;
}());
// Клас Library, що містить масив бібліотечних елементів
var Library = /** @class */ (function () {
    function Library() {
        this.items = []; // Масив бібліотечних елементів
    }
    // Метод для додавання елементів до бібліотеки
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("\u0414\u043E\u0434\u0430\u043D\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442: ".concat(item.title));
    };
    // Метод для пошуку елементів за назвою без використання find
    Library.prototype.findItemByName = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === name) {
                return item;
            }
        }
        return undefined; // Якщо елемент не знайдено
    };
    // Метод для виведення списку доступних елементів
    Library.prototype.listAvailableItems = function () {
        console.log("Доступні елементи в бібліотеці:");
        this.items.forEach(function (item) {
            if (!item.isBorrowed) {
                console.log("".concat(item.title, " (\u0410\u0432\u0442\u043E\u0440: ").concat(item.author, ")"));
            }
        });
    };
    return Library;
}());
// Створення бібліотеки
var library = new Library();
// Додавання різних елементів до бібліотеки
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
var magazine1 = new Magazine("National Geographic", "John Doe", 100);
var dvd1 = new DVD("Inception", "Christopher Nolan", 148);
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
var foundItem = library.findItemByName("National Geographic");
if (foundItem) {
    console.log("\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442: ".concat(foundItem.title));
}
else {
    console.log("Елемент не знайдено.");
}
// Виведення оновленого списку доступних елементів
library.listAvailableItems();
