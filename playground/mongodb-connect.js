//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Information', (err, db) => {
    if(err){
        return console.log('unable to connect');
    }
    console.log('Connected to server');

    db.collection('vendor').insertOne({
        name: "ujjwal",
        item: ["lays", "shirts", "pants", "cup"],
        price: [30,40,50,60],
        address: "raj nagar, delhi",
        photo: ["https://www.google.com/lays", "https://www.google.com/shirts", "https://www.google.com/pants", "https://www.google.com/cup"]
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
