const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
var bodyParser = require("body-parser");
const bcrypt = require("bcrypt");