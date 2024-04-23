const { default: mongoose } = require("mongoose");
const Server = require("./src/server");
require("dotenv").config();
const { URLMONGODB } = process.env;

const PORT = 3001;
Server.listen(PORT, () => {
  console.log(`Server on port 3001`);
});

//Mongo DB
const connectionMongoose = async () => {
  await mongoose.connect(URLMONGODB).catch((err) => console.log(err));
  console.log(`Database connected to MongoDB`);
};

connectionMongoose();