var router = require("express").Router();

router.get('/gigs', function(req, res, next) {
    res.send("Hitting get - /api/gigs");
    console.log("Hitting get - /api/gigs");
    // implementation goes here.
});

router.post('/gigs', function(req, res, next) {
    res.send("Hitting post - /api/gigs");
    console.log("Hitting post - /api/gigs");
    // implementation goes here.
});

router.put('/gigs/:id', function(req, res, next) {
    res.send("Hitting put - /api/gigs");
    console.log("Hitting put - /api/gigs");
    // implementation goes here.
});

module.exports = router;
