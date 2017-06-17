const {mongoose} = require('./../server/db/mongoose');
const {Info} = require('./../server/models/info');

var item_name = "lays";

Info.find({
    item: item
}).then((infos) => {
    var arr = []
    var idx = item.indexOf(item_name);
    arr.push(infos.name, infos.price[idx], infos.address[idx]);
    console.log('Infos', JSON.stringify(arr));
});
