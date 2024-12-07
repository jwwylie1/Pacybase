var express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Post = require('./models/trades');
const Report = require('./models/filters')
const Sbc = require('./models/sbc')
const Wordle = require('./models/wordle')

const app = express();


var filter = [];

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

//connect to mongoDB
const dbURI = "mongodb+srv://madfut-user:Madfut4portfoli0@cluster0.6sf6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI)
    .then((result) => app.listen(port))
    .catch((err) => console.log(err))

// make express look in the public directory for assets (css/js/img)
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));

const cardsList = require('./views/public/cards');
const cardsOrder = require('./views/public/ordercards');


cardsOrder.sort(function (a, b) {
    return b.ovr - a.ovr;
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views');

// set the home page route
app.get('/', (req, res) => {
	Post.find()
			.then((result) => {
					res.render('index', {trades: result, cardsList, cardsOrder});
			})
			.catch((err) => {
					console.log(err);
			})
})

app.get('/trades', (req, res) => {
	Post.find()
			.then((result) => {
					/*filteredTrades = [];
					for (i=0; i<result.length; i++) { //loop thru all trades
						if (filter.filter1 == '' || filter.filter1 == null) { //no filter
							filteredTrades.push(result[i]);
						} else if (filter.filter2 == '' || filter.filter2 == null) { //1 filter
							if (filter.type == 'has') { //filter is has
								if (result[i].has1 == filter.filter1 || result[i].has2 == filter.filter1 || result[i].has3 == filter.filter1 || result[i].has4 == filter.filter1 || result[i].has5 == filter.filter1 || result[i].has6 == filter.filter1 || result[i].has7 == filter.filter1 || result[i].has8 == filter.filter1 || result[i].has9 == filter.filter1 || result[i].has10 == filter.filter1 || result[i].has11 == filter.filter1 || result[i].has12 == filter.filter1) {
									filteredTrades.push(result[i])
								}
							} else {
								if (result[i].want1 == filter.filter1 || result[i].want2 == filter.filter1 || result[i].want3 == filter.filter1 || result[i].want4 == filter.filter1 || result[i].want5 == filter.filter1 || result[i].want6 == filter.filter1 || result[i].want7 == filter.filter1 || result[i].want8 == filter.filter1 || result[i].want9 == filter.filter1 || result[i].want10 == filter.filter1 || result[i].want11 == filter.filter1 || result[i].want12 == filter.filter1) {
									filteredTrades.push(result[i])
								}
							}
						} else if (filter.filter3 == '' || filter.filter3 == null) { //2 filters
							if (filter.type == 'has') { //filter is 2, has
								if (result[i].has1 == filter.filter1 || result[i].has2 == filter.filter1 || result[i].has3 == filter.filter1 || result[i].has4 == filter.filter1 || result[i].has5 == filter.filter1 || result[i].has6 == filter.filter1 || result[i].has7 == filter.filter1 || result[i].has8 == filter.filter1 || result[i].has9 == filter.filter1 || result[i].has10 == filter.filter1 || result[i].has11 == filter.filter1 || result[i].has12 == filter.filter1 || result[i].has1 == filter.filter2 || result[i].has2 == filter.filter2 || result[i].has3 == filter.filter2 || result[i].has4 == filter.filter2 || result[i].has5 == filter.filter2 || result[i].has6 == filter.filter2 || result[i].has7 == filter.filter2 || result[i].has8 == filter.filter2 || result[i].has9 == filter.filter2 || result[i].has10 == filter.filter2 || result[i].has11 == filter.filter2 || result[i].has12 == filter.filter2) {
									filteredTrades.push(result[i]);
								}
							} else { //filter is 2, want
								if (result[i].want1 == filter.filter1 || result[i].want2 == filter.filter1 || result[i].want3 == filter.filter1 || result[i].want4 == filter.filter1 || result[i].want5 == filter.filter1 || result[i].want6 == filter.filter1 || result[i].want7 == filter.filter1 || result[i].want8 == filter.filter1 || result[i].want9 == filter.filter1 || result[i].want10 == filter.filter1 || result[i].want11 == filter.filter1 || result[i].want12 == filter.filter1 || result[i].want1 == filter.filter2 || result[i].want2 == filter.filter2 || result[i].want3 == filter.filter2 || result[i].want4 == filter.filter2 || result[i].want5 == filter.filter2 || result[i].want6 == filter.filter2 || result[i].want7 == filter.filter2 || result[i].want8 == filter.filter2 || result[i].want9 == filter.filter2 || result[i].want10 == filter.filter2 || result[i].want11 == filter.filter2 || result[i].want12 == filter.filter2) {
									filteredTrades.push(result[i]);
								}	
						}
						} else { //filter is 3
							if (filter.type == 'has') { //filter is 3, has
								if (result[i].has1 == filter.filter1 || result[i].has2 == filter.filter1 || result[i].has3 == filter.filter1 || result[i].has4 == filter.filter1 || result[i].has5 == filter.filter1 || result[i].has6 == filter.filter1 || result[i].has7 == filter.filter1 || result[i].has8 == filter.filter1 || result[i].has9 == filter.filter1 || result[i].has10 == filter.filter1 || result[i].has11 == filter.filter1 || result[i].has12 == filter.filter1 || result[i].has1 == filter.filter2 || result[i].has2 == filter.filter2 || result[i].has3 == filter.filter2 || result[i].has4 == filter.filter2 || result[i].has5 == filter.filter2 || result[i].has6 == filter.filter2 || result[i].has7 == filter.filter2 || result[i].has8 == filter.filter2 || result[i].has9 == filter.filter2 || result[i].has10 == filter.filter2 || result[i].has11 == filter.filter2 || result[i].has12 == filter.filter2 || result[i].has1 == filter.filter3 || result[i].has2 == filter.filter3 || result[i].has3 == filter.filter3 || result[i].has4 == filter.filter3 || result[i].has5 == filter.filter3 || result[i].has6 == filter.filter3 || result[i].has7 == filter.filter3 || result[i].has8 == filter.filter3 || result[i].has9 == filter.filter3 || result[i].has10 == filter.filter3 || result[i].has11 == filter.filter3 || result[i].has12 == filter.filter3) {
									filteredTrades.push(result[i]);
								}
							} else { //filter is 3, want
								if (result[i].want1 == filter.filter1 || result[i].want2 == filter.filter1 || result[i].want3 == filter.filter1 || result[i].want4 == filter.filter1 || result[i].want5 == filter.filter1 || result[i].want6 == filter.filter1 || result[i].want7 == filter.filter1 || result[i].want8 == filter.filter1 || result[i].want9 == filter.filter1 || result[i].want10 == filter.filter1 || result[i].want11 == filter.filter1 || result[i].want12 == filter.filter1 || result[i].want1 == filter.filter2 || result[i].want2 == filter.filter2 || result[i].want3 == filter.filter2 || result[i].want4 == filter.filter2 || result[i].want5 == filter.filter2 || result[i].want6 == filter.filter2 || result[i].want7 == filter.filter2 || result[i].want8 == filter.filter2 || result[i].want9 == filter.filter2 || result[i].want10 == filter.filter2 || result[i].want11 == filter.filter2 || result[i].want12 == filter.filter2 || result[i].want1 == filter.filter3 || result[i].want2 == filter.filter3 || result[i].want3 == filter.filter3 || result[i].want4 == filter.filter3 || result[i].want5 == filter.filter3 || result[i].want6 == filter.filter3 || result[i].want7 == filter.filter3 || result[i].want8 == filter.filter3 || result[i].want9 == filter.filter3 || result[i].want10 == filter.filter3 || result[i].want11 == filter.filter3 || result[i].want12 == filter.filter3) {
									filteredTrades.push(result[i]);
								}
							}
						}
				} */
					res.render('trades', {trades: result, filters: filter, cardsList, cardsOrder});
				})
			.catch((err) => {
					console.log(err);
			})
})

app.post('/trades', (req, res) => {
	const post = new Post(req.body);

	post.save()
			.then((result) => {
					res.redirect('/trades');
			})
			.catch((err) => {
					console.log(err);
			})
})

app.post('/trades/filter', (req, res) => {
	filter = req.body;
	res.redirect('/trades');
})

app.get('/new', (req, res) => {
	res.render('new', {cardsList, cardsOrder})
})

app.get('/deleteSuccess', (req, res) => {
	res.render('deleteSuccess')
})

app.post('/delete', (req, res) =>  {
	const dels = req.body;
	Post.findById(dels.objectid)
		.then(result => {
			if (result.pin == dels.pin) {
				Post.findByIdAndDelete(result.id)
					.then(result2 => {
						res.redirect('/deleteSuccess')
					})
			} else {
				res.render('deleteFail')
			}
		})
		.catch(err => {
			console.log(err)
		})
})

app.get('/delete', (req, res) => {

	Post.find()
			.then((result) => {
					res.render('delete', {trades: result, filters: filter, cardsList, cardsOrder});
				})
			.catch((err) => {
					console.log(err);
			})
})

app.get('/database', (req, res) => {
	res.render('database', {cardsList, cardsOrder})
})

app.get('/updates', (req, res) => {
	res.render('updates', {cardsList, cardsOrder})
})

app.get('/report', function(req, res) {
	res.render('report');
});

app.post('/report', (req, res) => {
	const report = new Report(req.body);

 report.save()
			.then((result) => {
					res.redirect('/reportSuccess');
			})
			.catch((err) => {
					console.log(err);
			})
})

app.get('/reportSuccess', function(req, res) {
	res.render('reportSuccess');
});

app.get('/wordle', function (req, res) { 
	let scoreTotals = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
	let scoreLength = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}

	Wordle.find()
		.then((result) => {
			for (i=0;i<result.length;i++) {
				if (result[i].letters == 4) {scoreTotals[4] += result[i].score;scoreLength[4]+=1}
				else if (result[i].letters == 5) {scoreTotals[5] += result[i].score;scoreLength[5]+=1}
				else if (result[i].letters == 6) {scoreTotals[6] += result[i].score;scoreLength[6]+=1}
				else if (result[i].letters == 7) {scoreTotals[7] += result[i].score;scoreLength[7]+=1}
				else if (result[i].letters == 8) {scoreTotals[8] += result[i].score;scoreLength[8]+=1}
				else if (result[i].letters == 9) {scoreTotals[9] += result[i].score;scoreLength[9]+=1}
			}
			let scoreAvgs = {4:scoreTotals[4]/scoreLength[4], 5:scoreTotals[5]/scoreLength[5], 6:scoreTotals[6]/scoreLength[6], 7:scoreTotals[7]/scoreLength[7], 8:scoreTotals[8]/scoreLength[8], 9:scoreTotals[9]/scoreLength[9] }
			
			res.render('wordle', {playerName: '', cont: '', scoreAvgs, pastPers:{4:[0,0,0,0,0,0],5:[0,0,0,0,0,0],6:[0,0,0,0,0,0],7:[0,0,0,0,0,0],8:[0,0,0,0,0,0],9:[0,0,0,0,0,0]}, userPast:{4:[0,0,0,0,0,0],5:[0,0,0,0,0,0],6:[0,0,0,0,0,0],7:[0,0,0,0,0,0],8:[0,0,0,0,0,0],9:[0,0,0,0,0,0]}, userPar:{4:0,5:0,6:0,7:0,8:0,9:0}})
		})
		.catch((err) => {
			console.log(err);
		})
})


app.post('/wordle', (req, res) => {
	const post = new Wordle(req.body);

	post.save()
			.then((result) => {
					let scoreTotals = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
					let scoreLength = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
					let userPast = {
						4:[0,0,0,0,0,0],
						5:[0,0,0,0,0,0],
						6:[0,0,0,0,0,0],
						7:[0,0,0,0,0,0],
						8:[0,0,0,0,0,0],
						9:[0,0,0,0,0,0]
					}
					let pastPers = {
						4:[0,0,0,0,0,0],
						5:[0,0,0,0,0,0],
						6:[0,0,0,0,0,0],
						7:[0,0,0,0,0,0],
						8:[0,0,0,0,0,0],
						9:[0,0,0,0,0,0]
					}
					let userPastLength = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
					let userScores = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
					let userPar = {4:0, 5:0, 6:0, 7:0, 8:0, 9:0}

					Wordle.find()
						.then((result2) => {
							for (i=0;i<result2.length;i++) {
								if (result2[i].letters == 4) {scoreTotals[4] += result2[i].score;scoreLength[4]+=1}
								else if (result2[i].letters == 5) {scoreTotals[5] += result2[i].score;scoreLength[5]+=1}
								else if (result2[i].letters == 6) {scoreTotals[6] += result2[i].score;scoreLength[6]+=1}
								else if (result2[i].letters == 7) {scoreTotals[7] += result2[i].score;scoreLength[7]+=1}
								else if (result2[i].letters == 8) {scoreTotals[8] += result2[i].score;scoreLength[8]+=1}
								else if (result2[i].letters == 9) {scoreTotals[9] += result2[i].score;scoreLength[9]+=1}

								if (result2[i].player == post.player) {
									userPast[result2[i].letters][result2[i].guesses-1] += 1;
									userPastLength[result2[i].letters] += 1;
									userScores[result2[i].letters] += result2[i].score;
								}

							}

							let scoreAvgs = {4:scoreTotals[4]/scoreLength[4], 5:scoreTotals[5]/scoreLength[5], 6:scoreTotals[6]/scoreLength[6], 7:scoreTotals[7]/scoreLength[7], 8:scoreTotals[8]/scoreLength[8], 9:scoreTotals[9]/scoreLength[9] }

							for (i=4;i<=9;i++) {
								userPar[i] = (scoreAvgs[i]*userPastLength[i]-userScores[i]).toFixed(3)
							}

							for (i=4;i<=9;i++) {
								for (j=0;j<6;j++) {
									pastPers[i][j] = ((userPast[i][j]/userPastLength[i])*.9 + .05).toFixed(3) * 30
								}
							}

							res.render('wordle', {playerName: post.player, cont: req.body, scoreAvgs, pastPers, userPast, userPar});
						})
						.catch((err) => {
							console.log(err);
						})
			})
			.catch((err) => {
					console.log(err);
			})
})

app.get('/sbc', (req, res) => {
	res.render('sbc/sbcindex', {cardsList, cardsOrder})
})

app.get('/sbc/rivellino', (req, res) => {
	Sbc.find()
		.then((result) => {
			var sbcCt = [0,0,0,0,0,0,0,0,0,0,0,0];
			for (i=0;i<result.length;i++) {
				if (result[i].sbc == "rivellino-brazilgoals") {sbcCt[7]+=1}
				if (result[i].sbc == "rivellino-iconicdribbler") {sbcCt[9]+=1}
			}
			res.render('sbc/rivellinoindex', {sbcCt, cardsList, cardsOrder});
		})
		.catch((err) => {
			console.log(err);
		})
	//res.render('sbc/rivellinoindex', {cardsList, cardsOrder})
})

app.get('/sbc/rivellino/iconicdribbler', (req, res) => {
	Sbc.find()
		.then((result) => {
			var specificSbcs = [];
			for (i=0;i<result.length;i++) {
				if (result[i].sbc == "rivellino-iconicdribbler") {
					specificSbcs.push(result[i])
				}
			}
			specificSbcs.sort(function (a, b) {
				return a.cost - b.cost;
			});
			res.render('sbc/rivellino/iconicdribbler', {sbcs: specificSbcs, cardsList, cardsOrder});
		})
		.catch((err) => {
			console.log(err);
		})
	//res.render('sbc/rivellino/iconicdribbler', {cardsList, cardsOrder})
})

app.post('/sbc/rivellino/iconicdribbler', (req, res) => {
	const sbc = new Sbc(req.body);

	sbc.save()
			.then((result) => {
					res.redirect('/sbc/rivellino/iconicdribbler');
			})
			.catch((err) => {
					console.log(err);
			})
})

app.get('/sbc/rivellino/brazilgoals', (req, res) => {
	Sbc.find()
		.then((result) => {
			var specificSbcs = [];
			for (i=0;i<result.length;i++) {
				if (result[i].sbc == "rivellino-brazilgoals") {
					specificSbcs.push(result[i])
				}
			}
			specificSbcs.sort(function (a, b) {
				return a.cost - b.cost;
			});
			res.render('sbc/rivellino/brazilgoals', {sbcs: specificSbcs, cardsList, cardsOrder});
		})
		.catch((err) => {
			console.log(err);
		})
	//res.render('sbc/rivellino/iconicdribbler', {cardsList, cardsOrder})
})

app.post('/sbc/rivellino/brazilgoals', (req, res) => {
	const sbc = new Sbc(req.body);

	sbc.save()
			.then((result) => {
					res.redirect('/sbc/rivellino/brazilgoals');
			})
			.catch((err) => {
					console.log(err);
			})
})

app.use((req, res) => {
	res.status(404).render('404');
})