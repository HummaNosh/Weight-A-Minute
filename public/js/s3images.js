
const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")
// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope) {
//   $scope.carname = "Volvo";
// });
imageForm.addEventListener("submit", async event => {

  event.preventDefault()
  const file = imageInput.files[0]

 
  const {url} = await fetch("/s3Url").then(res => res.json())


  // post the image direclty to the s3 bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })

  // bottom works!!!--------------------------------------------------------
  const imageUrl = url.split('?')[0]
  console.log(imageUrl)

  const img = document.createElement("img")
  img.src = imageUrl
  document.getElementById("smells").appendChild(img).setAttribute("style", "width:15rem")
})



// {{!-- hn new --}}

