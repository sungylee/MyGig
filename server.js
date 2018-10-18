// Handles route loading and server start
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Requiring our models for syncing
var db = require("./models");

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Break route/controllers into html and API portions
// Using path.join to support path on non-*nix paltforms.
var routeDir = path.join(__dirname, "controllers");
var apiRoutes = require( path.join(routeDir, "api_controllers.js") );
var htmlRoutes = require( path.join(routeDir, "html_controllers.js") );

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App now listening at localhost:" + PORT);
    });
});
