// // get input type file
// let file = document.getElementById("myfile");
// let columns = document.querySelectorAll(".column");
// // create array to store image tag
// let arrImg = [];

// // event handler for input type file
// file.onchange = () => {
//   // get files from the selected folder
//   for (const key in file.files) {
//     const element = file.files[key];
//     if (element.type === "image/jpeg" || element.type === "image/png") {
//       // call minParent() function and obtain div which has minimun child nodes
//       let parent_column = minParent(columns);

//       // call createImg() Function and append images one by one in the column div
//       let img = createImg(element.webkitRelativePath);

//       // store images in the array for animation
//       arrImg[key] = img;

//       // append images in the parent node
//       parent_column.appendChild(img);
//     }
//   }

//   // create variable for index number
//   let i = 0;
//   let clearinter = setInterval(() => {
//     arrImg[i].setAttribute("style", "display : initial");
//     arrImg[i].classList.add("animated", "zoomIn");
//     i++;
//     // clear set interval when i is equal to array lenght
//     i == arrImg.length ? clearInterval(clearinter) : undefined;
//   }, 200);
// };

// // obtain parent node which has minimun child
// function minParent(parentNode) {
//   let arr = [];

//   // get the children of the parent nodes
//   parentNode.forEach((element, i) => {
//     arr[i] = element.children.length;
//   });

//   // get min number from array
//   let min = Math.min.apply(null, arr);

//   // get parent which has min child nodes.
//   for (let i = 0; i < parentNode.length; i++) {
//     if (parentNode[i].children.length == min) {
//       return parentNode[i];
//     }
//   }
// }

// // create images with source attribute
// function createImg(imgsrc) {
//   let img = document.createElement("img");
//   img.setAttribute("src", imgsrc);
//   img.className = "img";
//   return img;
// }

// // push up to dtabase chnage excersise
// const pushNewData = async (newExerciseRecord) => {
//   const response = await fetch('/api/exercise', {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newExerciseRecord),
//   });

//   if (response.ok) {
//       console.log("Success");
//   };
// };

// const multer = require('multer');

module.exports.image={
    storage:function(){
        var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/images/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
      })
      return storage;
},
allowedImage:function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
}}