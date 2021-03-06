// Handles route loading and server start
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set Handlebars.
var Handlebars = require("handlebars");
var exphbs = require("express-handlebars");

// Register moment.js for handlebars
var MomentHelper = require("handlebars.moment");
MomentHelper.registerHelpers(Handlebars);

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

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Break route/controllers into html and API portions
// Using path.join to support path on non-*nix paltforms.
var routeDir = path.join(__dirname, "controllers");
var apiProjectsRoutes = require( path.join(routeDir, "apiProjectsController.js") );
var apiApplicationsRoutes = require( path.join(routeDir, "apiApplicationsController.js") );
var apiUsersRoutes = require( path.join(routeDir, "apiUsersController.js") );
var apiNotifyRoutes = require( path.join(routeDir, "apiNotifyController.js") );
var htmlRoutes = require( path.join(routeDir, "htmlController.js") );

app.use('/api', apiProjectsRoutes);
app.use('/api', apiApplicationsRoutes);
app.use('/api', apiUsersRoutes);
app.use('/api', apiNotifyRoutes);
app.use('/', htmlRoutes);

//db.sequelize.sync({force: true}).then(function() {
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App now listening at localhost:" + PORT);
    });
});
