//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Information', (err, db) => {
    if(err){
        return console.log('unable to connect');
    }
    console.log('Connected to server');

    // delete Many
    db.collection('vendor').deleteMany({address:"raj nagar, delhi"}.then((result) => {
        console.log(result);
    }))
    // delete One

    // Find and delete

    //db.close();

});
