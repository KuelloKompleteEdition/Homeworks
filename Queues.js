class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    print() {
        console.log(this.queue);
    }
}

const atmQueue = new Queue();

atmQueue.enqueue(new Person("John", new Date())); 
atmQueue.enqueue(new Person("Alice", new Date())); 
atmQueue.enqueue(new Person("Bob", new Date()));

atmQueue.print();



