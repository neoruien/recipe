import mongoose from 'mongoose';
import Recipe from './models/recipe';

const recipes = [
  {
    title: 'Pasta Salad',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/italian-pasta-salad-14-1200.jpg',
    type: 'Healthy',
    duration: 30,
    difficulty: 'Easy',
    quantity: 6
  },
  {
    title: 'Pancakes with Blueberry Syrup',
    image: 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg',
    type: 'Breakfast & Brunch',
    duration: 15,
    difficulty: 'Easy',
    quantity: 6
  },
  {
    title: 'Egg Fried Rice',
    image: 'https://www.carolinescooking.com/wp-content/uploads/2016/01/vegetable-egg-fried-rice-photo-1.jpg',
    type: 'Rice',
    duration: 20,
    difficulty: 'Easy',
    quantity: 2
  },
  {
    title: 'Spaghetti Bolognese',
    image: 'http://wallflowerkitchen.com/wp-content/uploads/2016/08/Explore-Asian-Ratatouille-Spaghetti-Vegan-Gluten-Free-5-735x1103.jpg',
    type: 'Pasta',
    duration: 45,
    difficulty: 'Medium',
    quantity: 1
  },
  {
    title: 'Veg Mushroom Burger with Truffle Porcini Mayo',
    image: 'http://static1.squarespace.com/static/58d08c6ad482e92f5e34a8df/t/5f11c00b81b7367d75137a44/1594998814921/porcini-truffle-burgers-rustic-board.jpeg?format=1500w',
    type: 'Burger',
    duration: 75,
    difficulty: 'Hard',
    quantity: 6
  },
];

// Connect to MongoDB
mongoose.connect(
    'mongodb://localhost/recipes',
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    // function(err) { console.log("mongoDB connected", err); }
);

// Go through each recipe
recipes.map(data => {
  // Initialize a model with recipe data
  const recipe = new Recipe(data);
  // and save it into the database
  recipe.save();
});