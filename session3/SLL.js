class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertTail(data){
        let newNode = new Node(data);
        if(this.head == null){
            // check if the linked list is empty
            this.head = newNode;
        } else {
            let tail = this.head;

            while(tail.next != null){
                tail = tail.next;
            }

            // tail.next is null
            tail.next = newNode;
        }
    }

    toArray(){
        let nodes = [];

        let thead = this.head;

        while(thead!=null){
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    insertHead(data){
        // create a new node with the data passed by user
        let newNode = new Node(data);

        // update the newNode next with the current head value
        newNode.next = this.head;

        // update the head to point to the newNode
        this.head = newNode;
    }

    deleteHead(){
        // move the current head to the next node if the linked list is not empty

        // if the linked list is empty, do nothing
    }

    deleteTail(){
        // if the list is empty
            // do nothing

        // if the list has one node
            // update the current head with null

        // if the list is not empty
            // assign the tail pointer to the head node

            // move the tail pointer to the previous node of the tail node

            // replace the tail pointer next value with null
    }

    length(){
        // returns the number of nodes in the linked list
        
    }
}

let list = new LinkedList();

list.insertTail(25);
list.insertTail(34);
list.insertTail(16);
list.insertHead(17);

console.log(list.toArray());

/*
    list = LinkedList {
        head: Node {
            data: 25,
            next: null
        }
    }
*/
