const Todo = require('../Models/Todo');

const createTodo = async (req, res) => {
    try{
        const {title, description} = req.body;

        const response = await Todo.create({title, description});

        res.status(200).json({
            success: true,
            data: response,
            msg: "Todo created...",
        })
    }
    catch(error) {
        console.log(error);
        res.status(411).json({
            msg: "Some error occur..."
        })
    }
}

module.exports = createTodo;
