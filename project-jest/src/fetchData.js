const axios = require("axios");

async function fetchData() {
  const id = process.argv[2];
  const json_source = `http://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await axios.get(json_source);
  return response.data;
}

module.exports = fetchData;
