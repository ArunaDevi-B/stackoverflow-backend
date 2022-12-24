const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url =process.env.Mongo_URL;
console.log(url)

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("Mongodb connected successfully"))
    .catch((error) => console.log("Error: ", error));
};
