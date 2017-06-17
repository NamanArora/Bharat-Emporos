var mongoose = require('mongoose');

var Info = mongoose.model('Info', {
    name:{
        type: String,
        trim: true,
        minlength: 2
    },
    item:{
        type: Array,
        default: null
    },
    price:{
        type: Array,
        default: null
    },
    photo:{
        type: Array,
        default: null
    },
    address:{
        type: String,
        trim: true,
        required: true
    },
    contact:{
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 1
    }
});

module.exports = {Info};
