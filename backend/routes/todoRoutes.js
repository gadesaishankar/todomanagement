const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

router.post('/', async (req, res) => {
    const newTodo = new Todo({
        task: req.body.task,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
});

router.put('/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { task: req.body.task, completed: req.body.completed },
        { new: true }
    );
    res.json(updatedTodo);
});

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
});

module.exports = router;
