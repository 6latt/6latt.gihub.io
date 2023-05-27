const fs = require("fs");

exports.handler = async (event, context) => {
  try {
    const images = fs.readdirSync("./portfolio");
    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
