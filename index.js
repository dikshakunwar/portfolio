const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about')
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

