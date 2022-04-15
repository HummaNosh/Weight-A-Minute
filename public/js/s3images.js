
const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")

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

  const imageUrl = url.split('?')[0]
  console.log(imageUrl)

  const img = document.createElement("img")
  img.src = imageUrl
  document.body.appendChild(img)
})

// {{!-- hn new --}}

// s3 stuff

// 1
const multer = require('multer')
// 2
const upload = multer({ dest: 'images/' })

// 3
app.post('/api/images', upload.single('image'), (req, res) => {
  // 4
  const imagePath = req.file.path
  const description = req.body.description

  // Save this data to a database probably

  console.log(description, imagePath)
  res.send({description, imagePath})
})