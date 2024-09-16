import { Book, User, IBook, IUser } from './models';
const MAX_BORROW_LIMIT = 3;

export class LibraryService {
  private books: Book[] = [];
  private users: User[] = [];
  private userIdCounter: number = 1;

  // Додавання книги
  public addBook(book: Book): void {
    this.books.push(book);
  }

  // Додавання користувача
  public addUser(user: User): void {
    user.id = this.userIdCounter++;
    this.users.push(user);
  }

  // Отримання всіх книг
  public getBooks(): Book[] {
    return this.books;
  }

  // Отримання всіх користувачів
  public getUsers(): User[] {
    return this.users;
  }

  // Видалення книги
  public removeBook(index: number): void {
    this.books.splice(index, 1);
  }

  // Отримання користувача за його ID
  public getUserById(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  // Позичання книги
  public borrowBook(bookIndex: number, userId: number): void {
    const book = this.books[bookIndex];
    const user = this.getUserById(userId);

    if (user && book && !book.isBorrowed) {
      if (user.canBorrowMoreBooks()) {
        user.borrowBook(book);
        book.borrow();
        this.showNotification(`Книга "${book.title}" успішно позичена користувачем ${user.name}`);
      } else {
        this.showNotification(`Користувач ${user.name} не може позичити більше ${MAX_BORROW_LIMIT} книг.`);
      }
    } else {
      this.showNotification('Книга вже позичена або користувача не знайдено.');
    }
  }

  // Повернення книги
  public returnBook(bookIndex: number, userId: number): void {
    const book = this.books[bookIndex];
    const user = this.getUserById(userId);

    if (user && book && book.isBorrowed) {
      user.returnBook(book);
      book.returnBook();
      this.showNotification(`Книга "${book.title}" успішно повернута користувачем ${user.name}`);
    } else {
      this.showNotification('Помилка при поверненні книги.');
    }
  }

  // Метод для відображення сповіщень
  private showNotification(message: string): void {
    alert(message); // Просте вікно сповіщення для демонстрації
  }
}

