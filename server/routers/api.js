var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("realestate");

//Get all properties
router.get('/properties',function(req,res){
  db.Property.find(
    function(err,data){
      if(err){
        res.send(err)
      }else{
        res.json(data);
        //console.log(data);
      }
    });
});

//Get Single property
// router.get('/property/:id',function(req,res){
//     db.Property.findOne({
//       _id: mongojs.ObjectId(req.params.id)
      
//     },function(err,data){
//         if(err){
//           res.send(err)
//         }else{
//           res.json(data);
//           //console.log(data)
//         }
//       });
// });


module.exports = router;