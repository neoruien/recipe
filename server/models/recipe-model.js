const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
    {
        title: {
            type: String,
            unique: true,
        },
        image: String,
        type: String,
        duration: Number,
        difficulty: String,
        quantity: Number,
        ingredients: {
            type: Array,
            default: []
        },
        instructions: {
            type: Array,
            default: []
        },
    }
)

module.exports = mongoose.model('recipes', Recipe)