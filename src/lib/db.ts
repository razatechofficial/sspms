import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
// checking if the database is already connected
  if (connectionState === 1) {
    console.log("Already Connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }


// Connect to the database
  try {
    mongoose.connect(MONGODB_URI!, {
// write the database name
      dbName: "sspms",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (error: any) {
    console.log("Error: ", error);
    throw new Error("Error: ", error);
  }
};

export default connect;
