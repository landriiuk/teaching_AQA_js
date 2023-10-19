export class UserController {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getUserById(id) {
    const request = await fetch(`${this.baseUrl}/users/${id}`);
    const result = request.json();
    return result;
  }

  async createResource(body) {
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    const request = await fetch(`${this.baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return request.json();
  }
}
// https://jsonplaceholder.typicode.com
