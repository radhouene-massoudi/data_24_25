var express = require('express');
const student=require('../Model/student')
var router = express.Router();

/* GET liste des studnets. */
router.get('/getAll', function(req, res, next) {
  student.find().then(
    (r)=>{
      res.status(200).send(r);
    }
  )
});
router.post('/add', function(req, res, next) {
  student.create(req.body).then(
    ()=>{
      res.status(201).send(req.body);
    }
  )
});
module.exports = router;
