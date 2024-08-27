const express = require('express');
const { imageUpload, videoUpload, reduceImageUpload, localFileUpload } = require('../controller/FileUpload');

const router = express.Router();

router.post('/imageUpload', imageUpload);
router.post('/videoUpload', videoUpload);
router.post('/reduceimageUpload', reduceImageUpload);
router.post('/localFileUpload', localFileUpload);


module.exports = router;

