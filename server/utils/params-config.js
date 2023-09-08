const { v4: uuidv4 } = require('uuid');
const config = require('../config');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const imageParams = {
        Bucket: config.bucket,
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read', // allow read access to this file
    };
    return imageParams;
  };

  module.exports = params;