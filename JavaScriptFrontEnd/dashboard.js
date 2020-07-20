//image gallery
const newsButton3 = document.getElementById('newsButton3');
const newsButton2 = document.getElementById('newsButton2');
const newsButton1 = document.getElementById('newsButton1');

const newsImage3 = document.getElementById('news3Image');
const newsImage2 = document.getElementById('news2Image');
const newsImage1 = document.getElementById('news1Image');

let galleryTitle; //set after JSON is fetched
let galleryCounter; //For automatically running gallery

function newsButtonClicked1() {

  newsTextGenerator(newsStories.currentNews[0].title, newsStories.currentNews[0].author);
  opacitySetter(newsImage3, newsImage2, newsImage1);
  galleryButtonHighlighter(newsButton3, newsButton2, newsButton1);
  getNewsViewCount(0);
  galleryTitle = document.getElementById('currentNewsTitle');
  galleryTitleEventListener(); //reset eventlistener
  galleryCounter = 1;
  setGalleryToChange(galleryCounter);
}

newsButton1.addEventListener('click', (event) => {

  newsButtonClicked1();

});

function newsButtonClicked2() {

    newsTextGenerator(newsStories.currentNews[1].title, newsStories.currentNews[1].author);
    opacitySetter(newsImage3, newsImage1, newsImage2);
    galleryButtonHighlighter(newsButton3, newsButton1, newsButton2);
    getNewsViewCount(1);
    galleryTitle = document.getElementById('currentNewsTitle');
    galleryTitleEventListener(); //reset eventlistener
    galleryCounter = 2;
    setGalleryToChange(galleryCounter);
}

newsButton2.addEventListener('click', (event) => {

  newsButtonClicked2();

});

function newsButtonClicked3() {

  newsTextGenerator(newsStories.currentNews[2].title, newsStories.currentNews[2].author);
  opacitySetter(newsImage1, newsImage2, newsImage3);
  galleryButtonHighlighter(newsButton1, newsButton2, newsButton3);
  getNewsViewCount(2);
  galleryTitle = document.getElementById('currentNewsTitle');
  galleryTitleEventListener(); //reset eventlistener
  galleryCounter = 3;
  setGalleryToChange(galleryCounter);
}

newsButton3.addEventListener('click', (event) => {

  newsButtonClicked3();
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
    .then((news) => {
      callBack();
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
  galleryCounter = 3;
  setGalleryToChange(galleryCounter);

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

//Automatically run gallery slideshow

let timer;

function setGalleryToChange(galleryCounter) {

  if (galleryCounter === 1) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(newsButtonClicked3, 5000);
  } else if (galleryCounter === 2) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(newsButtonClicked1, 5000);
  } else {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(newsButtonClicked2, 5000)
  }
}

//Teams pane section

const teamsPane = document.getElementById('teamsPane');

//createTeamsEntry function creates this HTML layout
//AND pulls info from JSON

//<div id="teamEntry1" class="teamEntries">
//  <img class="teamPortraits" src="Daria_Matthews.jpg" height="60" width="60">
//  <div class="textTeamEntries">
//    <h4> Finished Working on HTML </h4>
//    <a class="teamAuthor" href="#"> <address> Joe Scarlett 7/18/20 1:15 PM</address> </a>
//  </div>
//</div>
//<hr>

function createTeamsEntry(idNumber, authorPortrait, entryTitle, authorPage, authorName, date, time) {

  let entryDiv = document.createElement('DIV');
  entryDiv.setAttribute('id', `teamEntry${idNumber}`);
  entryDiv.setAttribute('class', 'teamEntries');

  let employeePortrait = document.createElement('IMG');
  employeePortrait.setAttribute('class', 'teamPortraits');
  employeePortrait.src = authorPortrait;
  employeePortrait.setAttribute('height', '60');
  employeePortrait.setAttribute('width', '60');

  entryDiv.appendChild(employeePortrait);

  let textSection = document.createElement('DIV');
  textSection.setAttribute('class', "textTeamEntries");

  let teamEntryTitle = document.createElement('H4');
  teamEntryTitle.textContent = entryTitle;

  let authorLink = document.createElement('A');
  authorLink.setAttribute('class', 'teamAuthor');
  authorLink.href = authorPage;

  let authorDateAndTime = document.createElement('ADDRESS');
  authorDateAndTime.textContent = `${authorName} ${date} ${time}`;

  authorLink.appendChild(authorDateAndTime);

  textSection.appendChild(teamEntryTitle);
  textSection.appendChild(authorLink);

  entryDiv.appendChild(textSection);

  teamsPane.appendChild(entryDiv);

  if (idNumber <= 2) {
    let line = document.createElement('HR');
    teamsPane.appendChild(line);
  }
}

let teamEntries1;

function fetchTeamEntries(callback) {
  fetch('http://localhost:3000/api/teamEntries')
    .then((response) => {
      return response.json();
    })
    .then((entries) => {
      teamEntries1 = entries;
    })
    .then(() => {
      for (let i = 0; i < teamEntries1.teamEntries.length; i++) {
        callback(i, teamEntries1.teamEntries[i].authorPortrait, teamEntries1.teamEntries[i].title,
        teamEntries1.teamEntries[i].authorPage, teamEntries1.teamEntries[i].authorName,
        teamEntries1.teamEntries[i].date, teamEntries1.teamEntries[i].time);
      }
    })
}

fetchTeamEntries(createTeamsEntry);
