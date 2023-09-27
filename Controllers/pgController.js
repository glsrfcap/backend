const pool = require('../database/pgConnection'); // Import your PostgreSQL connection pool

// Create a new item in PostgreSQL
exports.createItem = async (req, res) => {
  const { name, description } = req.body;

  try {
    const query = 'INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *';
    const values = [name, description];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all items from PostgreSQL
exports.getAllItems = async (req, res) => {
  try {
    const query = 'SELECT * FROM items';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get an item by ID from PostgreSQL
exports.getItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const query = 'SELECT * FROM items WHERE id = $1';
    const values = [itemId];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an item by ID in PostgreSQL
exports.updateItemById = async (req, res) => {
  const itemId = req.params.id;
  const { name, description } = req.body;

  try {
    const query = 'UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *';
    const values = [name, description, itemId];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an item by ID in PostgreSQL
exports.deleteItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const query = 'DELETE FROM items WHERE id = $1 RETURNING *';
    const values = [itemId];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};