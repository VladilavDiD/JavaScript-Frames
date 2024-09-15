export class Validation {
    // Перевірити, чи поле не пусте
    public static isNotEmpty(value: string): boolean {
      return value.trim().length > 0;
    }
  
    // Перевірка формату email
    public static isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Перевірка року
    public static isValidYear(year: string): boolean {
      const yearRegex = /^[12][0-9]{3}$/;
      return yearRegex.test(year);
    }
  }
  