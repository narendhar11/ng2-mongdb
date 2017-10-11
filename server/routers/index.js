var express = require("express");
var router = express.Router()

// router.get('/',function(req,res){
//   res.send('Hello world from indexjs')
// })
//router.get('/',function(req,res){
  // res.render('index.html')
//})
/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
  });

module.exports = router;
