import mongoose from "mongoose";

const mongo_uri = "mongodb://localhost:27017/techstore";

const connect = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("connected to db");
  } catch (error) {
    console.error(error);
  }
};

export default connect;
