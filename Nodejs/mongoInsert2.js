const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'socialApp';


async function connectToServer() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db(dbName);
  console.log("Connected successfully to server");
  const collection = db.collection('users');
  const result = await collection.insertOne({ name:'FYND' , address:'Mumbai' });
  console.log(`Inserted ${result.insertedCount} document into the collection`);
  client.close();
}

connectToServer();