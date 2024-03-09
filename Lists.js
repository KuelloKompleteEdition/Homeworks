class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    peek(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                return this.peek(value, current.next);
            }
        }

        return false;
    }

    size(current = this.head, acum = 1) {
        if (this.head === null) {
            return 0;
        }
        if (current.next !== null) {
            return this.size(current.next, acum + 1);
        }
        return acum;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Tarea: ${node.value.title} | Descripción: ${node.value.description} | Siguiente: ${node.next ? node.next.value.title : null}`);
            node = node.next;
        }
    }
}


const todoList = new LinkedList();

todoList.append(new Task("Complete math assignment", "Solve exercises 1 to 5 from chapter 3"));
todoList.append(new Task("Write essay for English class", "Topic: Impact of technology on society"));
todoList.append(new Task("Prepare presentation for meeting", "Research statistics and create slides"));

todoList.print();

  