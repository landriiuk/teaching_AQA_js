console.log("your code before");
throw new Error("our err");
console.log("your code after");

try {
  console.log("your code before");
  // throw new Error("our err");
  console.log("your code after");
} catch (error) {
  console.log("message" + error.message);
} finally {
  console.log("test 12345");
}
console.log("your code after");
