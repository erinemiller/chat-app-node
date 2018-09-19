const colors = require('colors')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
// for cross-domain ajax
app.use(bodyParser.json());
//for parsing app/json
app.use(bodyParser.urlencoded({ extended:true }));
//for parsing application/x-www-form-urlencoded


let messages = []

console.log('running index.js'.red)


app.get('/', function(req, res) {
   res.send('Hello World!')
})


app.post('/message', function(req, res) {
    console.log(req.body.text)

    messages.push({
        text: req.body.text,
        username: "",
        timestamp: new Date().getTime()
    })

    res.send(messages)
 })
 

app.listen(1337, function() { 
    console.log('Example app listening on port 1337!')
})



/* expresss- makes the http model user friendly a
wrapper to make a nicer easier to use modal
*/