const Todo = require('../Models/Todo');

const deleteTodo = async (req, res) => {
    try{

        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            msg: 'Todo deleted....'
        })


    }catch(error){
        console.log("Cannot delete todo because id doesn't exists!")
        console.log(error)
    }

}

module.exports = deleteTodo