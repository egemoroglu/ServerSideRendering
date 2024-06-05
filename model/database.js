const connection = require('./connection');

// Query Implementations
const database = {
    // Select All Items
    selectAll: function() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM todo", (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Select Undone Items
    selectUndone: function() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM todo WHERE done = false", (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Select Done Items
    selectDone: function() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM todo WHERE done = true", (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Add Task
    addTask: function(title, assignee) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todo (title, assignee, done) VALUES ($1, $2, $3)";
            const values = [title, assignee, false];
            connection.query(query, values, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Update Task
    updateTask: function(id, title) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE todo SET title = $1 WHERE id = $2", [title, id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Delete Task
    deleteTask: function(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM todo WHERE id = $1', [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Mark Undone Task as Done
    markDone: function(id) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE todo SET done = true WHERE id = $1", [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },

    // Mark Done Task as Undone
    markUndone: function(id) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE todo SET done = false WHERE id = $1", [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }
};

module.exports = database;
