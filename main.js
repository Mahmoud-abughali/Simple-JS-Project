// The Filters
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayScale = document.getElementById("grayScale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
// the buttont
let Upload = document.getElementById("Upload");
let download = document.getElementById("download");
let Reset = document.querySelector('span');
// the image
let image = document.getElementById("image");
// image box
let ImgBox = document.querySelector('.img-box');
//
function Resetvalue(){
image.style.filter='none';
saturate.value="100";
contrast.value="100";
brightness.value="100";
sepia.value="0";
grayScale.value="0";
blur.value="0";
hueRotate.value="0";
}
// start
window.onload = function () {
  download.style.display = 'none';
  Reset.style.display = 'none';
  ImgBox.style.display = 'none';
}
Upload.onchange = function () {
  Resetvalue();
  download.style.display = 'block';
  Reset.style.display = 'block';
  ImgBox.style.display = 'block';
  let file = new FileReader();
  file.readAsDataURL(Upload.files[0]);

  file.onload = function () {
    image.src = file.result;
  }
}

let filters = document.querySelectorAll("ul li input");

filters.forEach(filter => {
  filter.addEventListener('input', function () {
    image.style.filter = `
saturate(${saturate.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
grayScale(${grayScale.value})
blur(${blur.value}px)
hue-rotate(${hueRotate.value}deg)
`
  })
})
download.onclick = function(){
  download.href = image.src;
}