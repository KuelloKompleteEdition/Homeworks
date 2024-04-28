class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class City {
    constructor(name) {
        this.name = name;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    printGraph() {
        console.log(this.adjList);
    }

    searchNode(value) {
        if (!this.nodes.length){
            return;
        }
        return this.nodes.find(item => item == value);
    }

    printAdjacency(value) {
        if (this.searchNode(value)) {
            console.log(this.adjList[value]);
        } else {
            return;
        }
    }
}

const friendGraph = new Graph();

const newyork = new City("New York");
const losangeles = new City("Los Angeles");

const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);
const charlie = new Person("Charlie", 28);

friendGraph.addNode(newyork);
friendGraph.addNode(losangeles);
friendGraph.addNode(alice);
friendGraph.addNode(bob);
friendGraph.addNode(charlie);

friendGraph.addEdge(newyork, alice);
friendGraph.addEdge(newyork, bob);
friendGraph.addEdge(losangeles, charlie);

console.log("People in New York:");
console.log(friendGraph.printAdjacency(newyork));

console.log("\nPeople in Los Angeles:");
console.log(friendGraph.printAdjacency(losangeles));

console.log("\nGraph:");
friendGraph.printGraph();
