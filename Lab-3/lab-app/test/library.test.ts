import { Library } from '../src/library';
import * as assert from 'assert';

describe('Library', () => {
  let library: Library<string>;

  beforeEach(() => {
    library = new Library<string>();
  });

  it('додає елемент до колекції', () => {
    library.addItem('Книга 1');
    const items = library.getAllItems();

    assert.strictEqual(items.length, 1, 'Колекція повинна містити один елемент');
    assert.strictEqual(items[0], 'Книга 1', 'Елемент повинен відповідати доданому значенню');
  });

  it('видаляє елемент з колекції', () => {
    library.addItem('Книга 1');
    library.addItem('Книга 2');
    library.removeItem(0); // Видаляємо перший елемент

    const items = library.getAllItems();
    assert.strictEqual(items.length, 1, 'Колекція повинна містити один елемент після видалення');
    assert.strictEqual(items[0], 'Книга 2', 'Повинен залишитися лише другий елемент');
  });

  it('повертає помилку при видаленні неіснуючого елемента', () => {
    library.addItem('Книга 1');
    library.removeItem(5); // Невірний індекс

    const items = library.getAllItems();
    assert.strictEqual(items.length, 1, 'Колекція не повинна змінюватися при видаленні неіснуючого індексу');
  });

  it('знаходить елемент за умовою', () => {
    library.addItem('Книга 1');
    library.addItem('Книга 2');
    
    const foundItem = library.findItem((item) => item === 'Книга 2');
    assert.strictEqual(foundItem, 'Книга 2', 'Повинен бути знайдений відповідний елемент');
  });

  it('отримує всі елементи з колекції', () => {
    library.addItem('Книга 1');
    library.addItem('Книга 2');
    
    const items = library.getAllItems();
    assert.strictEqual(items.length, 2, 'Колекція повинна містити два елементи');
    assert.deepStrictEqual(items, ['Книга 1', 'Книга 2'], 'Елементи повинні відповідати доданим значенням');
  });
});
