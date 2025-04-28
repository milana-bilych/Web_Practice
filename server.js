const express = require('express');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/api/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error retrieving students');
    }
});

app.get('/api/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error retrieving student');
    }
});

app.post('/api/students', async (req, res) => {
    const { name, age, major } = req.body;
    if (!name || !age || !major) {
        return res.status(400).send('Missing fields');
    }
    try {
        const result = await pool.query(
            'INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *',
            [name, age, major]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error creating student');
    }
});

app.put('/api/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, major } = req.body;
    try {
        const result = await pool.query(
            'UPDATE students SET name = $1, age = $2, major = $3 WHERE id = $4 RETURNING *',
            [name, age, major, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error updating student');
    }
});

app.delete('/api/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error deleting student');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
