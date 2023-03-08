var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");
  let myobj = { name: "Fynd", address: "Mumbai" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});




