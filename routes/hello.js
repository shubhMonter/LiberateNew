const express = require('express');
const router = express.Router();

router.get('/demo',(req,res)=>{
  res.send('hello brother!!!');
});
 module.exports = router;
