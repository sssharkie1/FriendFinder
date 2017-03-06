// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.

//var surveyData = require('../app/data/survey');
//var friendsData = require('../app/data/friends');

module.exports = function(app) {

// app.get('/api/make-a-reservation', function (req, res) {
//     res.json(tableData) 
// });

app.post('/api/survey', function (req, res) {

// if (tableData.length < 5) {
//     tableData.push(req.body);
//     res.json(true);
//     }
// else{
//     waitinglistData.push(req.body);
//     res.json(false);
//     }
});

};
