var express = require('express');
var app = express();
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/api/show')
.post(function (req, res) {
    console.log(req.body);
    res.send("<status>OK</status>")
});

app.listen(8081, function () {
    console.log('Listening at 8081');
})