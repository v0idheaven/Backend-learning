// import express from "express";

// import { MongoClient } from "mongodb";

// const url = "mongodb://localhost:27017/";

// const PORT = 3000;

// const app = express();

// const client = new MongoClient(url);
// const dbServer = await client.connect();
// const testDB = dbServer.db("test");
// console.log("Connected to MongoDB");

// async function postData() {
//     // get the collection
//     const userCollection = testDB.collection("user");

//     await userCollection.insertOne({
//         name: "varun",
//     });
// }

// await postData();

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import mongoose, { Schema } from "mongoose";

const PORT = 3000;
const app = express();

app.use(express.json());

const uri =
  "mongodb://v0idheaven:Varun321@ac-f3jlmyx-shard-00-00.8sn1nyg.mongodb.net:27017,ac-f3jlmyx-shard-00-01.8sn1nyg.mongodb.net:27017,ac-f3jlmyx-shard-00-02.8sn1nyg.mongodb.net:27017/?ssl=true&replicaSet=atlas-1362he-shard-0&authSource=admin&appName=Cluster0/test";
const uri2 =
  "mongodb+srv://v0idheaven:Varun321@cluster0.8sn1nyg.mongodb.net/?appName=Cluster0/test2";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// const db1 = mongoose.createConnection(uri);
// const db2 = mongoose.createConnection(uri2);

// Creating Schema
const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    address: String,
  },
  {
    timestamps: true,
  },
);

// Model
const User = mongoose.model("User", userSchema);

app.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    
    const data = await User.findById(userId);

    res.status(200).send({
        message: "Success",
        data
    })

    res.send("Hello World");
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", async (req, res) => {
  try {
    const userData = req.body;
    const data = await User.insertOne(userData);

    res.status(201).send({
        message: "User created successfully",
        data
    })

  } catch (err) {
    console.log(err);
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updationData = req.body;
    const data = await User.findByIdAndUpdate(userId, updationData, { new: true });

    res.status(200).send({
        message: "User updated successfully",
        data
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/user", async (req, res) => {
  try {
    const userId = req.query.id;
    const data = await User.findByIdAndDelete(userId);

    res.status(200).send({
        message: "User deleted successfully",
        data
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
