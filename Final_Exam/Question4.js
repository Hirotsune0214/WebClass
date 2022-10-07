// let numList = reverse("awesome"); //emosewaで反対に出来る
// console.log(numList);*/

function reverse (str) {
  if (str === "") {
      return "";
  } else {
      return reverse(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverse("awesome")); // "emosewa"
console.log(reverse("rithmschool")) // "loohcsmhtir"
// let reverseStringIs = reverse("awesome", "rithmschool")
// console.log(reverseStringIs)