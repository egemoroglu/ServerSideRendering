const express = require('express');
const router = express.Router();
const todoService = require('../controller/TodoService')

router.get('/', async (req, res) => {
    try {
        const data = await todoService.getAllTasks();
        res.render('index', {
            data: data,
            title: 'TODO List',
            addNewTask: "Add new task",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Route Undone List
router.get('/undone', async (req, res) => {
    try {
        const data = await todoService.getUndoneTasks();
        res.render('undone', {
            data: data,
            title: 'Undone TODOS',
            addNewTask: "Add New task"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Route Done List
router.get('/done', async (req, res) => {
    try {
        const data = await todoService.getDoneTasks();
        res.render('done', {
            data: data,
            title: 'Done TODOS',
            addNewTask: "Add New task"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Route Add Task
router.get('/addTask', (req, res) => {
    res.render('addTask', {});
});

// Route Update Task
router.get('/updateTask/:id', (req, res) => {
    const id = req.params.id;
    res.render('updateTask', { id });
});

// Add Task
router.post('/add', async (req, res) => {
    const { title, assignee } = req.body;
    try {
        await todoService.addTask(title, assignee);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Delete Task
router.post('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await todoService.deleteTask(id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Update Task
router.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    const { title } = req.body;
    try {
        await todoService.updateTask(id, title);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Mark Task as Done
router.post('/markDone/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await todoService.markTaskDone(id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Mark Task as Undone
router.post('/markUndone/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await todoService.markTaskUndone(id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;