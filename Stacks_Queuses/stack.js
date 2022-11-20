// FILO - First in Lasr Out
// LIFO - Last in First Out

let stack = [];

// POP = 配列の最後の要素を取り除き、呼び出し元にその値を返します
// PUSH = 配列の末尾に 1 つ以上の要素を追加することができます。

function push(val) {
  stack.push(val);
}

function getStack() {
  return stack;
}

function pop() {
  stack.pop();
}

push(10);
push(20);
push(30);
push(40);

pop();

console.log(getStack());