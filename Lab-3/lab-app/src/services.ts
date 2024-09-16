import { Book, User, IBook, IUser } from './models';
const MAX_BORROW_LIMIT = 3;

export class LibraryService {
  private books: Book[] = [];
  private users: User[] = [];
  private userIdCounter: number = 1;

  constructor() {
    // Завантаження книги та користувачів із LocalStorage під час ініціалізації
    this.loadBooksFromLocalStorage();
    this.loadUsersFromLocalStorage();
  }

  // Додавання книги
  public addBook(book: Book): void {
    this.books.push(book);
    this.saveBooksToLocalStorage(); // Зберігаємо книги 
  }

  // Додавання користувача
  public addUser(user: User): void {
    this.users.push(user);
    this.saveUsersToLocalStorage(); // Зберігаємо користувачів 
  }

  // Видалення книги
  public removeBook(index: number): void {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage(); // Оновлюємо LocalStorage після видалення книги
  }

  // Отримання користувача за його ID
  public getUserById(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  // Отримання всіх книг
  public getBooks(): Book[] {
    return this.books;
  }

  // Отримання всіх користувачів
  public getUsers(): User[] {
    return this.users;
  }

  // Позичання книги
  public borrowBook(bookIndex: number, userId: number): void {
    const book = this.books[bookIndex];
    const user = this.getUserById(userId);

    if (!user) {
      this.showNotification('Користувача не знайдено.');
      return;
    }

    if (book.isBorrowed) {
      this.showNotification('Ця книга вже позичена.');
      return;
    }

    if (!user.canBorrowMoreBooks()) {
      this.showNotification(`Користувач ${user.name} не може позичити більше ${MAX_BORROW_LIMIT} книг.`);
      return;
    }

    user.borrowBook(book);
    book.borrow();
    this.saveBooksToLocalStorage();  // Оновлюємо, після позичання книги
    this.saveUsersToLocalStorage();
    this.showNotification(`Книга "${book.title}" успішно позичена користувачем ${user.name}`);
  }

  // Повернення книги
  public returnBook(bookIndex: number, userId: number): void {
    const book = this.books[bookIndex];
    const user = this.getUserById(userId);

    if (!user) {
      this.showNotification('Користувача не знайдено.');
      return;
    }

    if (!book.isBorrowed) {
      this.showNotification('Ця книга ще не позичена.');
      return;
    }

    user.returnBook(book);
    book.returnBook();
    this.saveBooksToLocalStorage();  // Оновлюємо LocalStorage після повернення книги
    this.saveUsersToLocalStorage();
    this.showNotification(`Книга "${book.title}" успішно повернута користувачем ${user.name}`);
  }

  // Метод для відображення сповіщень
  private showNotification(message: string): void {
    const notification = document.createElement('div');
    notification.className = 'alert alert-info';
    notification.innerText = message;
    document.body.appendChild(notification);
    
    // Автоматичне приховування сповіщення через 3 секунди
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }

  // Збереження книг 
  private saveBooksToLocalStorage(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Завантаження книг 
  private loadBooksFromLocalStorage(): void {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks).map((bookData: IBook) => new Book(bookData.title, bookData.author, bookData.year));
    }
  }

  // Збереження користувачів 
  private saveUsersToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // Завантаження користувачів 
  private loadUsersFromLocalStorage(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers).map((userData: IUser) => new User(userData.id, userData.name, userData.email));
      this.userIdCounter = this.users.length + 1; // Оновлюємо лічильник ID
    }
  }
}
