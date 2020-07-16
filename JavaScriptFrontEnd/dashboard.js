//image gallery
const newsButton3 = document.getElementById('newsButton3');
const newsButton2 = document.getElementById('newsButton2');
const newsButton1 = document.getElementById('newsButton1');

const newsImage3 = document.getElementById('news3Image');
const newsImage2 = document.getElementById('news2Image');
const newsImage1 = document.getElementById('news1Image');

newsButton1.addEventListener('click', (event) => {

  newsTextGenerator(newsStories.currentNews[0].title, newsStories.currentNews[0].author);
  opacitySetter(newsImage3, newsImage2, newsImage1);
  galleryButtonHighlighter(newsButton3, newsButton2, newsButton1);

});

newsButton2.addEventListener('click', (event) => {

  newsTextGenerator(newsStories.currentNews[1].title, newsStories.currentNews[1].author);
  opacitySetter(newsImage3, newsImage1, newsImage2);
  galleryButtonHighlighter(newsButton3, newsButton1, newsButton2);

});

newsButton3.addEventListener('click', (event) => {

  newsTextGenerator(newsStories.currentNews[2].title, newsStories.currentNews[2].author);
  opacitySetter(newsImage1, newsImage2, newsImage3);
  galleryButtonHighlighter(newsButton1, newsButton2, newsButton3);

});

let trueHeader = document.getElementById('newsTitle');
let parent = trueHeader.ParentNode;


//get news stories to update gallery
let newsStories;

function fetchNews(callBack) {
fetch('http://localhost:3000/api/newsStories')
  .then((response) => {
    return response.json();
  })
  .then((news) => {
    newsStories = news;
  })
  .then(() => {
    callBack(newsStories)
  });
}

//Set original news gallery
fetchNews(setOriginalGallery);

function setOriginalGallery() {
  newsTextGenerator(newsStories.currentNews[2].title, newsStories.currentNews[2].author);
  opacitySetter(newsImage1, newsImage2, newsImage3);
  galleryButtonHighlighter(newsButton1, newsButton2, newsButton3);
}

function opacitySetter(opaqueImage1, opaqueImage2, imageShown) {

  opaqueImage1.style.opacity = 0;
  opaqueImage2.style.opacity = 0;
  imageShown.style.opacity = 1;

}

function newsTextGenerator(title, author) {

  let header = document.getElementById('currentNewsTitle');
  let currentAuthor = document.getElementById('newsAuthor');

  let link = document.createElement('A');
  link.setAttribute('href', '#');
  link.textContent = title;

  let newHeader = document.createElement('H3');
  newHeader.setAttribute('id', 'currentNewsTitle');

  newHeader.appendChild(link);

  let newAuthor = document.createElement('ADDRESS');
  newAuthor.setAttribute('id', 'newsAuthor');
  newAuthor.textContent = `By ${author}`;

  header.replaceWith(newHeader);
  currentAuthor.replaceWith(newAuthor);

}

function galleryButtonHighlighter(nonUsedButton1, nonUsedButton2, highlightButton) {

    nonUsedButton1.style.backgroundColor = '';
    nonUsedButton1.style.borderRadius = '0px';

    nonUsedButton2.style.backgroundColor = '';
    nonUsedButton2.style.borderRadius = '0px';

    highlightButton.style.backgroundColor = '#FFD577';
    highlightButton.style.borderRadius = '100px';

}

function newsViewCount(article) {

  const newsViewCount = document.getElementById('newsViewCount');
  newsViewCount.textContent = newsStories.currentNews[article].viewCount;


}

//original gallery setting
