const Car = require('../models/Car');

const getCar = async (req, res) => {
    try{

        const allCars = await Car.find({});
        res.status(200).json({
            cars: allCars
        }) 

    }catch(erroe){
        console.log(erroe);
        res.status(500).json({
            msg: "Fetching failed..."
        })
    }
}

module.exports = getCar;