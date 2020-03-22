const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const ThreeBox = require('./services/3Box.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
      infuraData = ThreeBox.AllBoxData;
      res.render('pages/index', infuraData)})
  .set('/', (req, res) => {
    story = {"title": req.title, "story": req.story};
    ThreeBox.CreateBoxData(req.title, story);
    res.send(`Your story was successfully saved to the ipfs!`);
   })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
