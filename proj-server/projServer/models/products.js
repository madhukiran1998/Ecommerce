const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    camera:  {
        type: String,
        required: true
    },
    screen:  {
        type: String,
        required: true
    },
    ram:  {
        type: String,
        required: true
    },
    chip:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var productSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    details:[commentSchema]
}, {
    timestamps: true
});

var Products = mongoose.model('Product', productSchema);

module.exports = Products;