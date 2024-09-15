// Інтерфейс для курсу
interface Course {
    name: string;
    duration: number; // Тривалість у годинах
    students: string[]; // Масив зареєстрованих студентів
}

// Клас для онлайн курсу, який імплементує інтерфейс Course
class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[] = []; // Спочатку порожній масив студентів

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
    }

    // Метод для реєстрації студента на курс
    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} успішно зареєстрований на курс ${this.name}.`);
        } else {
            console.log(`${student} вже зареєстрований на курс ${this.name}.`);
        }
    }

    // Метод для перевірки, чи студент вже зареєстрований на курс
    isStudentRegistered(student: string): boolean {
        return this.students.indexOf(student) !== -1;
    }
}

// Клас для управління курсами
class CourseManager {
    private courses: Course[] = []; // Масив курсів

    // Метод для додавання курсу
    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} доданий.`);
    }

    // Метод для видалення курсу за назвою
    removeCourse(courseName: string): void {
        let index = -1;
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].name === courseName) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс ${courseName} видалений.`);
        } else {
            console.log(`Курс ${courseName} не знайдено.`);
        }
    }

    // Метод для пошуку курсу за назвою
    findCourse(courseName: string): Course | undefined {
        for (const course of this.courses) {
            if (course.name === courseName) {
                return course;
            }
        }
        return undefined;
    }

    // Метод для виведення всіх курсів та студентів
    listCourses(): void {
        console.log("Список курсів:");
        for (const course of this.courses) {
            console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин`);
            console.log(`Зареєстровані студенти: ${course.students.join(", ") || "Немає зареєстрованих студентів"}`);
        }
    }
}

// Приклад використання
const courseManager = new CourseManager();

// Створюємо курси
const course1 = new OnlineCourse("JavaScript", 40);
const course2 = new OnlineCourse("TypeScript", 30);
const course3 = new OnlineCourse("Python", 50);

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
const foundCourse = courseManager.findCourse("JavaScript");
if (foundCourse) {
    console.log(`Знайдено курс: ${foundCourse.name}`);
} else {
    console.log("Курс не знайдено.");
}

// Видаляємо курс
courseManager.removeCourse("TypeScript");

// Виводимо оновлений список курсів
courseManager.listCourses();
