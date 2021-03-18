// Hardcode for the sake of simplicity
// const ingredients = [ 'Tomato', 'Cheese', 'Lettuce' ];
const ingredients = [
  {id: 1, name: 'Tomato', quantity: '2pc', checked: false},
  {id: 2, name: 'Chilli Flakes', quantity: '10g', checked: false},
  {id: 3, name: 'Salt', quantity: '2tbsp', checked: false}
];
const instructions = [
  {id: 1, name: 'Cook'},
  {id: 2, name: 'Bake'},
  {id: 3, name: 'Fry'}
];

export const finishedCookingCount = 0;

export const recipes = [
  {
    id: 1,
    title: 'Pasta Salad',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/italian-pasta-salad-14-1200.jpg',
    ingredients,
    instructions,
    type: 'Healthy',
    duration: '30 min',
    difficulty: 'Easy',
    quantity: '6'
  },
  {
    id: 2,
    title: 'Pancakes with Blueberry Syrup',
    image: 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg',
    ingredients,
    instructions,
    type: 'Breakfast & Brunch',
    duration: '15 min',
    difficulty: 'Easy',
    quantity: '6'
  },
  {
    id: 3,
    title: 'Egg Fried Rice',
    image: 'https://www.carolinescooking.com/wp-content/uploads/2016/01/vegetable-egg-fried-rice-photo-1.jpg',
    ingredients,
    instructions,
    type: 'Rice',
    duration: '20 min',
    difficulty: 'Easy',
    quantity: '2'
  },
  {
    id: 4,
    title: 'Spaghetti Bolognese',
    image: 'http://wallflowerkitchen.com/wp-content/uploads/2016/08/Explore-Asian-Ratatouille-Spaghetti-Vegan-Gluten-Free-5-735x1103.jpg',
    ingredients,
    instructions,
    type: 'Pasta',
    duration: '45 min',
    difficulty: 'Medium',
    quantity: '1'
  },
  {
    id: 5,
    title: 'Veg Mushroom Burger with Truffle Porcini Mayo',
    image: 'http://static1.squarespace.com/static/58d08c6ad482e92f5e34a8df/t/5f11c00b81b7367d75137a44/1594998814921/porcini-truffle-burgers-rustic-board.jpeg?format=1500w',
    ingredients,
    instructions,
    type: 'Burger',
    duration: '1 h 10 min',
    difficulty: 'Hard',
    quantity: '6'
  },
];