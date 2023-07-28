function log(...args){
    console.log(...args);
}

// Data Structures

/*
    Arrays Vs Strings

    Arrays
        - Data Structure (Built-In)
        - Indexing: first element stored at the first index 0
        - all the other elements are stored in the consecutive memory locations
        - accessing: numbers[index] -> element at that index (Random access)
        - Insertion: last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods:
            * push - pushes the element to the end of the array
            * pop - removes the element from the end of the array
            * unshift - inserts the element to the beginning of the array
            * shift - removes the element from the beginning of the array
            * forEach
            * map
            * sort
            * reduce
            * filter
            * includes
            * join
            * length - property
*/

// let age = 25;

// console.log(age);

// let ages = [25, 23, 19, 45, 32];
         //[0] [1] [2] [3] [4]

// log(ages);

// log(ages[0]);

// log(ages[4]);

/*


let ages = [25, 23, 19, 45, 32];
        // [0] [1] [2] [3] [4]

ages = [25, 23, 19, 45, 32,  ];
    // [0] [1] [2] [3] [4] [5]

ages = [18, 25, 23, 19, 45, 32]
       [0] [1] [2] [3] [4] [5]

ages[0] = 18

O(N) -> N: number of elements
*/

// ages[0] = 18
// // push or unshift or splice
// ages.push(37);
// ages.unshift(12);
// ages.splice(2, 0, 18);

// log(ages);

// let fruit = 'apple';
// let fruit = "apple";
// let fruit = `apple`;
// let fruit = new String('apple');

// log(fruit);

// log(fruit[4]);

// Strings are immutable
// fruit[1] = 'm';

// fruit = fruit.slice(0, 1) + 'm' + fruit.slice(2, );

// log(fruit);

/*
    Linked List

    Abstract Data type: User defined data type - user defines its behaviour, data, operations

    - Types
        1. Singly Linked List
        2. Doubly Linked List
        3. Circularly Linked List

    - Singly Linked List
    - To store multiple elements
    - Memory: Non-Consecutive
    - SLL: Chain of nodes/objects from different memory locations linked/connected to one another
    - Every node has a structure of two fields:
        - data: actual data we want to store inside the memory
        - address: address of the next node in the memory
    - head pointer: points to the start node of the linked list
    - head: null -> signifies that the linked list is empty
    - tail node: node whose next/address field points to the value null
    - Accessing: Linear Access
*/