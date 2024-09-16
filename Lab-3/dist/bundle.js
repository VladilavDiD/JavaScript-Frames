/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lab-app/src/app.ts":
/*!****************************!*\
  !*** ./lab-app/src/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst models_1 = __webpack_require__(/*! ./models */ \"./lab-app/src/models.ts\");\nconst services_1 = __webpack_require__(/*! ./services */ \"./lab-app/src/services.ts\");\nconst modal_1 = __webpack_require__(/*! ./modal */ \"./lab-app/src/modal.ts\");\nconst validation_1 = __webpack_require__(/*! ./validation */ \"./lab-app/src/validation.ts\");\nvar LibraryApp;\n(function (LibraryApp) {\n    class App {\n        constructor() {\n            this.libraryService = new services_1.LibraryService();\n            this.addBookModal = new modal_1.Modal('addBookModal');\n            this.addUserModal = new modal_1.Modal('addUserModal');\n            this.initialize();\n        }\n        initialize() {\n            // Додати слухачі на кнопки\n            this.addBookModal.addCloseListener('closeAddBookModal');\n            this.addUserModal.addCloseListener('closeAddUserModal');\n            // Приклад валідації\n            const newBook = new models_1.Book('Clean Code', 'Robert Martin', 2008);\n            if (validation_1.Validation.isNotEmpty(newBook.title) && validation_1.Validation.isValidYear('2008')) {\n                this.libraryService.addBook(newBook);\n            }\n            this.displayBooks();\n        }\n        displayBooks() {\n            const books = this.libraryService.getBooks();\n            console.log('Books:', books);\n        }\n    }\n    LibraryApp.App = App;\n})(LibraryApp || (LibraryApp = {}));\nconst app = new LibraryApp.App();\n\n\n//# sourceURL=webpack://lab-3/./lab-app/src/app.ts?");

/***/ }),

/***/ "./lab-app/src/modal.ts":
/*!******************************!*\
  !*** ./lab-app/src/modal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Modal = void 0;\nclass Modal {\n    constructor(modalId) {\n        const modal = document.getElementById(modalId);\n        if (!modal)\n            throw new Error(`Modal with ID ${modalId} not found`);\n        this.modalElement = modal;\n    }\n    // Відкрити модальне вікно\n    open() {\n        this.modalElement.style.display = 'block';\n    }\n    // Закрити модальне вікно\n    close() {\n        this.modalElement.style.display = 'none';\n    }\n    // Додати подію для закриття вікна\n    addCloseListener(buttonId) {\n        const button = document.getElementById(buttonId);\n        if (button) {\n            button.addEventListener('click', () => this.close());\n        }\n    }\n}\nexports.Modal = Modal;\n\n\n//# sourceURL=webpack://lab-3/./lab-app/src/modal.ts?");

/***/ }),

/***/ "./lab-app/src/models.ts":
/*!*******************************!*\
  !*** ./lab-app/src/models.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = exports.Book = void 0;\n// Клас для книги\nclass Book {\n    constructor(title, author, year) {\n        this.title = title;\n        this.author = author;\n        this.year = year;\n    }\n    // Метод для отримання інформації про книгу\n    getBookInfo() {\n        return `${this.title} by ${this.author} (${this.year})`;\n    }\n}\nexports.Book = Book;\n// Клас для користувача\nclass User {\n    constructor(id, name, email) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n    }\n    // Метод для отримання інформації про користувача\n    getUserInfo() {\n        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;\n    }\n}\nexports.User = User;\n\n\n//# sourceURL=webpack://lab-3/./lab-app/src/models.ts?");

/***/ }),

/***/ "./lab-app/src/services.ts":
/*!*********************************!*\
  !*** ./lab-app/src/services.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LibraryService = void 0;\nclass LibraryService {\n    constructor() {\n        this.books = [];\n        this.users = [];\n    }\n    // Додавання книги\n    addBook(book) {\n        this.books.push(book);\n    }\n    // Додавання користувача\n    addUser(user) {\n        this.users.push(user);\n    }\n    // Видалення книги\n    removeBook(index) {\n        this.books.splice(index, 1);\n    }\n    // Видалення користувача\n    removeUser(index) {\n        this.users.splice(index, 1);\n    }\n    // Отримання списку книг\n    getBooks() {\n        return this.books;\n    }\n    // Отримання списку користувачів\n    getUsers() {\n        return this.users;\n    }\n}\nexports.LibraryService = LibraryService;\n\n\n//# sourceURL=webpack://lab-3/./lab-app/src/services.ts?");

/***/ }),

/***/ "./lab-app/src/validation.ts":
/*!***********************************!*\
  !*** ./lab-app/src/validation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Validation = void 0;\nclass Validation {\n    // Перевірити, чи поле не пусте\n    static isNotEmpty(value) {\n        return value.trim().length > 0;\n    }\n    // Перевірка формату email\n    static isValidEmail(email) {\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        return emailRegex.test(email);\n    }\n    // Перевірка року\n    static isValidYear(year) {\n        const yearRegex = /^[12][0-9]{3}$/;\n        return yearRegex.test(year);\n    }\n}\nexports.Validation = Validation;\n\n\n//# sourceURL=webpack://lab-3/./lab-app/src/validation.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lab-app/src/app.ts");
/******/ 	
/******/ })()
;