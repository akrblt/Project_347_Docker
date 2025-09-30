const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());

const DB_HOST = process.env.MYSQL_HOST || "db";
const DB_USER = process.env.MYSQL_USER || "appuser";
const DB_PASS = process.env.MYSQL_PASSWORD || "apppass";
const DB_NAME = process.env.MYSQL_DATABASE || "appdb";

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Healthcheck
app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "unhealthy", error: err.message });
  }
});

// GET items
app.get("/items", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, name FROM items");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST items
app.post("/items", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "name required" });
  try {
    const [result] = await pool.query("INSERT INTO items (name) VALUES (?)", [
      name,
    ]);
    res.status(201).json({ id: result.insertId, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app; // pour les tests
