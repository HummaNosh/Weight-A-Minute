const dotenv =require('dotenv')
const aws = require('aws-sdk')
const crypto = require ('crypto')
const { promisify } = require("util")
const randomBytes = promisify(crypto.randomBytes)
const fs = require('fs');
const express =require("express")
const app = express();
dotenv.config()

const region = "eu-west-1"
const bucketName = "weightaminute"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY


const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})


 async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
};


//  downloadng from bucket
 
app.get('/download-file', function(req, res, next){
 
    // download the file via aws s3 here
    var fileKey = req.query['fileKey'];
 
    console.log('Trying to download file', fileKey);
     
    AWS.config.update(
      {
        accessKeyId: "....",
        secretAccessKey: "...",
        region: 'eu-west-1'
      }
    );
    var s3 = new AWS.S3();
    var options = {
      Bucket: bucketName,
      Key: fileKey,
      Expires: 60
    };
 
    res.attachment(fileKey);
    var fileStream = s3.getObject(options).createReadStream();
    fileStream.pipe(res);
});

// downloading

(async function() {
  try{
    aws.config.setPromisesDependency();
    aws.config.update({
      AWS_ACCESS_KEY_ID: config.aws.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: config.aws.AWS_SECRET_ACCESS_KEY,
      region: "eu-west-1"

    });
    const s33= new aws.S3();
    const response = await s33.listObjectsV2({
      Bucket: "weightaminute"
    }).promise();
    console.log(response,"itsworking");

  } catch (err) {
    console.log("our error", err)
  }
  debugger;
})





module.exports = { generateUploadURL };


// {{!-- hn new --}}
