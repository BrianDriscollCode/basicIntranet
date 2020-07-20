const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('./public/styling'));
app.use(express.static('./public/users'));
app.use(express.static('./public/newsGallery'));
app.use(express.static('./public/icons'));
app.use(express.static('JavaScriptFrontEnd'));
app.use(express.static('./serverStoredInformation'));


app.listen(3000);

app.set('view engine', 'ejs');
console.log('server activated');


app.get('/', (req, res) => {
  res.render('dashboard');
});

app.get('/news-feed', (req, res) => {
  res.render('newsFeed');
});

app.get('/company-page', (req, res) => {
  res.render('companyPage');
});

app.get('/teams', (req, res) => {
  res.render('teams');
});

app.get('/my-profile', (req, res) => {
  res.render('myProfile');
});


//read JSON data
const fs = require('fs');

function readNewsStorage(callback) {
  fs.readFile('./serverStoredInformation/news.json', (err, data) => {
    if (err) throw err;
    let newsStories = JSON.parse(data);
    callback(newsStories);
  });
}

function createNewsEndPoint(newsStories) {
  app.get('/api/newsStories', (req, res) => {
    res.json(newsStories);
  });
}

readNewsStorage(createNewsEndPoint);

function readTeamEntries(callback) {
  fs.readFile('./serverStoredInformation/teamEntries.json', (err, data) => {
    if (err) throw err;
    let teamEntryData = JSON.parse(data);
    callback(teamEntryData);
  });
}

function createTeamEntryEndPoint(teamEntryData) {
  app.get('/api/teamEntries', (req, res) => {
    res.json(teamEntryData);
  });
}

readTeamEntries(createTeamEntryEndPoint);
