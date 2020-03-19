const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const ThreeBox = require('.services/infura.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/', (req, res) => {
    ThreeBox.CreateBoxData.setBoxData(req.title, req.story);
    res.send(`Your story was successfully saved to the ipfs!`);
   });
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
