const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String,
        required: true
    },

    label: {
        type: String,
        default: ''
    },

    price: {
        type: Number,
        required: true
    },

    descriprion: {
        type: String,
        required: true
    },

    featured: {
        type: Boolean,
        default: false
    }
})


var Promotions = mongoose.model('Promotion', promotionSchema)

module.exports = Promotions