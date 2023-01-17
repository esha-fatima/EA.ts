import mongoose from "mongoose";
const { MongoClient } = require("mongodb");
export const database = async () => {
  const uri = process.env.URI;
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    let databasesList = await client.db().admin().listDatabases();
    let x = client.db("Users");
    let f = "errr";
    x.collection("testing")
      .find({ message: "hellows" })
      .toArray(function (err: any, res: any) {
        console.log(res);
        f = res;
      });
    console.log(x.collection("testing").find({ message: "hellows" }).result);
    console.log("Databases:", databasesList.databases);
    //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    // Make the appropriate DB calls
    return f;
  } catch (e) {
    console.error(e);
  }
};
