// init project
var express = require('express');
var app = express();

// serve static resources from public dir
app.use(express.static(__dirname +"/public"));

// basic routing to show index page
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
});

// return basic request header info for an api/whoami request
app.get("/api/whoami", (req, res) => {
    res.json({
        "ipaddress": req.ip,
        "language": req.header('accept-language'),
        "software": req.header('user-agent')
    });
})

// listen for requests
var listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port "+ listener.address().port);
});