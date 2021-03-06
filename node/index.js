const express = require('express'); // express.js web application framework for HTTPS requests
const bodyParser = require('body-parser'); // parse incoming request bodies
const cors = require('cors'); // allows cross domain requests

const store = require('./store'); // store file will be used to define functions
const store2 = require('./store2'); // store file will be used to define functions

const path = require('path');

const app = express();
app.use(cors());
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '../angular/dist/frontend'));
//app.use(express.static('public')); // ???????????????????????????
//app.use(bodyParser.json());
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '../angular/dist/frontend/index.html'))
});
//console.log(process.env.PORT);
//const knex = (process.env.PORT === 'undefined' ? require('knex')(require('./psqlconn')) : require('knex')(require('./psqlconnheroku')));
//export {knex};
//console.log(knex);
//console.log(knex);
/*console.log(process.env.PORT); // print port to console
if(process.env.PORT === undefined){
    const knex = require('knex')(require('./psqlconn')); // getting database connection
}
else{
    const knex = require('knex')(require('./psqlconnheroku')); // getting database connection
}
console.log(knex);
*/
/*
app.post('/loadApplicants', (req, res) => {
	store.loadApplicants({
		Position: req.body.Position
	})
	.then((data =>{ res.send(data);})) // 200 is HTTP for successful/ send back response data
});

app.post('/recruiterName', (req,res) =>{
	store2.recruiterName({
		ID: req.body.ID
	})
	.then((data =>{ res.send(data);}))
});

app.post('/recruiterJobs', (req,res) =>{
	store2.recruiterJobs({
		ID: req.body.ID
	})
	.then((data =>{ res.send(data);}))
});

app.post('/results', (req, res) => {
	store.results({
		ID: req.body.ID,
		Job: req.body.Job
	})
	.then((data => {res.send(data);}))
});*/

// added process.env.PORT because Heroku dynamically chooses a port to listen to
app.listen(process.env.PORT || 7555, () => {
	console.log('Server running!');
});