const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Video = require('../../models/Videos');


router.get('/videos',(req,res)=>{
console.log(req.query.string);

//console.log(spawn);

  const errors={};
  //Video.find()
  //.populate('video',['descrip','link'])
//  .then(videos=>{
//    if(videos===undefined||
//    videos===null||
//    (typeof videos ==='object' && Object.keys(videos).length===0)||
//    (typeof videos ==='string' && videos.trim().length===0)){
//      console.log("in if");
    //errors.novideos = 'loading videos';
//     scrapv();
       //res.status(404).json(errors);
  //  }

   //console.log(videos);
  //  res.json(videos);
//})
  //.catch(err=>res.status(404).json(err));

//function scrapv(){
  //console.log("in func");
  const { spawn } = require('child_process');
    const pyProg = spawn('python',['./ytscrapi3.py',req.query.string]);

    pyProg.stdout.on('data', function(data) {
    //  console.log(" in stdout");
      //console.log(data.toString());
    //  var s=data.toString();
    //  var j=JSON.stringify(s);
    //  res.json(j);
      //var v= new Video ({
    //    vid:j
    //  });

    //  v.save(function(err) {
    //    if (err) throw err;


    //    console.log('Book successfully saved.');
  //  });

  try{
 var jsonString = data.toString('utf8');
 var arraySuggestions = new Array();

 var str = jsonString.replace(/\'/g,'\"');

 arraySuggestions = JSON.parse(str);
 var suggestions =new Array();
 for(var i=0;i<arraySuggestions.length;i++){
 if(textSearchSuggestions.includes(arraySuggestions[i].suggestion)){
 suggestions.push(arraySuggestions[i]);
 }
 }
 arraySuggestions = suggestions;

 var finalResult = searchSuggestions.concat(arraySuggestions);
 res.json(finalResult);
 //send success response
}catch(exception){
 //send error response
 console.log(exception);
 }
  });
    pyProg.stderr.on('data', (data) => {
        console.log(data)
    });
  //  console.log(v)
  //res.send(v);
//}



});
//router.post('/scrapp', (req, res) => {

    //const { spawn } = require('child_process');
  //  const pyProg = spawn('python',['./youtubescraping.py',req.query.string]);

  //  pyProg.stdout.on('data', function(data) {
    //    console.log(data.toString());
    //    res.write(data.toString());

  //  });
  //  pyProg.stderr.on('data', (data) => {
  //      console.log(data)
  //      res.write(data);
  //  });
//})
module.exports = router;
