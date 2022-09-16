const mongoose = require('mongoose');

const url = "mongodb://Aruna:Aruna123@ac-siqno8b-shard-00-00.ndwq8ot.mongodb.net:27017,ac-siqno8b-shard-00-01.ndwq8ot.mongodb.net:27017,ac-siqno8b-shard-00-02.ndwq8ot.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-vuhk9w-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url).then((res) => console.log("Mongodb connected successfully")).catch((error) => console.log('Error: ', error))
}