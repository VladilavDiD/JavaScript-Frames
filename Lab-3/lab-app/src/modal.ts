export class Modal {
  private modalElement: HTMLElement;

  constructor(modalId: string) {
    const modal = document.getElementById(modalId);
    if (!modal) throw new Error(`Modal with ID ${modalId} not found`);
    this.modalElement = modal;
  }

  // Відкрити модальне вікно
  public open(): void {
    this.modalElement.style.display = 'block';
  }

  // Закрити модальне вікно
  public close(): void {
    this.modalElement.style.display = 'none';
  }

  // Додати подію для закриття вікна
  public addCloseListener(buttonId: string): void {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.close());
    }
  }
}
