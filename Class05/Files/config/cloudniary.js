const cloudinary = require('cloudinary').v2;


// Now you can start using Cloudinary
// For example, uploading an image
// cloudinary.uploader.upload('my_image.jpg', function(error, result) { 
//     console.log(result, error); 
// });


const cloudniaryConnect = () => {
    try {

        // Configure Cloudinary with your API credentials
        cloudinary.config({
          cloud_name: 'dkcdebrlv',
          api_key: 594516232164695,
          api_secret: 'eLOTzjpSl7Q-6aBYoCHubKFfQy0'
        });

        console.log("cloudniary connected")
        
    } catch (error) {
        console.log(error)        
    }
}

module.exports = cloudniaryConnect;