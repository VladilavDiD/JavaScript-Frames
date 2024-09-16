// Інтерфейс для книги
export interface IBook {
  title: string;
  author: string;
  year: number;
  isBorrowed: boolean;  // Додаємо стан книги (позичена чи ні)
}

// Клас для книги
export class Book implements IBook {
  public isBorrowed: boolean;

  constructor(
      public title: string,
      public author: string,
      public year: number
  ) {
      this.isBorrowed = false;  // За замовчуванням книга не позичена
  }

  // Метод для позичання книги
  public borrow(): void {
      if (!this.isBorrowed) {
          this.isBorrowed = true;
          console.log(`${this.title} позичено.`);
      } else {
          console.log(`${this.title} вже позичено.`);
      }
  }

  // Метод для повернення книги
  public returnBook(): void {
      if (this.isBorrowed) {
          this.isBorrowed = false;
          console.log(`${this.title} повернуто.`);
      } else {
          console.log(`${this.title} не була позичена.`);
      }
  }
}

// Інтерфейс для користувача
export interface IUser {
  id: number;
  name: string;
  email: string;
}

const MAX_BORROW_LIMIT = 3;

// Оновлений клас для користувача
export class User implements IUser {
  public borrowedBooks: IBook[] = [];

  constructor(
      public id: number,
      public name: string,
      public email: string
  ) {}

  // Метод для перевірки, чи можна позичити ще одну книгу
  public canBorrowMoreBooks(): boolean {
      return this.borrowedBooks.length < MAX_BORROW_LIMIT;
  }

  // Метод для додавання книги до списку позичених
  public borrowBook(book: IBook): void {
      if (this.canBorrowMoreBooks()) {
          this.borrowedBooks.push(book);
          console.log(`${book.title} позичено користувачем ${this.name}`);
      } else {
          console.log(`Користувач ${this.name} не може позичити більше ${MAX_BORROW_LIMIT} книг.`);
      }
  }

  // Метод для повернення книги
  public returnBook(book: IBook): void {
      const index = this.borrowedBooks.indexOf(book);
      if (index > -1) {
          this.borrowedBooks.splice(index, 1);
          console.log(`${book.title} повернуто користувачем ${this.name}`);
      }
  }

  // Метод для отримання інформації про користувача
  public getUserInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }
}
