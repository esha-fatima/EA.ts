import mongoose, {ConnectOptions} from "mongoose";
const { MongoClient } = require("mongodb");
import StudentModel from "../models/Student";
 
const uri = process.env.URI;

export const database = async () => {
  const uri = process.env.URI;
  console.log("uri is", uri)
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
    //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    // Make the appropriate DB calls
    await addStudent()
    return f;
  } catch (e) {
    console.error(e);
  }
};

export const addStudent = async()=>{
  mongoose.connect(("mongodb+srv://EshAhmed:Rapunzel26Ra@cluster0.okvrpxs.mongodb.net/Users?retryWrites=true&w=majority"),
  { 
    useNewUrlParser : true,
    useUnifiedTopology: true } as ConnectOptions).then(()=>{

      const newStudent = new StudentModel({

        fullName: "Esha Fatima",
        rollNumber: "23100201",
      });
      newStudent.save((e)=>{
        if(e){
          console.log(e)
        }
      })

    })

          

        
    
  
}


