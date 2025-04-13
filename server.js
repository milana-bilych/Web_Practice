const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library',
  password: '9euH001d',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/books', async (req, res) => {
  const { title, author, publisher_year } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO books (title, author, publisher_year) VALUES ($1, $2, $3) RETURNING *',
      [title, author, publisher_year]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/books', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Книга не знайдена' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, publisher_year } = req.body;
  try {
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, publisher_year = $3 WHERE id = $4 RETURNING *',
      [title, author, publisher_year, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Книга не знайдена' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Книга не знайдена' });
    }
    res.json({ message: 'Книга видалена' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Сервер працює на http://localhost:${port}`);
});
