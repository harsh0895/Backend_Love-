const Todo = require('../Models/Todo');

const getTodo = async (req, res) => {
    try{
        const allTodos = await Todo.find({});
        res.status(200).json({
            todos: allTodos,
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: "Fetching failed!"
        })
    }
}

module.exports = getTodo