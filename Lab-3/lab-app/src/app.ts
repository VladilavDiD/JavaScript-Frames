import { Book, User } from './models';
import { LibraryService } from './services';
import { Modal } from './modal';
import { Validation } from './validation';

namespace LibraryApp {
  export class App {
    private libraryService: LibraryService;
    private addBookModal: Modal;
    private addUserModal: Modal;

    constructor() {
      this.libraryService = new LibraryService();
      this.addBookModal = new Modal('addBookModal');
      this.addUserModal = new Modal('addUserModal');

      this.initialize();
    }

    private initialize(): void {
      // Додати слухачі на кнопки
      this.addBookModal.addCloseListener('closeAddBookModal');
      this.addUserModal.addCloseListener('closeAddUserModal');

      // Приклад валідації
      const newBook = new Book('Clean Code', 'Robert Martin', 2008);
      if (Validation.isNotEmpty(newBook.title) && Validation.isValidYear('2008')) {
        this.libraryService.addBook(newBook);
      }

      this.displayBooks();
    }

    private displayBooks(): void {
      const books = this.libraryService.getBooks();
      console.log('Books:', books);
    }
  }
}

const app = new LibraryApp.App();
