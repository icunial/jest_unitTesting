const isAnagram = require("./anagrams");

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("cinema is an anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});
