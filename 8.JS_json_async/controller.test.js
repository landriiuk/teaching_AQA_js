import assert from "assert";
import test from "node:test";
import { UserController } from "./controller.js";

test("Check if user id is 1", async () => {
  const id = 1;
  const userController = new UserController("https://jsonplaceholder.typicode.com");
  const user = await userController.getUserById(1);

  console.log(user.id);
  assert.strictEqual(user.id, id, "it should return 1");
});

test("Send post", async () => {
  const body = {
    title: "foo",
    body: "bar",
    userId: 1
  };
  const userController = new UserController("https://jsonplaceholder.typicode.com");
  const post = await userController.createResource(body);
  assert.strictEqual(post.title, body.title, "Check if equal");
});
