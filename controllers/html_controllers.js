var router = require("express").Router();
var path = require("path");

router.get('/gigs', function(req, res) {
    res.send("Hitting /gigs");
    console.log("Hitting /gigs");
    //res.sendFile( path.join(__dirname, "..", "public", "<html file>") );
});

// 'catch-all' clause.  Display home page
router.all('*', function(req, res) {
    res.send("Hitting catch-all");
    console.log("HItting catch-all");
    // res.sendFile( path.join(__dirname, "..", "public", "<html file>") );
});

module.exports = router;
