// Imports
const express = require("express");
const cors = require("cors");
const pool = require("./postgres/connection/db.js");

// Initialize Express
const app = express();

// Use middleware
app.use(cors());
app.use(express.json());

/**
 * Routes
 */
const apiRoute = "/api/todos";
const apiRouteWithID = apiRoute + "/:id";
// Create a new todo
app.post(apiRoute, async (req, res) => {
  try {
    const { task } = req.body;
    const id = new Date().getTime();
    const { done } = req.body;

    const newTodo = await pool.query(
      "insert into todo_table(id, task, done) values($1, $2, $3) returning *",
      [id, task, done]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Fetch all todos
app.get(apiRoute, async (req, res) => {
  try {
    const fetchAllTodos = await pool.query("select * from todo_table");
    res.json(fetchAllTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Fetch a single todo
/*app.get(apiRouteWithID, async (req, res) => {
  try {
    const { id } = req.params;
    const fetchTodo = await pool.query(
      "select * from todo_table where id = $1",
      [id]
    );

    res.json(fetchTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

// Update a single todo
/*app.put(apiRouteWithID, async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const updateTodo = await pool.query(
      "update todo_table set task = $1 where id = $2",
      [task, id]
    );

    res.json("Todo was updated successfully");
  } catch (err) {
    console.error(err.message);
  }
});*/

// Delete a single todo
app.delete(apiRouteWithID, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "delete from todo_table where id = $1",
      [id]
    );

    res.json(`Todo with ID: ${id} was deleted successfully`);
  } catch (err) {
    console.error(err.message);
  }
});

// Run the server and listen for requests
const port = 5000;
app.listen(port, (error) => {
  if (error) throw error;

  console.log(`Server running on http://127.0.0.1:${port}`);
});

// Based on PERN (PostgreSQL, Express.js, React.js, Node.js) Stack tutorial by freeCodeCamp. Link: https://youtu.be/ldYcgPKEZC8
