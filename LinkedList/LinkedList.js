 
// Import a JS file, you use require keyword (ES5)
const Node = require('./Node');

let node1 = new Node(10);

let node2 = new Node(20);

let node3 = new Node(30);

let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

/*
function printNodeValues(head) {
    let str = "";
    while(head !== null){
        str = str + head.val + " -- > "
        head = head.next;
    }

    console.log(str);
}

printNodeValues(node1);

function countNodes(head) {
    let count = 0;
    while(head !== null){
        //str = str + head.val + " -- > "
        count++;
        head = head.next;
        
    }
     return count;
}
console.log(countNodes(node1));

function addNewNode(head, val){
    let current = head;
    let newNode = new Node(val);

    while(true){
        current = current.next;
        if(current.next === null){
            current.next = newNode;
            break;
        }
    }

    printNodeValues(head);

}

console.log(countNodes(node1));

addNewNode(node1, 50);
*/


// Homework Quesiton 1

// Write a function that deletes the node in the last index
// console.log(arr.pop()); // 5
// console.log(arr); // [1, 2, 3, 4]

function deleteNodeLastIndex(head) {
    let current = head;
    //let newNode = new Node(val);
    // delete the last node
    while (true) {
        current = current.next;
        if (current.next === null) {
            current.next = head.pop;
            break;
        }
    }
    PrintNodeValue(head)
}
console.log(deleteNodeLastIndex(node1));

// Write a function that deletes the node at the given index

function deleteNodeAtIndex(head, n) {
    // delete the node at n index

    // printNodeValue(head)
}



// Write a function that deletes the node at the given index

function addNodeAtIndex(head, n, val) {
    // add the node at n index

    // printNodeValue(head)
}


// printNodeValue(node1, 2, 25);
// 10 -> 20 -> 30 -> 40 -> null

// 10 --> 20 --> 25 --> 40 --> null