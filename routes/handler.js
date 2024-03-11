const express = require('express');
const router = express.Router();
const orm = require('../config/orm');

//Route Index
router.get('/', (req, res) => {
    const id = req.params.id;
    orm.selectAll(function(error, data){
        if(error) throw error;
        res.render('index', {
            data: data.rows,
            title: 'TODO List',
            addNewTask: "Add new task",
        });
    });
})

//Route Undone List
router.get('/undone', (req, res) => {
    orm.selectUndone(function(error, data){
        if(error) throw error;

        res.render('undone', {
            data: data.rows,
            title: 'Undone TODOS',
            addNewTask: "Add New task"
        });
        console.log(data);
    });
})

//Route Done List
router.get('/done', (req, res) => {
    orm.selectDone(function(error, data){
        if(error) throw error;

        res.render('done', {
            data: data.rows,
            title: 'Done TODOS',
            addNewTask: "Add New task"
        });
        console.log(data);
    });
})

//Route Add Task
router.get('/addTask', (req, res) => {
    res.render('addTask', {
    });
})

//Route Update Task
router.get('/updateTask/:id', (req, res) => {
    const id = req.params.id;
    res.render('updateTask', {
        id
    }      
    );
})

//Add Task
router.post('/add', (req, res) => {
    const title = req.body.title;
    const assignee = req.body.assignee;

    orm.addTask(title, assignee, function(error, data){
        if(error) throw error;

    res.redirect('/');
    });
})

//Delete Task
router.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    orm.deleteTask(id, function(error, data){
        if(error) throw error;
        res.redirect('/');
    });
})

//Update Task
router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    orm.updateTask(id, title, function(error, data){
        if(error) throw error;

    res.redirect('/');
    });
    
})

//Mark Task as Done
router.post('/markDone/:id', (req, res) => {
    const id = req.params.id;
    orm.markDone(id, function(error, data){
        if(error) throw error;
     
        res.redirect('/');
    });
})

//Mark Task as Undone
router.post('/markUndone/:id', (req, res) => {
    const id = req.params.id;
    orm.markUndone(id, function(error, data){
        if(error) throw error;

        res.redirect('/');
            
    });
})

module.exports = router;