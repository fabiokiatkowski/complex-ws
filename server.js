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

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('Listening at ', port);
})