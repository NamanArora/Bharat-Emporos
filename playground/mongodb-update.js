//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Information', (err, db) => {
    if(err){
        return console.log('unable to connect');
    }
    console.log('Connected to server');

    db.collection('vendor').findOneAndUpdate({
        _id: new ObjectID('5944ec701c94a9356c08a3fb')
    }, {
        $set: {
            item: ["lays","shirts"]
        }
    }, {
        returnOriginal: ["lays","shirts","pants","cup"]
    }).then((result) => {
        console.log(result);
    });

    //db.close();

});
