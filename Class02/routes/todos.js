const express = require('express');
const createTodo  = require('../controllers/createTodo');
const getTodo = require('../controllers/getTodo');
const updateTodo = require('../controllers/updateTodo');
const deleteTodo = require('../controllers/deleteTodo');


const router = express.Router();

router.post('/createTodo', createTodo);
router.get('/gettodos', getTodo)
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;