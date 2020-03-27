var express = require('express');
var router = express.Router();
const manager = require('./dbManage.js');
const db = manager();
/* GET home page. */
router.get('/datas/info', function(req, res, next) {
  console.log(db)
  db.getData().then(dbs=>{
    res.json(dbs);
  })
});

router.post('/datas/nuevo', function (req, res, next) {
  let obj = req.body
  console.log(obj)
  db.saveData(obj).then(()=>{
    res.json(obj);
  });
});

module.exports = router;
