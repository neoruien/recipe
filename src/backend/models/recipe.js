import mongoose, { Schema } from 'mongoose';

// Define recipe schema
var recipeSchema = new Schema({
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
});

// Export Mongoose model
export default mongoose.model('recipe', recipeSchema);