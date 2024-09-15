// Інтерфейс для книги
export interface IBook {
    title: string;
    author: string;
    year: number;
  }
  
  // Клас для книги
  export class Book implements IBook {
    constructor(
      public title: string,
      public author: string,
      public year: number
    ) {}
  
    // Метод для отримання інформації про книгу
    public getBookInfo(): string {
      return `${this.title} by ${this.author} (${this.year})`;
    }
  }
  
  // Інтерфейс для користувача
  export interface IUser {
    id: number;
    name: string;
    email: string;
  }
  
  // Клас для користувача
  export class User implements IUser {
    constructor(
      public id: number,
      public name: string,
      public email: string
    ) {}
  
    // Метод для отримання інформації про користувача
    public getUserInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
    }
  }
  