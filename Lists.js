class Todo {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.next = null;
    }
  }
  
  class TodoList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(title, description) {
      const newTodo = new Todo(title, description);
      if (!this.head) {
        this.head = newTodo;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newTodo;
      }
      this.size++;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(`Title: ${current.title}, Description: ${current.description}`);
        current = current.next;
      }
    }
  }
  
  // Create a new TODO list
  const todoList = new TodoList();
  
  // Add some tasks
  todoList.add("Task 1", "Description for Task 1");
  todoList.add("Task 2", "Description for Task 2");
  todoList.add("Task 3", "Description for Task 3");
  
  // Print all TODOs
  todoList.print();
  