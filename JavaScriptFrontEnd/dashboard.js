//image gallery
const newsButton3 = document.getElementById('newsButton3');
const newsButton2 = document.getElementById('newsButton2');
const newsButton1 = document.getElementById('newsButton1');

const newsImage3 = document.getElementById('news3Image');
const newsImage2 = document.getElementById('news2Image');
const newsImage1 = document.getElementById('news1Image');

let galleryTitle; //set after JSON is fetched

newsButton1.addEventListener('click', (event) => {

  newsTextGenerator(newsStories.currentNews[0].title, newsStories.currentNews[0].author);
  opacitySetter(newsImage3, newsImage2, newsImage1);
  galleryButtonHighlighter(newsButton3, newsButton2, newsButton1);
  getNewsViewCount(0);
  galleryTitle = document.getElementById('currentNewsTitle');
  galleryTitleEventListener();

});

newsButton2.addEventListener('click', (event) => {

  newsTextGenerator(newsStories.currentNews[1].title, newsStories.currentNews[1].author);
  opacitySetter(newsImage3, newsImage1, newsImage2);
  galleryButtonHighlighter(newsButton3, newsButton1, newsButton2);
  getNewsViewCount(1);
  galleryTitle = document.getElementById('currentNewsTitle');
  galleryTitleEventListener();

});

newsButton3.addEventListener('click', (event) => {

  newsTextGenerator(newsStories.currentNews[2].title, newsStories.currentNews[2].author);
  opacitySetter(newsImage1, newsImage2, newsImage3);
  galleryButtonHighlighter(newsButton1, newsButton2, newsButton3);
  getNewsViewCount(2);
  galleryTitle = document.getElementById('currentNewsTitle');
  galleryTitleEventListener();

});

//get news stories to update gallery
let newsStories;

function fetchNews(callBack, galleryTitleEventListener) {
  fetch('http://localhost:3000/api/newsStories')
    .then((response) => {
      return response.json();
    })
    .then((news) => {
      newsStories = news;
    })
    .then(() => {
      callBack(newsStories)
    })
    .then(() => {
      galleryTitleEventListener();
    })
}

//Set original news gallery and galler title event listener
fetchNews(setOriginalGallery, galleryTitleEventListener);

function setOriginalGallery() {
  newsTextGenerator(newsStories.currentNews[2].title, newsStories.currentNews[2].author);
  opacitySetter(newsImage1, newsImage2, newsImage3);
  galleryButtonHighlighter(newsButton1, newsButton2, newsButton3);
  getNewsViewCount(2);
  galleryTitle = document.getElementById('currentNewsTitle');
}

//Gallery functions
function opacitySetter(opaqueImage1, opaqueImage2, imageShown) {

  opaqueImage1.style.opacity = 0;
  opaqueImage2.style.opacity = 0;
  imageShown.style.WebkitTransition = 'opacity 1.4s';
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

//View Count functionality for Gallery

function getNewsViewCount(article) {


  let newsViewCount = document.getElementById('newsViewCount');
  newsViewCount.textContent = `${newsStories.currentNews[article].viewCount} views`;


}

function changeNewsViewCount(galleryTitle) {

  let articlePosition;

  for (let i = 0; i < newsStories.currentNews.length; i++) {

    if (galleryTitle.textContent == newsStories.currentNews[i].title) {
      articlePosition = i;
    }
  }

  newsStories.currentNews[articlePosition].viewCount += 1;
  getNewsViewCount(articlePosition);

}

function galleryTitleEventListener() {

  galleryTitle.addEventListener('click', () => {

    changeNewsViewCount(galleryTitle);

  });

}


//original gallery setting
