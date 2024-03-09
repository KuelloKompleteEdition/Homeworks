class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
  }
  
  class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }
  
    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
  
    pop() {
        this.count--
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }
  
    peek() {
        return this.stack[this.count - 1];
    }
  
    size() {
        return this.count;
    }
  
    print() {
        console.log(this.stack);
    }
  }

  const bookStack = new Stack();
  
  const book1 = new Book("To Kill a Mockingbird", "978-0-06-112008-4", "Harper Lee", "Harper Perennial Modern Classics");
  const book2 = new Book("1984", "978-0-452-28423-4", "George Orwell", "Signet Classic");
  const book3 = new Book("The Great Gatsby", "978-0-7432-7356-5", "F. Scott Fitzgerald", "Scribner");
  
  bookStack.push(book1);
  bookStack.push(book2);
  bookStack.push(book3);
  
  bookStack.print();
  