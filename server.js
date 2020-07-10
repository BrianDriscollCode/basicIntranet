const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('./public/styling'));
app.use(express.static('./public/users'));
app.use(express.static('./public/newsGallery'));
app.use(express.static('JavaScriptFrontEnd'));

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
