const   express             = require("express"),
        bodyParser          = require("body-parser"),
        methodOverride      = require("method-override"),
        mongoose            = require("mongoose"),
        flash               = require("connect-flash"),
        passport            = require("passport"),
        localStrategy       = require("passport-local"),
        app                 = express();

app.set("view engine", "ejs");