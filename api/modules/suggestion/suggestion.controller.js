let express = require('express');
let router = express.Router();
let { AnswerSuggestion, GetSuggestion } = require("./suggestion.service");

router.get('/answer', function(req, res, next) {
  res.json(AnswerSuggestion());
});

router.get('/', function(req, res, next) {
  res.json(GetSuggestion());
});

module.exports = router;