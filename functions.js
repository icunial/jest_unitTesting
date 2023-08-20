const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (value) => value,
  createUser: () => {
    const user = { firstName: "Name", lastName: "Lastname" };
    return user;
  },
  fetchUser: () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.data)
      .catch((err) => "Error");
  },
};

module.exports = functions;
