const Todo = require('../Models/Todo');

const updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()},
        )

        res.status(200).json({
            success: true,
            data: todo,
            msg: "Todo Updated Successfully.."
        })

    }catch(error){
        console.log("id is not exist..")
        console.log(error)
    }
}

module.exports = updateTodo