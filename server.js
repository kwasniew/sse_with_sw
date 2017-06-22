var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/events', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    setInterval(function() {
        message(Math.random());
    }, 1000);

    function message(text) {
        res.write('event: post\n');
        res.write('data: ' + text + '\n\n');
    }

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});