const fs = require('fs');
const express = require('express');
const path = require('path');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
	res.render('index', { title: 'Index'});
})

app.listen(3000,() => console.log('Ps Project Running on port 3000!'));