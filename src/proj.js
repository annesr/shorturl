 
const express = require('express')
const validUrl = require('valid-url')
const mongoose = require('./db/mongoose')
const shortid =require('shortid')


const app = express()
app.use(express.json())





app.get('/:number', async (req, res) => {
    try {
      const url = await mongoose.x.findOne({ urlCode: req.params.number });

      // console.log('number =' ,req.params.number);

      // console.log('url= ', url);

      //console.log( 'res =' ,res);
  
      if (url) {
        return res.redirect(url.mainurl);
      } else {
        return res.status(404).json('Sorry!.. No url found');
      }
    } catch (err) {
      //console.error(err);
      res.status(500).json('Server error');
    }
  });




app.post('/post', async(req,res) => {

    const mainurl =req.body.mainurl
    const baseurl = req.body.baseurl

    
        if (!validUrl.isUri(baseurl)) {
            return res.status(401).json('Ooops..! Invalid base url');
          }

        const urlCode = shortid.generate();

        if (validUrl.isUri(mainurl)) {
            try {
              let url = await mongoose.x.findOne({ mainurl });

              //console.log(url);
        
              if (url) {
                res.json(url);
              } else {
                const shorturl = baseurl + '/' + urlCode;



                mongoose.Count.findOneAndUpdate( 
                    {id:"Id"},
                    {"$inc":{"seq":1}},
                    {new:true}, async(err,val) => {
                
                    console.log("value: ",val);
                
                    let seqid;
                
                    if (val==null) {
                        const newval = new mongoose.Count({id:"Id",seq:1})
                        newval.save()
                        seqid=1
                        
                    } else{
                        seqid =val.seq
                    }

                    
               const record = new mongoose.x({
                id:seqid,
                mainurl,
                baseurl,
                shorturl:shorturl,
                urlCode:urlCode
              });
      
              await record.save();
                    
                    })

        
                res.json({"success":"your short url is ready now"});
                //console.log('url= ',url);
              }
                
              
            } catch (err) {
              console.error(err);
              res.status(500).json('Server error');
            }
          } else {
            res.status(401).json('Ooops! Invalid long url');
          }
        })




app.listen(3000,() => {

    console.log('server is up')

})