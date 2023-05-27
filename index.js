const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Uploading a website from GitHub to EC2')
})

app.listen(4000, ()=>{
    console.log("Started server");
  }
)
