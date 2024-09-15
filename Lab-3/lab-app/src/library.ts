export class Library<T> {
    private collection: T[] = [];
  
    // Додавання об'єкта до колекції
    public addItem(item: T): void {
      this.collection.push(item);
    }
  
    // Видалення об'єкта з колекції
    public removeItem(index: number): void {
      if (index >= 0 && index < this.collection.length) {
        this.collection.splice(index, 1);
      } else {
        console.error("Invalid index");
      }
    }
  
    // Пошук об'єкта в колекції
    public findItem(predicate: (item: T) => boolean): T | undefined {
      return this.collection.find(predicate);
    }
  
    // Отримати всі об'єкти з колекції
    public getAllItems(): T[] {
      return this.collection;
    }
  }
  