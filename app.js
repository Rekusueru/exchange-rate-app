const express = require('express');
const app = express();
const port = 8080;

//dito iseset view engine (views)
app.set('view engine', 'ejs');

//routes ito (routing)
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about_us', (req, res) => {
    res.render('about_us');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/converter', (req, res) => {
    res.render('converter');
});

app.get('/rate_status', (req, res) => {
    res.render('rate_status');
});


//taga-handle ng post request (http methods)
app.post('/contact', (req, res) => {
    res.send('Form has been submitted successfully!');
});

//server starter
app.listen(port, () => {
    console.log('View running server on http://localhost:' + port);
});