const express = require('express');
const app = express();
//const people = require('./routes/people');
const auth = require('./routes/auth');


app.use(express.static('./methods-public'));

// parse form data , go with urlencoded middleware
app.use(express.urlencoded({extended: false}));

// parse json 
app.use(express.json());

// base path: api/people
//app.use('/api/people',people);
app.use('/submit',auth);


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
});