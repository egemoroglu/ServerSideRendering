const connection = require('./connection');

class Database {
    // Select All Items
    selectAll() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM todo", (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Select Undone Items
    selectUndone() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM todo WHERE done = false", (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Select Done Items
    selectDone() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM todo WHERE done = true", (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Add Task
    addTask(title, assignee) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todo (title, assignee, done) VALUES ($1, $2, $3)";
            const values = [title, assignee, false];
            connection.query(query, values, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Update Task
    updateTask(id, title) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE todo SET title = $1 WHERE id = $2", [title, id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Delete Task
    deleteTask(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM todo WHERE id = $1', [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Mark Undone Task as Done
    markDone(id) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE todo SET done = true WHERE id = $1", [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    // Mark Done Task as Undone
    markUndone(id) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE todo SET done = false WHERE id = $1", [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }
}

module.exports = new Database();
