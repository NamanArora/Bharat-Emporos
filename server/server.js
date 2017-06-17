var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Info} = require('./models/info');

var app = express();

app.use(bodyParser.json());

app.post('/postvendor', (req, res) => {
  var info = new Info({
    name: req.body.name,
    item: req.body.item,
    price: req.body.price,
    photo: req.body.photo,
    address: req.body.address,
    contact: req.body.contact
  });

  info.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/getall', (req, res) => {
  Info.find().then((infos) => {
    res.send(infos);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/getvendor', (req, res) => {
    var jsonarr = [];
    Info.find({
        item: req.body.item
    }).then((info) => {
        info.forEach(func);
        function func(every_info){
            var idx = every_info.item.indexOf(req.body.item);
            jsonarr.push({"name":every_info.name, "price":every_info.price[idx], "contact":every_info.contact, "address":every_info.address});
        }
        res.send(JSON.stringify(jsonarr));
    });
});

// app.post('/update', (req, res) => {
//     var jsonarr = [];
//     Info.find({
//         contact: req.body.contact
//     }).then((info) => {
//         info[0].item.push(req.body.item);
//         info[0].price.push(req.body.price);
//
//     });
// });

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
