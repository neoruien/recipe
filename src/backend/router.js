import express, { Router } from 'express';
// Import index action from recipes controller
import { index } from './controllers/recipes';

// Initialize the router
const router = Router();

// Handle /recipes.json route with index action from recipes controller
router.route('/recipes.json')
  .get(index);

// module.exports = app => {
//   const recipes = require("./controllers/recipes.js");

//   // Create a new Recipe
//   router.post("/", recipes.create);

//   // Retrieve all Recipe
//   router.get("/", recipes.findAll);

//   // Retrieve all published Recipe
//   router.get("/published", recipes.findAllPublished);

//   // Retrieve a single Recipe with id
//   router.get("/:id", recipes.findOne);

//   // Update a Recipe with id
//   router.put("/:id", recipes.update);

//   // Delete a Recipe with id
//   router.delete("/:id", recipes.delete);

//   // Create a new Recipe
//   router.delete("/", recipes.deleteAll);

//   app.use('/api/recipes', router);
// };

export default router;