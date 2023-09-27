const express = require('express');
const router = express.Router();
const mongoController = require('../controllers/mongoDBController');

// Create a new item
router.post('/items', mongoController.createItem);

// Get all items
router.get('/items', mongoController.getAllItems);

// Get an item by ID
router.get('/items/:id', mongoController.getItemById);

// Update an item by ID
router.put('/items/:id', mongoController.updateItemById);

// Delete an item by ID
router.delete('/items/:id', mongoController.deleteItemById);

module.exports = router;