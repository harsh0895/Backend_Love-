const Files = require('../Models/File');
const cloudinary = require('cloudinary').v2;

const checkType = (supportTypeArray, fileType) => {
    let check = supportTypeArray.includes(fileType);
    return check;
}

async function uploadFileToCloud(file, folder, quality){
    // Upload the image on cloudinary
    const options = {folder};
    
    // if quality exists then image quality would be reduced!
    if( quality){
        options.quality = quality;
    }

    options.resource_type = "auto"
    return await cloudinary.uploader.upload(file.tempFilePath, options); // ye vo temprary folder hai jo hmare server pr bnta hai cloudinary pr file ko upload krne ke liye
  
}

const imageUpload = async (req, res) => {
    
    try {
        
       // data fetch
       const { name, tags, email } = req.body;
        console.log(name, tags, email);

        // fetching file    
        const file = req.files.imageFile;
        console.log(file);

        // validation
        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        // check our fileType exists in out supportedType of not
        if( !checkType(supportedType, fileType)){
            return res.status(400).json({
                success: false,
                msg: 'File format not supported'
            })
        }

        // if format is supported
        const response = await uploadFileToCloud(file, "codehelp");
        console.log("response", response)

        // after that create entry on db
        const fileData = await Files.create({
            name, tags, imageUrl: response.secure_url, email
        })
        console.log(fileData)

        res.json({
            success: true,
            imageUrl: response.secure_url,
            msg: 'Image successfully uploaded on cloudinary'
        })


    } catch (error) {        
        console.log(error)
        res.status(404).send('Not able to upload!')        
    }
     
}

const videoUpload = async (req, res) => {

    try {
        
        // data fetch
        const { name, tags, email } = req.body;
         console.log(name, tags, email);
 
         // fetching file    
         const file = req.files.videoFile;
         console.log(file);
 
         // validation
         const supportedType = ['mp4', 'mov'];
         const fileType = file.name.split('.')[1].toLowerCase();
 
         // check our fileType exists in out supportedType of not
         if( !checkType(supportedType, fileType)){
             return res.status(400).json({
                 success: false,
                 msg: 'File format not supported'
             })
         }
 
         // if format is supported
         console.log('uploading to codehelp folder on cloudinary!')
         const response = await uploadFileToCloud(file, "codehelp");
         console.log("response", response)
 
         // after that create entry on db
         const fileData = await Files.create({
             name, tags, imageUrl: response.secure_url, email
         })
         console.log(fileData)
 
         res.json({
             success: true,
             imageUrl: response.secure_url,
             msg: 'video successfully uploaded on cloudinary'
         })
 
 
    } catch (error) {        
         console.log(error)
         res.status(404).send('Not able to upload!')        
    }
      
}

const reduceImageUpload = async(req, res) => {
    try {
        
        // data fetch
        const { name, tags, email } = req.body;
         console.log(name, tags, email);
 
         // fetching file    
         const file = req.files.videoFile;
         console.log(file);
 
         // validation
         const supportedType = ['mp4', 'mov'];
         const fileType = file.name.split('.')[1].toLowerCase();
 
         // check our fileType exists in out supportedType of not
         if( !checkType(supportedType, fileType)){
             return res.status(400).json({
                 success: false,
                 msg: 'File format not supported'
             })
         }
 
         // if format is supported
         console.log('uploading to codehelp folder on cloudinary!')
         const response = await uploadFileToCloud(file, "codehelp", 30);
         console.log("response", response)
 
         // after that create entry on db
         const fileData = await Files.create({
             name, tags, imageUrl: response.secure_url, email
         })
         console.log(fileData)
 
         res.json({
             success: true,
             imageUrl: response.secure_url,
             msg: 'video successfully uploaded on cloudinary'
         })
 
 
    } catch (error) {        
         console.log(error)
         res.status(404).send('Not able to upload!')        
    }
}

const localFileUpload = async (req, res) => {
    try {
        
        // check the file exists or not
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // if file exists then will fetch from the input field by using req.Files.file

        const uploadedFile = req.files.file;
        console.log(uploadedFile)


        // Use mv() method to move the file to a specified location
        // define the path for storing the file on the server
        let path = __dirname + '/files/' + Date.now() + `.${uploadedFile.name.split('.')[1]}`;  // Date.now() is the name of file and __dirname is the current direcvtory 
        console.log(path)

        uploadedFile.mv(path, (err) => {
            if(err) {
                res.status(500).send(`Erroe while uploading a file: ${err}`)  
            }
            
            res.status(200).send("Local File Uploaded Successfully...");
        })


    } catch (error) {
        console.log(error)
        res.status(404).send('Not able to upload!')        
    }
}

module.exports = {

    imageUpload: imageUpload,
    videoUpload: videoUpload,
    reduceImageUpload: reduceImageUpload,
    localFileUpload: localFileUpload

}


