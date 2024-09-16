import { Book, User } from './models';
import { LibraryService } from './services';
import { Validation } from './validation';

namespace LibraryApp {
  export class App {
    private libraryService: LibraryService;

    constructor() {
      this.libraryService = new LibraryService();

      this.setupEventListeners();
      this.displayBooks(); // Відобразити книги при завантаженні
      this.displayUsers(); // Відобразити користувачів при завантаженні
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

      // Обробка подій для кнопок
      document.getElementById('bookList')?.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
          const button = event.target;
          const bookIndex = parseInt(button.getAttribute('data-book-index') || '', 10);
          
          if (button.classList.contains('borrow-btn')) {
            this.borrowBookPrompt(bookIndex);
          }
          if (button.classList.contains('return-btn')) {
            this.returnBookPrompt(bookIndex);
          }
          if (button.classList.contains('delete-btn')) {
            this.deleteBook(bookIndex);
          }
        }
      });
    }

    private addBook(): void {
      const bookTitle = (document.getElementById('bookTitle') as HTMLInputElement).value;
      const bookAuthor = (document.getElementById('bookAuthor') as HTMLInputElement).value;
      const bookYear = (document.getElementById('bookYear') as HTMLInputElement).value;

      if (!Validation.isNotEmpty(bookTitle) || !Validation.isNotEmpty(bookAuthor) || !Validation.isValidYear(bookYear)) {
        alert('Введіть коректні дані для книги!');
        return;
      }

      const newBook = new Book(bookTitle, bookAuthor, parseInt(bookYear));
      this.libraryService.addBook(newBook);
      this.displayBooks();
    }

    private addUser(): void {
      const userName = (document.getElementById('userName') as HTMLInputElement).value;
      const userEmail = (document.getElementById('userEmail') as HTMLInputElement).value;

      if (!Validation.isNotEmpty(userName) || !Validation.isValidEmail(userEmail)) {
        alert('Введіть коректні дані для користувача!');
        return;
      }

      // Генеруємо унікальний ID для нового користувача
      const newUserId = this.libraryService.getUsers().length + 1; // або будь-який інший спосіб генерування ID
      const newUser = new User(newUserId, userName, userEmail);

      this.libraryService.addUser(newUser);
      this.displayUsers();
    }

    private displayBooks(): void {
      const bookList = document.getElementById('bookList') as HTMLElement;
      bookList.innerHTML = '';  // Очищаємо список перед виведенням

      const books = this.libraryService.getBooks();
      books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.year}</td>
          <td>
            <button class="btn btn-primary btn-sm borrow-btn" data-book-index="${index}">Позичити</button>
            <button class="btn btn-warning btn-sm return-btn" data-book-index="${index}">Повернути</button>
            <button class="btn btn-danger btn-sm delete-btn" data-book-index="${index}">Видалити</button>
          </td>
        `;
        bookList.appendChild(row);
      });
    }

    private displayUsers(): void {
      const userList = document.getElementById('userList') as HTMLElement;
      userList.innerHTML = '';  // Очищаємо список перед виведенням

      const users = this.libraryService.getUsers();
      users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        `;
        userList.appendChild(row);
      });
    }

    public borrowBookPrompt(index: number): void {
      const userId = parseInt(prompt('Введіть ID користувача') || '', 10);
      if (!isNaN(userId)) {
        this.libraryService.borrowBook(index, userId);
        this.displayBooks(); // Оновити список книг після позичання
      } else {
        alert('Невірний ID користувача');
      }
    }

    public returnBookPrompt(index: number): void {
      const userId = parseInt(prompt('Введіть ID користувача') || '', 10);
      if (!isNaN(userId)) {
        this.libraryService.returnBook(index, userId);
        this.displayBooks(); // Оновити список книг після повернення
      } else {
        alert('Невірний ID користувача');
      }
    }

    public deleteBook(index: number): void {
      this.libraryService.removeBook(index);
      this.displayBooks();
    }
  }
}

const app = new LibraryApp.App();
