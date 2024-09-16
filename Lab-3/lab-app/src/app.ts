import { Book, User } from './models';
import { LibraryService } from './services';
import { Validation } from './validation';

namespace LibraryApp {
  export class App {
    private libraryService: LibraryService;

    constructor() {
      this.libraryService = new LibraryService();

      this.setupEventListeners();
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
          <td><button class="btn btn-danger" onclick="app.deleteBook(${index})">Видалити</button></td>
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
    

    public deleteBook(index: number): void {
      this.libraryService.removeBook(index);
      this.displayBooks();
    }
  }
}

const app = new LibraryApp.App();
