// fetchData.test.js
const fetchData = require("../src/fetchData");

test("fetchData should return data from the API", async () => {
  const id = 1;
  //Run the function
  const data = await fetchData(id);

  //Test for Keys
  expect(data).toHaveProperty("userId");
  expect(data).toHaveProperty("id");
  expect(data).toHaveProperty("title");
  expect(data).toHaveProperty("body");
});
