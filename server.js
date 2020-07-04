const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('./public/styling'));
app.use(express.static('./public/users'));

app.listen(3000);

app.set('view engine', 'ejs');
console.log('server activated');


app.get('/', (req, res) => {
  res.render('home');
});
