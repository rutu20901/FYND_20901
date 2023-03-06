//var mongoClient = require("mongodb").mongoClient;
//require("dotenv").config();
//const url = "mongodb://localhost:8083";
//const client = new mongodb.MongoClient(url);

/**
 * connecting to mongodb and running find queries on socialApp db
 */
/*
async function run(){
    try{
        //connecting to client:sending connection request
        await client.connect();//wait here unless session opens
        const UserCollection = client.db("socialApp").collection("users");
        //finding the user collections
        const cursor = UserCollection.find({});
        //iterating over the cursor.
        await cursor.forEach(docs => {
            console.log(docs);
        });

    }catch (e) {
        console.error(e);
    } finally {
        await client.close();//wait
    }
}



const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("socialApp");

        let collection = db.collection('users');

        let query = { name: 'Volkswagen' }

        let res = await collection.findOne(query);
console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

await findOne();*/

/*

let mongoClient =require("mongodb").mongoClient;
const url = 'mongodb://localhost:27017';
(async()=>{
    let client  = await mongoClient.connect(url,{useNewUrlParser:true});
    let db = client.db("socialApp");
    try{

    }
})

*/

