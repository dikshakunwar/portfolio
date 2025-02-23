const express = require('express');
const path=require('path');
const app = express();

app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/skills', (req, res) => {
    res.render('skills')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/address', (req, res) => {
    res.render('address')
})
app.get('*', (req, res) => {
    res.send("Heyy !! Enter valid information..");
})

app.listen(3030, () => {
    console.log("listening on port 3030")
})