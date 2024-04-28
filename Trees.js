class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }
}

class Node {
    constructor(person) {
        this.person = person;
        this.children = [];
    }
    isLeaf() {
        return this.children.length === 0;
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }
    search(person, node = this.root) {
        if (node.person === person) {
            return node;
        } else {
            const inChildren = node.children.find(item => item.person === person);
            if (inChildren) {
                return inChildren;
            } else {
                let found = null;
                node.children.forEach(item => {
                    if (!found) {
                        found = this.search(person, item);
                    }
                });
                return found;
            }
        }
    }

    insert(person, parent) {
        const newNode = new Node(person);
        if (!parent) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parent);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                return null;
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.person);
        node.children.forEach(child => this.preOrder(child));
    }
    
    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        node.children.forEach(child => this.postOrder(child));
        console.log(node.person);
    }
    
    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        if (node.children.length) {
            this.inOrder(node.children[0]);
            console.log(node.person);
            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        } else {
            console.log(node.person);
        }
    }
}

const familyTree = new NaryTree();

const yo = new Person("Christian", "22/12");
const miPapa = new Person("Jairo", "26/12");
const miMama = new Person("Diana", "17/08");
const miAbuela = new Person("Nora", "24/08");
const miBisabuela = new Person("Diva", "NaN/NaN");
const miBisabuelo = new Person("No se", "NaN/NaN");

familyTree.insert(yo);
familyTree.insert(miPapa, yo);
familyTree.insert(miMama, yo);
familyTree.insert(miAbuela, miMama);
familyTree.insert(miBisabuela, miAbuela);
familyTree.insert(miBisabuelo, miAbuela);

console.log("PreOrder:");
familyTree.preOrder();
console.log("PostOrder:");
familyTree.postOrder();
console.log("InOrder:");
familyTree.inOrder();
