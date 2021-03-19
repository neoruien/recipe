import express, { Router } from 'express';
// Import index action from recipes controller
import { index } from './controllers/recipes';

// Initialize the router
const router = require("express").Router();

// Handle /recipes.json route with index action from recipes controller
router.route('/recipes.json')
  .get(index);

export default router;