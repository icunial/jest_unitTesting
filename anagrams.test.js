const isAnagram = require("./anagrams");

// typeof isAnagram is function
test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

// checks the correct solution -> toBeTruthy
test("cinema is an anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("Dormitory is an anagram of dirty room##", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

// toBeFalsy
test("Hello is not an anagram of Aloha", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
