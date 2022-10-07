function main() {
  let a = 1;
  let b = 2;

  a = a + b;
  b = a - b;
  a = a - b; 

  console.log("After swapping values are" + "a is", a + "b is", b);


return 0;
}