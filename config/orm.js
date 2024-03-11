const connection = require('./connection');

//Query Implementations
const orm = {
    //Select All Items
    selectAll: function(cb){
        connection.query("SELECT * FROM todo", function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    },
    //Select Undone Items
    selectUndone: function(cb){
        connection.query("SELECT * FROM todo WHERE done = false", function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    },
    //Select Done Items
    selectDone: function(cb){
        connection.query("SELECT * FROM todo WHERE done = true", function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    },
    //Add Task
    addTask: function(title, assignee, cb){
        const query = "INSERT INTO todo (title, assignee, done) VALUES ($1, $2, $3)"
        const values = [title, assignee, false];
        connection.query(query, values, function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    },
    //Update Task
    updateTask: function(id, title,cb){
        connection.query(`UPDATE todo SET title = $1 WHERE id = $2`, [title, id], function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    },
    //Delete Task
    deleteTask: function(id, cb) {
        connection.query('DELETE FROM todo WHERE id = $1',[id], function(err, result) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, result);
            }
        });
    },
    //Mark Undone Task as Done
    markDone: function(id, cb){
        connection.query(`UPDATE todo SET done = true WHERE id = $1`, [id], function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    },
    //Mark Done Task as Undone
    markUndone: function(id, cb){
        connection.query(`UPDATE todo SET done = false WHERE id = $1`, [id], function(err, result){
            if(err) cb(err, null);
            cb(null, result);
        });

    }
    
};

module.exports = orm;