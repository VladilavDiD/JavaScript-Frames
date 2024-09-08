// Клас для онлайн курсу, який імплементує інтерфейс Course
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(name, duration) {
        this.students = []; // Спочатку порожній масив студентів
        this.name = name;
        this.duration = duration;
    }
    // Метод для реєстрації студента на курс
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log("".concat(student, " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name, "."));
        }
        else {
            console.log("".concat(student, " \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name, "."));
        }
    };
    // Метод для перевірки, чи студент вже зареєстрований на курс
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        return this.students.indexOf(student) !== -1;
    };
    return OnlineCourse;
}());
// Клас для управління курсами
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = []; // Масив курсів
    }
    // Метод для додавання курсу
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u041A\u0443\u0440\u0441 ".concat(course.name, " \u0434\u043E\u0434\u0430\u043D\u0438\u0439."));
    };
    // Метод для видалення курсу за назвою
    CourseManager.prototype.removeCourse = function (courseName) {
        var index = -1;
        for (var i = 0; i < this.courses.length; i++) {
            if (this.courses[i].name === courseName) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log("\u041A\u0443\u0440\u0441 ".concat(courseName, " \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0438\u0439."));
        }
        else {
            console.log("\u041A\u0443\u0440\u0441 ".concat(courseName, " \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
        }
    };
    // Метод для пошуку курсу за назвою
    CourseManager.prototype.findCourse = function (courseName) {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            if (course.name === courseName) {
                return course;
            }
        }
        return undefined;
    };
    // Метод для виведення всіх курсів та студентів
    CourseManager.prototype.listCourses = function () {
        console.log("Список курсів:");
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            console.log("\u041A\u0443\u0440\u0441: ".concat(course.name, ", \u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C: ").concat(course.duration, " \u0433\u043E\u0434\u0438\u043D"));
            console.log("\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0438: ".concat(course.students.join(", ") || "Немає зареєстрованих студентів"));
        }
    };
    return CourseManager;
}());
// Приклад використання
var courseManager = new CourseManager();
// Створюємо курси
var course1 = new OnlineCourse("JavaScript", 40);
var course2 = new OnlineCourse("TypeScript", 30);
var course3 = new OnlineCourse("Python", 50);
// Додаємо курси до менеджера
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);
// Реєструємо студентів на курси
course1.registerStudent("Alice");
course1.registerStudent("Bob");
course2.registerStudent("Charlie");
course3.registerStudent("Alice");
// Виводимо список курсів разом із зареєстрованими студентами
courseManager.listCourses();
// Пошук курсу за назвою
var foundCourse = courseManager.findCourse("JavaScript");
if (foundCourse) {
    console.log("\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u0443\u0440\u0441: ".concat(foundCourse.name));
}
else {
    console.log("Курс не знайдено.");
}
// Видаляємо курс
courseManager.removeCourse("TypeScript");
// Виводимо оновлений список курсів
courseManager.listCourses();
