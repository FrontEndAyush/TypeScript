let name: string = "ayush";
function addTwo(num: number): number {
  return num;
}
addTwo(5);
const sumOfTwo = (num: number): number => {
  return num + num;
};
let array = [1, 2, 3, 4, 5, 6, "string"]; // when you wrote all the values in integar typescript will automatically assign number to it and same goes for the string.

let output = sumOfTwo(2);
console.log(output);

function throwError(message: string): never {
 throwError(message)
}
throwError("getting error by mistake.");
export {};
