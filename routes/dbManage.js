const mongo= require("mongodb");
const MongoClient = mongo.MongoClient;

function datab(){
 const db={};
 db.connect=()=>{
     const url = "mongodb://localhost:27017"
     const client = new MongoClient(url)
     return client.connect();
 };
 db.getData=()=>{
     return db.connect().then(client=>{
         const data = client.db("pruebaJ").collection("horarios");
         return data.find({}).toArray();

     });
 };

    db.saveData = (datos) => {
        return db.connect().then(client => {
            const data = client.db("pruebaJ").collection("horarios");
            return data.insertOne(datos);
        });
    };
 return db;
}
module.exports= datab