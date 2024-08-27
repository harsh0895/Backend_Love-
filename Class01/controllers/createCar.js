
const Car = require('../models/Car');



const createCar = async (req,res) => {

    try{    
        const { name, brand } = req.body;
        
        const response = await Car.create(({name,  brand}));
        console.log(name);
        console.log(brand);
        res.json({
            success: true,
            data: response,
            msg: "Car Info submitted successfully!",
        })

    }catch(error){
        console.log(error)
        res.json({
            msg: "Some erroe occur while taking the data from the body../"
        })
    }
}

module.exports = createCar;


