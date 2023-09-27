const express = require('express');
const router = express.Router();
const postgresController = require('../controllers/pgController');

// Create a new item in PostgreSQL
router.post('/items', postgresController.createItem);

// Get all items from PostgreSQL
router.get('/items', postgresController.getAllItems);

// Get an item by ID from PostgreSQL
router.get('/items/:id', postgresController.getItemById);

// Update an item by ID in PostgreSQL
router.put('/items/:id', postgresController.updateItemById);

// Delete an item by ID in PostgreSQL
router.delete('/items/:id', postgresController.deleteItemById);

module.exports = router;