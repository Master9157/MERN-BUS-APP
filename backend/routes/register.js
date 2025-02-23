var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser');