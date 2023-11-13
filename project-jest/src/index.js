const fetchData = require("./fetchData");

const runScript = async () => {
  try {
    const data = await fetchData();
    console.log("Data from the API:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

runScript();
