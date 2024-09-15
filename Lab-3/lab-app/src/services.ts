import { Book, User, IBook, IUser } from './models';

export class LibraryService {
  private books: IBook[] = [];
  private users: IUser[] = [];

  // Додавання книги
  public addBook(book: IBook): void {
    this.books.push(book);
  }

  // Додавання користувача
  public addUser(user: IUser): void {
    this.users.push(user);
  }

  // Видалення книги
  public removeBook(index: number): void {
    this.books.splice(index, 1);
  }

  // Видалення користувача
  public removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  // Отримання списку книг
  public getBooks(): IBook[] {
    return this.books;
  }

  // Отримання списку користувачів
  public getUsers(): IUser[] {
    return this.users;
  }
}
