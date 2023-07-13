let express = require('express');
let router = express.Router();
let { ReceiveHome } = require("./home.service");

router.get('/receive', function(req, res, next) {
  res.json(ReceiveHome());
});

module.exports = router;