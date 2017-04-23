'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

var _movieController = require('./controller/movieController');

var _movieController2 = _interopRequireDefault(_movieController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (0, _express2.default)();
App.use(_bodyParser2.default.json());
App.use(_bodyParser2.default.urlencoded({ extended: true }));

App.post('/addMovie', _movieController2.default.addMovie);
App.get('/movies', _movieController2.default.getMovies);
_mongoose2.default.connect(_config2.default.MONGO_URL);
var Server = App.listen(_config2.default.PORT, function (err) {
    if (err) {
        console.log("There was an error ");
    }

    console.log('Express api is running on ' + _config2.default.PORT);
});

module.exports = App;