const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/',(req,res) => {
    
    res.sendFile(path.join(__dirname, "../views/index.html"));
    
    /*fs.writeFile('newfile.js', 'function hola(){console.log("sisas");}', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });*/
      
});

router.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
});






module.exports = router;