// define the structure of a node
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// create a node object
let node1 = new Node(25);

let node2 = new Node(34);

node1.next = node2;

// console.log(node1);
// console.log(node2);

class LinkedList {
    constructor(){
        this.head = null;
    }
}

let list = new LinkedList();

list.head = node1;

console.log(list);

/*
    list = LinkedList {
        head: Node {
            data: 25,
            next: Node {
                data: 34,
                next: null
            }
        }
    }
*/

/*
    node1 = Node {
        data: 25,
        next: Node {
            data: 34,
            next: null
        }
    }

    node2 = Node {
        data: 34,
        next: null
    }
*/