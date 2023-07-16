let express = require('express');
let router = express.Router();
let { ProcessingRequest, CreateRequest } = require("./request.service");

router.get('/', function(req, res, next) {
  res.send(ProcessingRequest());
});

router.post("/create", function (req, res) {
  res.json(CreateRequest(req.body))
})

module.exports = router;