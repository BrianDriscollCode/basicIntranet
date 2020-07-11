//image gallery
const newsButton3 = document.getElementById('newsButton3');
const newsButton2 = document.getElementById('newsButton2');
const newsButton1 = document.getElementById('newsButton1');


const newsImage3 = document.getElementById('news3Image');
const newsImage2 = document.getElementById('news2Image');
const newsImage1 = document.getElementById('news1Image');

const getNewsStories = require('./server.js');



function opacitySetter(opaqueImage1, opaqueImage2, imageShown) {

  opaqueImage1.style.opacity = 0;
  opaqueImage2.style.opacity = 0;
  imageShown.style.opacity = 1;

}

function newsTextChange() {


}

function newsViewCount() {

}
