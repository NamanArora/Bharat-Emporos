//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Information', (err, db) => {
    if(err){
        return console.log('unable to connect');
    }
    console.log('Connected to server');

    db.collection('vendor').find({item: "lays"}).toArray().then((docs) => {
        console.log('Vendor');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch', err);
    });

    //db.close();

});
