// Init project
const express = require('express');
const app = express();
const parseHeaders = require('./src/api/WhoAmI/index');
const cors = require('cors');

// Serve static resources from public dir
app.use(express.static(__dirname +"/public"));

app.use(cors());

// Route for index page
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
});

/**
 * Route for whoami request
 * 
 * @returns {String} JSON response
 */
app.get("/api/whoami", (req, res) => {
    res.json(parseHeaders(req));
})

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port "+ listener.address().port);
});