import { Book, User } from './models';
import { LibraryService } from './services';
import { Validation } from './validation';

namespace LibraryApp {
  export class App {
    private libraryService: LibraryService;

    constructor() {
      this.libraryService = new LibraryService();
      this.setupEventListeners();
      this.displayBooks();
      this.displayUsers();
    }

    private setupEventListeners(): void {
      // Додавання книги
      const bookForm = document.getElementById('bookForm') as HTMLFormElement;
      bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.addBook();
      });

      // Додавання користувача
      const userForm = document.getElementById('userForm') as HTMLFormElement;
      userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.addUser();
      });

      // Пошук книг
      const searchForm = document.getElementById(
        'searchForm'
      ) as HTMLFormElement;
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.searchBooks();
      });
    }

    private addBook(): void {
      const bookTitle = (
        document.getElementById('bookTitle') as HTMLInputElement
      ).value;
      const bookAuthor = (
        document.getElementById('bookAuthor') as HTMLInputElement
      ).value;
      const bookYear = (document.getElementById('bookYear') as HTMLInputElement)
        .value;

      if (
        !Validation.isNotEmpty(bookTitle) ||
        !Validation.isNotEmpty(bookAuthor) ||
        !Validation.isValidYear(bookYear)
      ) {
        this.showNotification('Введіть коректні дані для книги!', 'danger');
        return;
      }

      const newBook = new Book(bookTitle, bookAuthor, parseInt(bookYear));
      this.libraryService.addBook(newBook);
      this.displayBooks();
      this.showNotification(
        `Книга "${newBook.title}" успішно додана.`,
        'success'
      );
    }

    private addUser(): void {
      const userName = (document.getElementById('userName') as HTMLInputElement)
        .value;
      const userEmail = (
        document.getElementById('userEmail') as HTMLInputElement
      ).value;

      if (
        !Validation.isNotEmpty(userName) ||
        !Validation.isValidEmail(userEmail)
      ) {
        this.showNotification(
          'Введіть коректні дані для користувача!',
          'danger'
        );
        return;
      }

      // Генеруємо унікальний ID для нового користувача
      const newUserId = this.libraryService.getUsers().length + 1;
      const newUser = new User(newUserId, userName, userEmail);

      this.libraryService.addUser(newUser);
      this.displayUsers();
      this.showNotification(
        `Користувач ${newUser.name} успішно доданий.`,
        'success'
      );
    }

    private displayBooks(books: Book[] = this.libraryService.getBooks()): void {
      const bookList = document.getElementById('bookList') as HTMLElement;
      bookList.innerHTML = '';

      books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.year}</td>
          <td>
            <button class="btn btn-primary" id="borrowBtn-${index}">Позичити</button>
            <button class="btn btn-danger" id="returnBtn-${index}">Повернути</button>
            <button class="btn btn-warning" id="deleteBtn-${index}">Видалити</button>
          </td>
        `;
        bookList.appendChild(row);

        // обробники подій
        (
          document.getElementById(`borrowBtn-${index}`) as HTMLButtonElement
        ).addEventListener('click', () => this.borrowBookPrompt(index));
        (
          document.getElementById(`returnBtn-${index}`) as HTMLButtonElement
        ).addEventListener('click', () => this.returnBookPrompt(index));
        (
          document.getElementById(`deleteBtn-${index}`) as HTMLButtonElement
        ).addEventListener('click', () => this.deleteBook(index));
      });
    }

    private displayUsers(): void {
      const userList = document.getElementById('userList') as HTMLElement;
      userList.innerHTML = '';

      const users = this.libraryService.getUsers();
      users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="btn btn-danger" id="deleteUserBtn-${user.id}">Видалити</button>
          </td>
        `;
        userList.appendChild(row);

        // обробник події для видалення користувача
        (
          document.getElementById(
            `deleteUserBtn-${user.id}`
          ) as HTMLButtonElement
        ).addEventListener('click', () => this.deleteUser(user.id));
      });
    }

    private searchBooks(): void {
      const query = (
        document.getElementById('searchQuery') as HTMLInputElement
      ).value.toLowerCase();
      const books = this.libraryService.getBooks();
      const results = books.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      );

      const searchResults = document.getElementById(
        'searchResults'
      ) as HTMLElement;
      searchResults.innerHTML = '<h5>Результати Пошуку:</h5>';
      this.displayBooks(results);
    }

    private showNotification(
      message: string,
      type: 'success' | 'danger'
    ): void {
      const notificationArea = document.getElementById('notificationArea')!;
      const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';

      // Створити елемент сповіщення
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert ${alertClass} alert-dismissible fade show`;
      alertDiv.role = 'alert';
      alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;

      // Додати сповіщення до області сповіщень
      notificationArea.appendChild(alertDiv);

      // Видалити сповіщення через 5 секунд
      setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 150);
      }, 5000);
    }

    public borrowBookPrompt(index: number): void {
      const userId = parseInt(prompt('Введіть ID користувача') || '', 10);
      if (!isNaN(userId)) {
        const book = this.libraryService.getBooks()[index];
        const user = this.libraryService.getUserById(userId);

        if (user && book) {
          if (user.canBorrowMoreBooks()) {
            this.libraryService.borrowBook(index, userId);
            this.showNotification(
              `Книга "${book.title}" успішно позичена користувачу ${user.name}.`,
              'success'
            );
          } else {
            this.showNotification(
              `Користувач ${user.name} не може позичити більше 3-х книг.`,
              'danger'
            );
          }
        } else {
          this.showNotification(
            'Помилка: Книга або користувач не знайдені.',
            'danger'
          );
        }
      } else {
        this.showNotification('Невірний ID користувача', 'danger');
      }
    }

    public returnBookPrompt(index: number): void {
      const userId = parseInt(prompt('Введіть ID користувача') || '', 10);
      if (!isNaN(userId)) {
        this.libraryService.returnBook(index, userId);
        this.showNotification(
          `Книга успішно повернута користувачем з ID ${userId}.`,
          'success'
        );
      } else {
        this.showNotification('Невірний ID користувача', 'danger');
      }
    }

    public deleteBook(index: number): void {
      const book = this.libraryService.getBooks()[index];
      this.libraryService.removeBook(index);
      this.displayBooks();
      this.showNotification(
        `Книга "${book.title}" успішно видалена.`,
        'success'
      );
    }

    public deleteUser(userId: number): void {
      const user = this.libraryService.getUserById(userId);
      if (user) {
        this.libraryService.removeUser(userId);
        this.displayUsers();
        this.showNotification(
          `Користувач ${user.name} успішно видалений.`,
          'success'
        );
      } else {
        this.showNotification('Помилка: Користувач не знайдений.', 'danger');
      }
    }
  }
}

// Ініціалізація додатка
const app = new LibraryApp.App();
(window as any).app = app;
