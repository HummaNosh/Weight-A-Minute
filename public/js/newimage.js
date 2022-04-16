
var mimes = {
    'jpeg': 'data:image/jpeg;base64,'
};

AWS.config.update({
    signatureVersion: 'v4', // pre-signing
    region: 'eu-west-2', //us-east-1
    accessKeyId: '',
    secretAccessKey: ''
});

  var bucket = new AWS.S3({params: {Bucket: 'weightaminute'}});

  function encode(data)
  {
      var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
      return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
  }

  function getUrlByFileName(fileName,mimeType) {
      return new Promise(
          function (resolve, reject) {
              bucket.getObject({Key: fileName}, function (err, file) {
                  var result =  mimeType + encode(file.Body);
                  resolve(result)
              });
          }
      );
  }

  function openInNewTab(url) {
    console.log(url);
      var redirectWindow = window.open(url, '_blank');
      redirectWindow.location;
  }

  getUrlByFileName('S3_FILE_PATH', mimes.jpeg).then(function(data) {
      document.querySelector('img').src = data;
  });