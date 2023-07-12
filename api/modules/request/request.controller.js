let express = require('express');
let router = express.Router();
let { ProcessingRequest } = require("./request.service");

router.get('/', function(req, res, next) {

  res.send(ProcessingRequest());
});

module.exports = router;