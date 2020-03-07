const express = require('express');
const router =express.Router();

//@route GET api/register/test
//@desc test post register
//@access public
router.get('/test',(req,res) => res.json({msg:"register works"})
);

module.exports = router;
